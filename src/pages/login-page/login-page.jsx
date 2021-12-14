import React from 'react';
import { Link } from 'react-router-dom';
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import DialogPage from '../../components/dialog-page/dialog-page';
import Form from '../../components/form/form';
import styles from './login-page.module.css';

const LoginPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };
    const updatePassword = (e) => {
        setPassword(e.target.value);
    };
    const logIn = (e) => {
        e.preventDefault();
    };

    return (
        <DialogPage>
            <Form onSubmit={logIn}>
                <p className="text text_type_main-medium">
                    Вход
                </p>
                <EmailInput name="email" value={email} onChange={updateEmail} />
                <PasswordInput name="password" value={password} onChange={updatePassword} />
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
