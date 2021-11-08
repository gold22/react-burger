import PropTypes from 'prop-types';
import React from 'react';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-nav-link.module.css';

class AppNavLink extends React.Component {
    render() {
        const iconType = this.props.active ? 'primary' : 'secondary';
        const textColor = this.props.active ? 'text_color_primary' : 'text_color_inactive';
        return (
            <div className={`${styles.main} pl-5 pr-5 pb-4 pt-4`}>
                {'burger' === this.props.icon && <BurgerIcon type={iconType}/>}
                {'list' === this.props.icon && <ListIcon type={iconType}/>}
                {'profile' === this.props.icon && <ProfileIcon type={iconType}/>}
                <p className={`text text_type_main-default pl-2 ${textColor}`}>{this.props.text}</p>
            </div>
        );
    }
}

AppNavLink.propTypes = {
    icon: PropTypes.oneOf(['burger', 'list', 'profile']),
    text: PropTypes.string.isRequired,
    active: PropTypes.bool,
};

AppNavLink.defaultProps = {
    active: false
};

export default AppNavLink;
