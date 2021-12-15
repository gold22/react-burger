import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import DialogPage from '../../components/dialog-page/dialog-page';
import Form from '../../components/form/form';
import loginStyles from '../login-page/login-page.module.css';

const ForgotPasswordPage = () => {
    const [email, setEmail] = React.useState('');

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };
    const restore = (e) => {
        e.preventDefault();
    };

    return (
        <DialogPage>
            <Form onSubmit={restore}>
                <p className="text text_type_main-medium">
                    Восстановление пароля
                </p>
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
