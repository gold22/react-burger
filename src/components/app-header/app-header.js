import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import NavLink from '../nav-link/nav-link';
import styles from './app-header.module.css';

class AppHeader extends React.Component {
    render() {
        return (
            <header className={`${styles.header} ml-10 mr-10 mt-10`}>
                <nav className={styles.leftNav}>
                    <NavLink icon="burger" text="Конструктор" selected />
                    <NavLink icon="list" text="Лента заказов" />
                </nav>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <nav className={styles.rightNav}>
                    <NavLink icon="profile" text="Личный кабинет" />
                </nav>
            </header>
        );
    }
}

export default AppHeader;
