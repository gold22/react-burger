import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import DialogPage from '../../components/dialog-page/dialog-page';
import Form from '../../components/form/form';
import ErrorMessage from '../../components/error-message/error-message';
import { resetEmailSent, sendResetUserPasswordEmail } from '../../services/actions/reset-password';
import ApiClient from '../../services/api-client';
import loginStyles from '../login-page/login-page.module.css';

const ForgotPasswordPage = () => {
    const [email, setEmail] = React.useState('');
    const { auth } = useSelector((state) => state);
    const { resetPassword } = useSelector((state) => state);
    const dispatch = useDispatch();

    React.useEffect(() => () => {
        dispatch(resetEmailSent());
    }, [dispatch]);

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };
    const restore = (e) => {
        e.preventDefault();
        if (resetPassword.isSendingEmail) {
            // avoid redundant requests over double mouse clicks
            return;
        }
        dispatch(sendResetUserPasswordEmail(email));
    };

    if (auth.user || ApiClient.isAuthenticated()) {
        return <Redirect to="/" />;
    }
    if (resetPassword.isEmailSent) {
        localStorage.setItem('isEmailSent', 'true');
        return <Redirect to="/reset-password" push />;
    }

    return (
        <DialogPage>
            <Form onSubmit={restore}>
                <p className="text text_type_main-medium">
                    Восстановление пароля
                </p>
                {resetPassword.sendingEmailError && (
                    <ErrorMessage message={resetPassword.sendingEmailError} />
                )}
                <Input
                    type="text"
                    name="email"
                    placeholder="Укажите E-mail"
                    value={email}
                    onChange={updateEmail}
                />
                <Button type="primary" size="medium">
                    Восстановить
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

export default ForgotPasswordPage;
