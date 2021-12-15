import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import DialogPage from '../../components/dialog-page/dialog-page';
import Form from '../../components/form/form';
import loginStyles from '../login-page/login-page.module.css';

const ResetPasswordPage = () => {
    const [password, setPassword] = React.useState('');
    const [code, setCode] = React.useState('');

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };
    const updateCode = (e) => {
        setCode(e.target.value);
    };
    const reset = (e) => {
        e.preventDefault();
    };

    return (
        <DialogPage>
            <Form onSubmit={reset}>
                <p className="text text_type_main-medium">
                    Регистрация
                </p>
                <PasswordInput
                    name="password"
                    value={password}
                    onChange={updatePassword}
                />
                <Input
                    type="text"
                    name="code"
                    placeholder="Введите код из письма"
                    value={code}
                    onChange={updateCode}
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
