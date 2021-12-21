import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { setRedirectTo } from '../../services/actions/auth';

const ProtectedRoute = ({ children, path }) => {
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    const render = ({ location }) => {
        if (auth.user) {
            return children;
        }
        dispatch(setRedirectTo(location));
        return <Redirect to="/login" push />;
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
