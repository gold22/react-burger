import { authReducer, TAuthState } from '../auth';
import { TApiUserInfo } from '../../types/api';
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
} from '../../constants/auth';
import { userInfo } from '../../../__fixtures__/user';

const initialState: TAuthState = authReducer(undefined, {} as any);

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(initialState).toMatchSnapshot();
    });

    it('should handle REGISTER_USER_REQUEST', () => {
        expect(authReducer(undefined, { type: REGISTER_USER_REQUEST }))
            .toMatchSnapshot();
    });

    it('should handle REGISTER_USER_SUCCESS', () => {
        const state = {
            ...initialState,
            isRegistering: true,
        };
        expect(authReducer(state, { type: REGISTER_USER_SUCCESS, user: userInfo }))
            .toMatchSnapshot();
    });

    it('should handle REGISTER_USER_ERROR', () => {
        const state = {
            ...initialState,
            isRegistering: true,
        };
        expect(authReducer(state, { type: REGISTER_USER_ERROR, message: 'Registration error' }))
            .toMatchSnapshot();
    });

    it('should handle LOGIN_USER_REQUEST', () => {
        expect(authReducer(undefined, { type: LOGIN_USER_REQUEST }))
            .toMatchSnapshot();
    });

    it('should handle LOGIN_USER_SUCCESS', () => {
        const state = {
            ...initialState,
            isLoggingIn: true,
        };
        expect(authReducer(state, { type: LOGIN_USER_SUCCESS, user: userInfo }))
            .toMatchSnapshot();
    });

    it('should handle LOGIN_USER_ERROR', () => {
        const state = {
            ...initialState,
            isLoggingIn: true,
        };
        expect(authReducer(state, { type: LOGIN_USER_ERROR, message: 'Login error' }))
            .toMatchSnapshot();
    });

    it('should handle LOGOUT_USER_REQUEST', () => {
        const state = {
            ...initialState,
            user: userInfo,
        };
        expect(authReducer(state, { type: LOGOUT_USER_REQUEST }))
            .toMatchSnapshot();
    });

    it('should handle LOGOUT_USER_SUCCESS', () => {
        const state = {
            ...initialState,
            user: userInfo,
            isLoggingOut: true,
        };
        expect(authReducer(state, { type: LOGOUT_USER_SUCCESS }))
            .toMatchSnapshot();
    });

    it('should handle LOGOUT_USER_ERROR', () => {
        const state = {
            ...initialState,
            user: userInfo,
            isLoggingOut: true,
        };
        expect(authReducer(state, { type: LOGOUT_USER_ERROR, message: 'Logout error' }))
            .toMatchSnapshot();
    });

    it('should handle GET_USER_REQUEST', () => {
        expect(authReducer(undefined, { type: GET_USER_REQUEST }))
            .toMatchSnapshot();
    });

    it('should handle GET_USER_SUCCESS', () => {
        const state = {
            ...initialState,
            isLoading: true,
        };
        expect(authReducer(state, { type: GET_USER_SUCCESS, user: userInfo }))
            .toMatchSnapshot();
    });

    it('should handle GET_USER_ERROR', () => {
        const state = {
            ...initialState,
            isLoading: true,
        };
        expect(authReducer(state, { type: GET_USER_ERROR, message: 'Get user error' }))
            .toMatchSnapshot();
    });

    it('should handle UPDATE_USER_REQUEST', () => {
        const state = {
            ...initialState,
            user: userInfo,
        };
        expect(authReducer(state, { type: UPDATE_USER_REQUEST }))
            .toMatchSnapshot();
    });

    it('should handle UPDATE_USER_SUCCESS', () => {
        const state = {
            ...initialState,
            isUpdating: true,
        };
        const updatedUserInfo: TApiUserInfo = {
            name: 'Updated',
            email: 'updated@example.tld',
        };
        expect(authReducer(state, { type: UPDATE_USER_SUCCESS, user: updatedUserInfo }))
            .toMatchSnapshot();
    });

    it('should handle UPDATE_USER_ERROR', () => {
        const state = {
            ...initialState,
            isUpdating: true,
        };
        expect(authReducer(state, { type: UPDATE_USER_ERROR, message: 'Update user error' }))
            .toMatchSnapshot();
    });
});
