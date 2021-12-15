import React from 'react';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from '../form/form';
import styles from './profile-form.module.css';

const ProfileForm = () => {
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
    const update = (e) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={update}>
            <Input
                type="text"
                name="name"
                placeholder="Имя"
                value={name}
                icon="EditIcon"
                onChange={updateName}
            />
            <Input
                type="email"
                name="email"
                placeholder="Логин"
                value={email}
                icon="EditIcon"
                onChange={updateEmail}
            />
            <PasswordInput
                name="password"
                value={password}
                onChange={updatePassword}
            />
            <div className={styles.buttons}>
                <Button type="secondary" size="medium">
                    Отмена
                </Button>
                <Button type="primary" size="medium">
                    Сохранить
                </Button>
            </div>
        </Form>
    );
};

export default ProfileForm;
