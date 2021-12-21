import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ children, path }) => {
    const { auth } = useSelector((state) => state);

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
