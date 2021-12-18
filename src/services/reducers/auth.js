import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
} from '../actions/auth';

const unauthState = {
    user: null,
    accessToken: null,
    isRegistering: false,
    registrationError: null,
    isLoggingIn: false,
    loginError: null,
    isSendingEmail: false,
    sendingEmailError: null,
    isResettingPassword: false,
    resetPasswordError: null,
};

const initialState = {
    redirectPath: '/',
    ...unauthState,
};

// eslint-disable-next-line import/prefer-default-export
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
    case REGISTER_USER_REQUEST: {
        return {
            ...state,
            isRegistering: true,
        };
    }
    case REGISTER_USER_SUCCESS: {
        localStorage.setItem('refreshToken', action.refreshToken);
        return {
            ...state,
            ...unauthState,
            user: action.user,
            accessToken: action.accessToken,
        };
    }
    case REGISTER_USER_ERROR: {
        return {
            ...state,
            ...unauthState,
            registrationError: action.message,
        };
    }
    case LOGIN_USER_REQUEST: {
        return {
            ...state,
            isLoggingIn: true,
        };
    }
    case LOGIN_USER_SUCCESS: {
        localStorage.setItem('refreshToken', action.refreshToken);
        return {
            ...state,
            ...unauthState,
            user: action.user,
            accessToken: action.accessToken,
        };
    }
    case LOGIN_USER_ERROR: {
        return {
            ...state,
            ...unauthState,
            loginError: action.message,
        };
    }
    default: {
        return state;
    }
    }
};
