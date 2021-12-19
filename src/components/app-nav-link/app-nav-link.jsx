import PropTypes from 'prop-types';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-nav-link.module.css';

const AppNavLink = ({ icon, text, to, exact }) => {
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

AppNavLink.propTypes = {
    icon: PropTypes.oneOf(['burger', 'list', 'profile']).isRequired,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool,
};

AppNavLink.defaultProps = {
    exact: false,
};

export default AppNavLink;
