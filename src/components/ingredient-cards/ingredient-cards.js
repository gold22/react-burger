import PropTypes from 'prop-types';
import React from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import { ingredientType } from '../../utils/types';
import styles from './ingredient-cards.module.css';

const IngredientCards = ({ title, ingredients, innerRef }) => {
    return (
        <div ref={innerRef}>
            <p className="text text_type_main-medium">{title}</p>
            <div className={`${styles.cards} pt-6 pb-10 pl-4`}>
                {ingredients.map(ingredient => (
                    <IngredientCard
                        key={ingredient._id}
                        ingredient={ingredient}
                        count={7}
                    />
                ))}
            </div>
        </div>
    );
};

IngredientCards.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
    innerRef: PropTypes.object.isRequired,
};

IngredientCards.defaultProps = {
    count: 0,
};

export default IngredientCards;
