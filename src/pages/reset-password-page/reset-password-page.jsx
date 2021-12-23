import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import DialogPage from '../../components/dialog-page/dialog-page';
import Form from '../../components/form/form';
import ErrorMessage from '../../components/error-message/error-message';
import { resetPasswordReset, resetUserPassword } from '../../services/actions/reset-password';
import ApiClient from '../../services/api-client';
import loginStyles from '../login-page/login-page.module.css';

const ResetPasswordPage = () => {
    const [password, setPassword] = React.useState('');
    const [token, setToken] = React.useState('');
    const { auth } = useSelector((state) => state);
    const { resetPassword } = useSelector((state) => state);
    const location = useLocation();
    const dispatch = useDispatch();

    React.useEffect(() => () => {
        dispatch(resetPasswordReset());
    }, [resetPassword.isPasswordReset, dispatch]);

    if (auth.user || ApiClient.isAuthenticated()) {
        return <Redirect to="/" />;
    }
    if (location.state?.from.pathname !== '/forgot-password') {
        return <Redirect to="/forgot-password" />;
    }
    if (resetPassword.isPasswordReset) {
        return <Redirect to="/login" push />;
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };
    const updateToken = (e) => {
        setToken(e.target.value);
    };
    const reset = (e) => {
        e.preventDefault();
        if (resetPassword.isResettingPassword) {
            // avoid redundant requests over double mouse clicks
            return;
        }
        dispatch(resetUserPassword({ password, token }));
    };

    return (
        <DialogPage>
            <Form onSubmit={reset}>
                <p className="text text_type_main-medium">
                    Регистрация
                </p>
                {resetPassword.resetPasswordError && (
                    <ErrorMessage message={resetPassword.resetPasswordError} />
                )}
                <PasswordInput
                    name="password"
                    value={password}
                    onChange={updatePassword}
                />
                <Input
                    type="text"
                    name="token"
                    placeholder="Введите код из письма"
                    value={token}
                    onChange={updateToken}
                />
                <Button type="primary" size="medium">
                    Сохранить
                </Button>
            </Form>
            <div className={loginStyles.links}>
                <div>
                    <span className="text text_type_main-default text_color_inactive">
                        Вспомнили пароль?&nbsp;
                    </span>
                    <Link to="/login" className="text text_type_main-default text_color_accent">
                        Войти
                    </Link>
                </div>
            </div>
        </DialogPage>
    );
};

export default ResetPasswordPage;
