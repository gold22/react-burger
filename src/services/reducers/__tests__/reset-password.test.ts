import { resetPasswordReducer, TResetPasswordState } from '../reset-password';
import {
    RESET_EMAIL_SENT,
    RESET_PASSWORD_RESET,
    RESET_USER_PASSWORD_ERROR,
    RESET_USER_PASSWORD_REQUEST,
    RESET_USER_PASSWORD_SUCCESS,
    SEND_RESET_USER_PASSWORD_EMAIL_ERROR,
    SEND_RESET_USER_PASSWORD_EMAIL_REQUEST,
    SEND_RESET_USER_PASSWORD_EMAIL_SUCCESS,
} from '../../constants/reset-password';

const initialState: TResetPasswordState = resetPasswordReducer(undefined, {} as any);

describe('reset password reducer', () => {
    it('should return the initial state', () => {
        expect(initialState).toMatchSnapshot();
    });

    it('should handle SEND_RESET_USER_PASSWORD_EMAIL_REQUEST', () => {
        expect(resetPasswordReducer(undefined, { type: SEND_RESET_USER_PASSWORD_EMAIL_REQUEST }))
            .toMatchSnapshot();
    });

    it('should handle SEND_RESET_USER_PASSWORD_EMAIL_SUCCESS', () => {
        const state: TResetPasswordState = {
            ...initialState,
            isSendingEmail: true,
        };
        expect(resetPasswordReducer(state, { type: SEND_RESET_USER_PASSWORD_EMAIL_SUCCESS }))
            .toMatchSnapshot();
    });

    it('should handle SEND_RESET_USER_PASSWORD_EMAIL_ERROR', () => {
        const state: TResetPasswordState = {
            ...initialState,
            isSendingEmail: true,
        };
        expect(resetPasswordReducer(state, { type: SEND_RESET_USER_PASSWORD_EMAIL_ERROR, message: 'Send email error' }))
            .toMatchSnapshot();
    });

    it('should handle RESET_EMAIL_SENT', () => {
        const state: TResetPasswordState = {
            ...initialState,
            isEmailSent: true,
        };
        expect(resetPasswordReducer(state, { type: RESET_EMAIL_SENT }))
            .toMatchSnapshot();
    });

    it('should handle RESET_USER_PASSWORD_REQUEST', () => {
        expect(resetPasswordReducer(undefined, { type: RESET_USER_PASSWORD_REQUEST }))
            .toMatchSnapshot();
    });

    it('should handle RESET_USER_PASSWORD_SUCCESS', () => {
        const state: TResetPasswordState = {
            ...initialState,
            isResettingPassword: true,
        };
        expect(resetPasswordReducer(state, { type: RESET_USER_PASSWORD_SUCCESS }))
            .toMatchSnapshot();
    });

    it('should handle RESET_USER_PASSWORD_ERROR', () => {
        const state: TResetPasswordState = {
            ...initialState,
            isResettingPassword: true,
        };
        expect(resetPasswordReducer(state, { type: RESET_USER_PASSWORD_ERROR, message: 'Reset password error' }))
            .toMatchSnapshot();
    });

    it('should handle RESET_PASSWORD_RESET', () => {
        const state: TResetPasswordState = {
            ...initialState,
            isPasswordReset: true,
        };
        expect(resetPasswordReducer(state, { type: RESET_PASSWORD_RESET }))
            .toMatchSnapshot();
    });
});
