export const SEND_RESET_USER_PASSWORD_EMAIL_REQUEST = 'SEND_RESET_USER_PASSWORD_EMAIL_REQUEST';
export const SEND_RESET_USER_PASSWORD_EMAIL_SUCCESS = 'SEND_RESET_USER_PASSWORD_EMAIL_SUCCESS';
export const SEND_RESET_USER_PASSWORD_EMAIL_ERROR = 'SEND_RESET_USER_PASSWORD_EMAIL_ERROR';
export const RESET_EMAIL_SENT = 'RESET_EMAIL_SENT';
export const RESET_USER_PASSWORD_REQUEST = 'RESET_USER_PASSWORD_REQUEST';
export const RESET_USER_PASSWORD_SUCCESS = 'RESET_USER_PASSWORD_SUCCESS';
export const RESET_USER_PASSWORD_ERROR = 'RESET_USER_PASSWORD_ERROR';
export const RESET_PASSWORD_RESET = 'RESET_PASSWORD_RESET';

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
