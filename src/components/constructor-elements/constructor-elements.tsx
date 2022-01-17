import React from 'react';
import { useSelector } from 'react-redux';
import ConstructorElement from '../constructor-element/constructor-element';
import { getBun, isBun } from '../../utils/ingredients';
import { TIngredient } from '../../utils/types';
import styles from './constructor-elements.module.css';

const ConstructorElements = () => {
    const { bun, ingredients } = useSelector((state: any) => ({
        bun: getBun(state.burgerConstructor.ingredients),
        ingredients: state.burgerConstructor.ingredients.filter(
            (ingredient: TIngredient) => !isBun(ingredient),
        ),
    }));

    return (
        <div className={styles.main}>
            {bun && (
                <ConstructorElement
                    index={0}
                    type="top"
                    ingredient={bun}
                />
            )}
            <div className={`${styles.optionalItems} custom-scroll`}>
                {ingredients.map((ingredient: TIngredient, index: number) => (
                    <ConstructorElement
                        key={ingredient.uuid}
                        index={bun ? index + 1 : index}
                        type="center"
                        ingredient={ingredient}
                    />
                ))}
            </div>
            {bun && (
                <ConstructorElement
                    index={ingredients.length + 1}
                    type="bottom"
                    ingredient={bun}
                />
            )}
        </div>
    );
};

export default ConstructorElements;
