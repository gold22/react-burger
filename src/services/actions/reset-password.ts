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
import { TDispatch, TGetState, TThunk } from '../types/store';
import { TApiUserResetPasswordInfo } from '../types/api';
import { IResetEmailSentAction, IResetPasswordResetAction } from '../types/actions/reset-password';
import ApiClient from '../api-client';
import { getErrorMessage } from '../../utils/error';

export const sendResetUserPasswordEmail: TThunk = (email: string) => async (
    dispatch: TDispatch,
    getState: TGetState,
    apiClient: ApiClient,
) => {
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
            message: getErrorMessage(error),
        });
    }
};

export const resetEmailSent = (): IResetEmailSentAction => ({
    type: RESET_EMAIL_SENT,
});

export const resetUserPassword: TThunk = ({ password, token }: TApiUserResetPasswordInfo) => async (
    dispatch: TDispatch,
    getState: TGetState,
    apiClient: ApiClient,
) => {
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
            message: getErrorMessage(error),
        });
    }
};

export const resetPasswordReset = (): IResetPasswordResetAction => ({
    type: RESET_PASSWORD_RESET,
});
