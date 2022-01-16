import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-nav-link.module.css';

type TAppNavLinkProps = {
    icon: 'burger' | 'list' | 'profile';
    text: string;
    to: string;
    exact?: boolean;
};

const AppNavLink: React.FC<TAppNavLinkProps> = ({ icon, text, to, exact }) => {
    const match = useRouteMatch(to);
    const iconType = match && (match.isExact || !exact) ? 'primary' : 'secondary';
    const textColor = match && (match.isExact || !exact) ? 'text_color_primary' : 'text_color_inactive';
    return (
        <NavLink to={to} exact={exact} className={`${styles.main} pl-5 pr-5 pb-4 pt-4`}>
            {icon === 'burger' && <BurgerIcon type={iconType} />}
            {icon === 'list' && <ListIcon type={iconType} />}
            {icon === 'profile' && <ProfileIcon type={iconType} />}
            <p className={`text text_type_main-default pl-2 ${textColor}`}>{text}</p>
        </NavLink>
    );
};

export default AppNavLink;
