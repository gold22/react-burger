import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import DialogPage from '../../components/dialog-page/dialog-page';
import Form from '../../components/form/form';
import ErrorMessage from '../../components/error-message/error-message';
import { logInUser } from '../../services/actions/auth';
import styles from './login-page.module.css';

const LoginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };
    const updatePassword = (e) => {
        setPassword(e.target.value);
    };
    const logIn = (e) => {
        e.preventDefault();
        if (auth.isLoggingIn) {
            // avoid redundant requests over double mouse clicks
            return;
        }
        dispatch(logInUser({ email, password }));
    };

    return (
        <DialogPage>
            <Form onSubmit={logIn}>
                <p className="text text_type_main-medium">
                    Вход
                </p>
                {!auth.isLoggingIn && auth.loginError && (
                    <ErrorMessage message={auth.loginError} />
                )}
                <Input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={updateEmail}
                />
                <PasswordInput
                    name="password"
                    value={password}
                    onChange={updatePassword}
                />
                <Button type="primary" size="medium">
                    Войти
                </Button>
            </Form>
            <div className={styles.links}>
                <div>
                    <span className="text text_type_main-default text_color_inactive">
                        Вы - новый пользователь?&nbsp;
                    </span>
                    <Link to="/register" className="text text_type_main-default text_color_accent">
                        Зарегистрироваться
                    </Link>
                </div>
                <div>
                    <span className="text text_type_main-default text_color_inactive">
                        Забыли пароль?&nbsp;
                    </span>
                    <Link to="/forgot-password" className="text text_type_main-default text_color_accent">
                        Восстановить пароль
                    </Link>
                </div>
            </div>
        </DialogPage>
    );
};

export default LoginPage;
