import React from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import { TIngredients } from '../../utils/types';
import styles from './ingredient-cards.module.css';

type TIngredientCardsProps = {
    title: string;
    ingredients: TIngredients;
};

const IngredientCards = React.forwardRef<HTMLDivElement, TIngredientCardsProps>((
    { title, ingredients },
    ref,
) => (
    <div ref={ref}>
        <p className="text text_type_main-medium">{title}</p>
        <div className={`${styles.cards} pt-6 pb-10 pl-4`}>
            {ingredients.map((ingredient) => (
                <IngredientCard
                    key={ingredient.id}
                    ingredient={ingredient}
                />
            ))}
        </div>
    </div>
));

export default IngredientCards;
