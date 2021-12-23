import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getUser } from '../../services/actions/auth';
import ApiClient from '../../services/api-client';

const ProtectedRoute = ({ children, path }) => {
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

    const render = ({ location }) => {
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

ProtectedRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    path: PropTypes.string.isRequired,
};

export default ProtectedRoute;
