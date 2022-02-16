import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import AppNavLink from '../app-nav-link/app-nav-link';
import styles from './app-header.module.css';

const AppHeader = () => (
    <header className={`${styles.header} ml-10 mr-10 mt-10`}>
        <div className={styles.headerContent}>
            <nav className={styles.leftNav}>
                <AppNavLink icon="burger" text="Конструктор" to="/" exact data-testid="constructor-link" />
                <AppNavLink icon="list" text="Лента заказов" to="/feed" />
            </nav>
            <div className={styles.logo}>
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <nav className={styles.rightNav}>
                <AppNavLink icon="profile" text="Личный кабинет" to="/profile" />
            </nav>
        </div>
    </header>
);

export default AppHeader;
