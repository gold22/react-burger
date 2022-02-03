import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks';
import { getUser } from '../../services/actions/auth';
import ApiClient from '../../services/api-client';

type TProtectedRouteProps = {
    path: string;
};

const ProtectedRoute: React.FC<TProtectedRouteProps> = ({ children, path }) => {
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (!auth.user && ApiClient.isAuthenticated()) {
            dispatch(getUser());
        }
    }, [auth.user, dispatch]);

    if (!auth.user && ApiClient.isAuthenticated() && !auth.loadError) {
        return null;
    }

    const render = ({ location }: RouteComponentProps): React.ReactNode => {
        if (auth.user) {
            return children;
        }
        return (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location },
                }}
            />
        );
    };

    return (
        <Route
            path={path}
            render={render}
        />
    );
};

export default ProtectedRoute;
