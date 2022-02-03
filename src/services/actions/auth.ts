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
import { TApiUser, TApiUserCredentials } from '../types/api';
import { TDispatch, TGetState, TThunk } from '../types/store';
import ApiClient from '../api-client';
import { getErrorMessage } from '../../utils/error';

export const registerUser: TThunk = (user: TApiUser) => async (
    dispatch: TDispatch,
    getState: TGetState,
    apiClient: ApiClient,
) => {
    dispatch({
        type: REGISTER_USER_REQUEST,
    });
    try {
        const result = await apiClient.registerUser(user);
        dispatch({
            type: REGISTER_USER_SUCCESS,
            user: result,
        });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_ERROR,
            message: getErrorMessage(error),
        });
    }
};

export const logInUser: TThunk = (user: TApiUserCredentials) => async (
    dispatch: TDispatch,
    getState: TGetState,
    apiClient: ApiClient,
) => {
    dispatch({
        type: LOGIN_USER_REQUEST,
    });
    try {
        const result = await apiClient.logInUser(user);
        dispatch({
            type: LOGIN_USER_SUCCESS,
            user: result,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_USER_ERROR,
            message: getErrorMessage(error),
        });
    }
};

export const logOutUser: TThunk = () => async (
    dispatch: TDispatch,
    getState: TGetState,
    apiClient: ApiClient,
) => {
    dispatch({
        type: LOGOUT_USER_REQUEST,
    });
    try {
        await apiClient.logOutUser();
        dispatch({
            type: LOGOUT_USER_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: LOGOUT_USER_ERROR,
            message: getErrorMessage(error),
        });
    }
};

export const getUser = () => async (
    dispatch: TDispatch,
    getState: TGetState,
    apiClient: ApiClient,
) => {
    dispatch({
        type: GET_USER_REQUEST,
    });
    try {
        const user = await apiClient.getUser();
        dispatch({
            type: GET_USER_SUCCESS,
            user,
        });
    } catch (error) {
        dispatch({
            type: GET_USER_ERROR,
            message: getErrorMessage(error),
        });
    }
};

export const updateUser = (user: TApiUser) => async (
    dispatch: TDispatch,
    getState: TGetState,
    apiClient: ApiClient,
) => {
    dispatch({
        type: UPDATE_USER_REQUEST,
    });
    try {
        const result = await apiClient.updateUser(user);
        dispatch({
            type: UPDATE_USER_SUCCESS,
            user: result,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_USER_ERROR,
            message: getErrorMessage(error),
        });
    }
};
