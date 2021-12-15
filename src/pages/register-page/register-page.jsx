import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import DialogPage from '../../components/dialog-page/dialog-page';
import Form from '../../components/form/form';
import loginStyles from '../login-page/login-page.module.css';

const RegisterPage = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const updateName = (e) => {
        setName(e.target.value);
    };
    const updateEmail = (e) => {
        setEmail(e.target.value);
    };
    const updatePassword = (e) => {
        setPassword(e.target.value);
    };
    const register = (e) => {
        e.preventDefault();
    };

    return (
        <DialogPage>
            <Form onSubmit={register}>
                <p className="text text_type_main-medium">
                    Регистрация
                </p>
                <Input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={name}
                    onChange={updateName}
                />
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
                    Зарегистрироваться
                </Button>
            </Form>
            <div className={loginStyles.links}>
                <div>
                    <span className="text text_type_main-default text_color_inactive">
                        Уже зарегистрированы?&nbsp;
                    </span>
                    <Link to="/login" className="text text_type_main-default text_color_accent">
                        Войти
                    </Link>
                </div>
            </div>
        </DialogPage>
    );
};

export default RegisterPage;
