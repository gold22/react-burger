import {
    SEND_RESET_USER_PASSWORD_EMAIL_REQUEST,
    SEND_RESET_USER_PASSWORD_EMAIL_SUCCESS,
    SEND_RESET_USER_PASSWORD_EMAIL_ERROR,
    RESET_EMAIL_SENT,
    RESET_USER_PASSWORD_REQUEST,
    RESET_USER_PASSWORD_SUCCESS,
    RESET_USER_PASSWORD_ERROR,
    RESET_PASSWORD_RESET,
} from '../constants/reset-password';

const initialState = {
    isEmailSent: false,
    isSendingEmail: false,
    sendingEmailError: null,
    isPasswordReset: false,
    isResettingPassword: false,
    resetPasswordError: null,
};

// eslint-disable-next-line import/prefer-default-export,@typescript-eslint/default-param-last
export const resetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
    case SEND_RESET_USER_PASSWORD_EMAIL_REQUEST: {
        return {
            ...state,
            isSendingEmail: true,
        };
    }
    case SEND_RESET_USER_PASSWORD_EMAIL_SUCCESS: {
        return {
            ...initialState,
            isEmailSent: true,
        };
    }
    case SEND_RESET_USER_PASSWORD_EMAIL_ERROR: {
        return {
            ...initialState,
            sendingEmailError: action.message,
        };
    }
    case RESET_EMAIL_SENT: {
        return {
            ...initialState,
        };
    }
    case RESET_USER_PASSWORD_REQUEST: {
        return {
            ...state,
            isResettingPassword: true,
        };
    }
    case RESET_USER_PASSWORD_SUCCESS: {
        return {
            ...initialState,
            isPasswordReset: true,
        };
    }
    case RESET_USER_PASSWORD_ERROR: {
        return {
            ...initialState,
            resetPasswordError: action.message,
        };
    }
    case RESET_PASSWORD_RESET: {
        return {
            ...initialState,
        };
    }
    default: {
        return state;
    }
    }
};
