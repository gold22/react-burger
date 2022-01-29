import React from 'react';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../services/hooks';
import Form from '../form/form';
import ErrorMessage from '../error-message/error-message';
import { getUser, updateUser } from '../../services/actions/auth';
import styles from './profile-form.module.css';

const ProfileForm = () => {
    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (auth.user) {
            setName(auth.user.name);
            setEmail(auth.user.email);
        } else {
            dispatch(getUser());
        }
    }, [auth.user, dispatch]);

    const updateName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value);
    };
    const updateEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setEmail(e.target.value);
    };
    const updatePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPassword(e.target.value);
    };
    const update: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const user = { name, email, password };
        dispatch(updateUser(user));
        setPassword('');
    };
    const reset = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        if (auth.user) {
            setName(auth.user.name);
            setEmail(auth.user.email);
        }
        setPassword('');
    };

    const hasChanges = auth.user && (name !== auth.user.name || email !== auth.user.email || password !== '');
    return (
        <Form onSubmit={update}>
            {auth.loadError && (
                <ErrorMessage message={auth.loadError} />
            )}
            {auth.updateError && (
                <ErrorMessage message={auth.updateError} />
            )}
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
            {hasChanges && (
                <div className={styles.buttons}>
                    <Button type="secondary" size="medium" onClick={reset}>
                        Отмена
                    </Button>
                    <Button type="primary" size="medium">
                        Сохранить
                    </Button>
                </div>
            )}
        </Form>
    );
};

export default ProfileForm;
