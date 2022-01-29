import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
} from '../constants/auth';

const initialState = {
    user: null,
    isRegistering: false,
    registrationError: null,
    isLoggingIn: false,
    loginError: null,
    isLoggingOut: false,
    logoutError: null,
    isSendingEmail: false,
    sendingEmailError: null,
    isResettingPassword: false,
    resetPasswordError: null,
    isLoading: true,
    loadError: null,
    isUpdating: true,
    updateError: null,
};

// eslint-disable-next-line import/prefer-default-export,@typescript-eslint/default-param-last
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
    case REGISTER_USER_REQUEST: {
        return {
            ...state,
            isRegistering: true,
        };
    }
    case REGISTER_USER_SUCCESS: {
        return {
            ...initialState,
            user: action.user,
        };
    }
    case REGISTER_USER_ERROR: {
        return {
            ...initialState,
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
        return {
            ...initialState,
            user: action.user,
        };
    }
    case LOGIN_USER_ERROR: {
        return {
            ...initialState,
            loginError: action.message,
        };
    }
    case LOGOUT_USER_REQUEST: {
        return {
            ...state,
            isLoggingOut: true,
            logoutError: null,
        };
    }
    case LOGOUT_USER_SUCCESS: {
        return {
            ...initialState,
        };
    }
    case LOGOUT_USER_ERROR: {
        return {
            ...state,
            isLoggingOut: false,
            logoutError: action.message,
        };
    }
    case GET_USER_REQUEST: {
        return {
            ...state,
            isLoading: true,
        };
    }
    case GET_USER_SUCCESS: {
        return {
            ...state,
            user: action.user,
            isLoading: false,
            loadError: null,
        };
    }
    case GET_USER_ERROR: {
        return {
            ...state,
            isLoading: false,
            loadError: action.message,
        };
    }
    case UPDATE_USER_REQUEST: {
        return {
            ...state,
            isUpdating: true,
        };
    }
    case UPDATE_USER_SUCCESS: {
        return {
            ...state,
            user: action.user,
            isUpdating: false,
            updateError: null,
        };
    }
    case UPDATE_USER_ERROR: {
        return {
            ...state,
            isUpdating: false,
            updateError: action.message,
        };
    }
    default: {
        return state;
    }
    }
};
