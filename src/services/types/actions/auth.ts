import {
    GET_USER_ERROR,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_ERROR,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    REGISTER_USER_ERROR,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    UPDATE_USER_ERROR,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
} from '../../constants/auth';
import { TApiUserInfo } from '../api';

export interface IRegisterUserAction {
    readonly type: typeof REGISTER_USER_REQUEST;
}

export interface IRegisterUserSuccessAction {
    readonly type: typeof REGISTER_USER_SUCCESS;
    readonly user: TApiUserInfo;
}

export interface IRegisterUserFailedAction {
    readonly type: typeof REGISTER_USER_ERROR;
    readonly message: string;
}

export interface ILogInUserAction {
    readonly type: typeof LOGIN_USER_REQUEST;
}

export interface ILogInUserSuccessAction {
    readonly type: typeof LOGIN_USER_SUCCESS;
    readonly user: TApiUserInfo;
}

export interface ILogInUserFailedAction {
    readonly type: typeof LOGIN_USER_ERROR;
    readonly message: string;
}

export interface ILogOutUserAction {
    readonly type: typeof LOGOUT_USER_REQUEST;
}

export interface ILogOutUserSuccessAction {
    readonly type: typeof LOGOUT_USER_SUCCESS;
}

export interface ILogOutUserFailedAction {
    readonly type: typeof LOGOUT_USER_ERROR;
    readonly message: string;
}

export interface IGetUserAction {
    readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS;
    readonly user: TApiUserInfo;
}

export interface IGetUserFailedAction {
    readonly type: typeof GET_USER_ERROR;
    readonly message: string;
}

export interface IUpdateUserAction {
    readonly type: typeof UPDATE_USER_REQUEST;
}

export interface IUpdateUserSuccessAction {
    readonly type: typeof UPDATE_USER_SUCCESS;
    readonly user: TApiUserInfo;
}

export interface IUpdateUserFailedAction {
    readonly type: typeof UPDATE_USER_ERROR;
    readonly message: string;
}

export type TAuthActions =
    | IRegisterUserAction
    | IRegisterUserSuccessAction
    | IRegisterUserFailedAction
    | ILogInUserAction
    | ILogInUserSuccessAction
    | ILogInUserFailedAction
    | ILogOutUserAction
    | ILogOutUserSuccessAction
    | ILogOutUserFailedAction
    | IGetUserAction
    | IGetUserSuccessAction
    | IGetUserFailedAction
    | IUpdateUserAction
    | IUpdateUserSuccessAction
    | IUpdateUserFailedAction;
