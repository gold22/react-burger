import PropTypes from 'prop-types';
import React from 'react';
// import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import styles from './card.module.css';

class Card extends React.Component {
    render() {
        const { name } = this.props.ingredient;
        return (
            <div className={styles.main}>
                <p className="text text_type_main-default">{name}</p>
            </div>
        );
    }
}

Card.propTypes = {
    ingredient: ingredientType.isRequired,
    count: PropTypes.number.isRequired,
};

Card.defaultProps = {
    count: 0,
};

export default Card;