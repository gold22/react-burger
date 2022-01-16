import React from 'react';
import { useSelector } from 'react-redux';
import ConstructorElement from '../constructor-element/constructor-element';
import { getBun, isBun } from '../../utils/ingredients';
import styles from './constructor-elements.module.css';

const ConstructorElements = () => {
    const { bun, ingredients } = useSelector((state) => ({
        bun: getBun(state.burgerConstructor.ingredients),
        ingredients: state.burgerConstructor.ingredients.filter((ingredient) => !isBun(ingredient)),
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
                {ingredients.map((ingredient, index) => (
                    <ConstructorElement
                        key={ingredient.uuid}
                        index={bun ? index + 1 : bun}
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
