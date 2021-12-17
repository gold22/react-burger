import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './profile-menu.module.css';

const ProfileMenu = () => {
    const getNavLinkClassName = (isActive) => (isActive
        ? `text text_type_main-medium text_color_primary ${styles.menuItem}`
        : `text text_type_main-medium text_color_inactive  ${styles.menuItem}`
    );
    return (
        <div className={styles.main}>
            <NavLink
                to="/profile"
                exact
                className={getNavLinkClassName}
            >
                Профиль
            </NavLink>
            <NavLink
                to="/profile/orders"
                exact
                className={getNavLinkClassName}
            >
                История заказов
            </NavLink>
            <NavLink
                to="/logout"
                exact
                className={getNavLinkClassName}
            >
                Выход
            </NavLink>

            <p className="text text_type_main-default text_color_inactive mt-20">
                В этом разделе вы можете изменить свои персональные данные
            </p>
        </div>
    );
};

export default ProfileMenu;