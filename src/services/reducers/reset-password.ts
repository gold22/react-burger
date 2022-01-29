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
import { TResetPasswordActions } from '../types/actions/reset-password';

export type TResetPasswordState = {
    isEmailSent: boolean;
    isSendingEmail: boolean;
    sendingEmailError: string | null;
    isPasswordReset: boolean;
    isResettingPassword: boolean;
    resetPasswordError: string | null;
};

const initialState: TResetPasswordState = {
    isEmailSent: false,
    isSendingEmail: false,
    sendingEmailError: null,
    isPasswordReset: false,
    isResettingPassword: false,
    resetPasswordError: null,
};

export const resetPasswordReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state: TResetPasswordState = initialState,
    action: TResetPasswordActions,
) => {
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
