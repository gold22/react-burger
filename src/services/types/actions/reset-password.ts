import {
    SEND_RESET_USER_PASSWORD_EMAIL_REQUEST,
    SEND_RESET_USER_PASSWORD_EMAIL_SUCCESS,
    SEND_RESET_USER_PASSWORD_EMAIL_ERROR,
    RESET_EMAIL_SENT,
    RESET_USER_PASSWORD_REQUEST,
    RESET_USER_PASSWORD_SUCCESS,
    RESET_USER_PASSWORD_ERROR,
    RESET_PASSWORD_RESET,
} from '../../constants/reset-password';

export interface ISendResetUserPasswordEmailAction {
    readonly type: typeof SEND_RESET_USER_PASSWORD_EMAIL_REQUEST;
}

export interface ISendResetUserPasswordEmailSuccessAction {
    readonly type: typeof SEND_RESET_USER_PASSWORD_EMAIL_SUCCESS;
}

export interface ISendResetUserPasswordEmailFailedAction {
    readonly type: typeof SEND_RESET_USER_PASSWORD_EMAIL_ERROR;
    readonly message: string;
}

export interface IResetEmailSentAction {
    readonly type: typeof RESET_EMAIL_SENT;
}

export interface IResetUserPasswordAction {
    readonly type: typeof RESET_USER_PASSWORD_REQUEST;
}

export interface IResetUserPasswordSuccessAction {
    readonly type: typeof RESET_USER_PASSWORD_SUCCESS;
}

export interface IResetUserPasswordFailedAction {
    readonly type: typeof RESET_USER_PASSWORD_ERROR;
    readonly message: string;
}

export interface IResetPasswordResetAction {
    readonly type: typeof RESET_PASSWORD_RESET;
}

export type TResetPasswordActions =
    | ISendResetUserPasswordEmailAction
    | ISendResetUserPasswordEmailSuccessAction
    | ISendResetUserPasswordEmailFailedAction
    | IResetEmailSentAction
    | IResetUserPasswordAction
    | IResetUserPasswordSuccessAction
    | IResetUserPasswordFailedAction
    | IResetPasswordResetAction;
