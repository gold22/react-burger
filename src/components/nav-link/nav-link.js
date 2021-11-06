import PropTypes from 'prop-types';
import React from 'react';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './nav-link.module.css';

class NavLink extends React.Component {
    render() {
        return (
            <div className={`${styles.main} pl-5 pr-5 pb-4 pt-4`}>
                {'burger' === this.props.icon && <BurgerIcon type="primary"/>}
                {'list' === this.props.icon && <ListIcon type="primary"/>}
                {'profile' === this.props.icon && <ProfileIcon type="primary"/>}
                <p className="text text_type_main-default pl-2">{this.props.text}</p>
            </div>
        );
    }
}

NavLink.propTypes = {
    icon: PropTypes.oneOf(['burger', 'list', 'profile']),
    text: PropTypes.string.isRequired,
};

export default NavLink;
