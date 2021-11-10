import PropTypes from 'prop-types';
import React from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import { ingredientType } from '../../utils/types';
import styles from './ingredient-cards.module.css';

class IngredientCards extends React.Component {
    render() {
        return (
            <div>
                <p className="text text_type_main-medium">{this.props.title}</p>
                <div className={`${styles.cards} pt-6 pb-10 pl-4`}>
                    {this.props.ingredients.map(ingredient => (
                        <IngredientCard
                            key={ingredient._id}
                            ingredient={ingredient}
                            count={7}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

IngredientCards.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

IngredientCards.defaultProps = {
    count: 0,
};

export default IngredientCards;