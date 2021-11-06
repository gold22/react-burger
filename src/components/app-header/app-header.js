import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import NavLink from '../nav-link/nav-link';
import styles from './app-header.module.css';

class AppHeader extends React.Component {
    render() {
        return (
            <header className={`${styles.main} pl-10 pr-10 pt-10`}>
                <NavLink icon="burger" text="Конструктор" />
                <NavLink icon="list" text="Лента заказов" />
                <Logo />
                <NavLink icon="profile" text="Личный кабинет" />
            </header>
        );
    }
}

export default AppHeader;
