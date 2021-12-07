import React from 'react';
import { useSelector } from 'react-redux';
import ConstructorElement from '../constructor-element/constructor-element';
import styles from './constructor-elements.module.css';

const ConstructorElements = () => {
    const { bun, ingredients } = useSelector((state) => state.burgerConstructor);

    return (
        <div className={styles.main}>
            {bun && (
                <ConstructorElement
                    key="top"
                    type="top"
                    ingredient={bun}
                />
            )}
            <div className={`${styles.optionalItems} custom-scroll`} key="middle">
                {ingredients.map((ingredient, index) => (
                    <ConstructorElement
                        key={ingredient.id}
                        index={index}
                        ingredient={ingredient}
                    />
                ))}
            </div>
            {bun && (
                <ConstructorElement
                    key="bottom"
                    type="bottom"
                    ingredient={bun}
                />
            )}
        </div>
    );
};

export default ConstructorElements;
