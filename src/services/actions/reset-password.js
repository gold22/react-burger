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

export const sendResetUserPasswordEmail = (email) => async (dispatch, getState, apiClient) => {
    dispatch({
        type: SEND_RESET_USER_PASSWORD_EMAIL_REQUEST,
    });
    try {
        await apiClient.sendResetUserPasswordEmail(email);
        dispatch({
            type: SEND_RESET_USER_PASSWORD_EMAIL_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: SEND_RESET_USER_PASSWORD_EMAIL_ERROR,
            message: error.message,
        });
    }
};

export const resetEmailSent = () => ({
    type: RESET_EMAIL_SENT,
});

export const resetUserPassword = ({ password, token }) => async (dispatch, getState, apiClient) => {
    dispatch({
        type: RESET_USER_PASSWORD_REQUEST,
    });
    try {
        await apiClient.resetUserPassword({ password, token });
        dispatch({
            type: RESET_USER_PASSWORD_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: RESET_USER_PASSWORD_ERROR,
            message: error.message,
        });
    }
};

export const resetPasswordReset = () => ({
    type: RESET_PASSWORD_RESET,
});
