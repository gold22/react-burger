import React from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import { getIngredientCount } from '../../utils/ingredients';
import { showIngredientDetails } from '../../services/actions/ingredient-details';
import styles from './ingredient-card.module.css';

const IngredientCard = ({ ingredient }) => {
    const count = useSelector((state) => getIngredientCount(
        ingredient.id, state.burgerConstructor.ingredients,
    ));
    const dispatch = useDispatch();

    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: { ingredient },
    });

    const { image, name, price } = ingredient;
    return (
        <div
            className={styles.main}
            onClick={() => { dispatch(showIngredientDetails(ingredient)); }}
            ref={dragRef}
        >
            {count > 0 && (
                <Counter count={count} size="default" />
            )}
            <img className="ml-4 mr-4" src={image} alt={name} />
            <div className={`mt-1 mb-1 ${styles.price}`}>
                <p className="text text_type_digits-default mr-2">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`text text_type_main-default ${styles.name}`}>{name}</p>
        </div>
    );
};

IngredientCard.propTypes = {
    ingredient: ingredientType.isRequired,
};

export default IngredientCard;
