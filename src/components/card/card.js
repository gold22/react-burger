import PropTypes from 'prop-types';
import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import styles from './card.module.css';

class Card extends React.Component {
    render() {
        const count = this.props.count;
        const { image, name, price } = this.props.ingredient;
        console.log(`${name}: ${count}`);
        return (
            <div className={styles.main}>
                {0 < count &&
                    <Counter count={count} size="default" />
                }
                <img className="ml-4 mr-4" src={image} alt="" />
                <div className={`mt-1 mb-1 ${styles.price}`}>
                    <p className="text text_type_digits-default mr-2">{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text text_type_main-default ${styles.name}`}>{name}</p>
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