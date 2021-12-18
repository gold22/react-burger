import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
} from '../actions/auth';

const initialState = {
    user: null,
    accessToken: null,
    isRegistering: false,
    registrationError: null,
    isLoggingIn: false,
    loginError: null,
};

// eslint-disable-next-line import/prefer-default-export
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
    case REGISTER_USER_REQUEST: {
        return {
            ...initialState,
            isRegistering: true,
        };
    }
    case REGISTER_USER_SUCCESS: {
        localStorage.setItem('refreshToken', action.refreshToken);
        return {
            ...initialState,
            user: action.user,
            accessToken: action.accessToken,
        };
    }
    case REGISTER_USER_ERROR: {
        localStorage.removeItem('refreshToken');
        return {
            ...initialState,
            registrationError: action.message,
        };
    }
    case LOGIN_USER_REQUEST: {
        return {
            ...initialState,
            isLoggingIn: true,
        };
    }
    case LOGIN_USER_SUCCESS: {
        localStorage.setItem('refreshToken', action.refreshToken);
        return {
            ...initialState,
            user: action.user,
            accessToken: action.accessToken,
        };
    }
    case LOGIN_USER_ERROR: {
        localStorage.removeItem('refreshToken');
        return {
            ...initialState,
            loginError: action.message,
        };
    }
    default: {
        return state;
    }
    }
};
