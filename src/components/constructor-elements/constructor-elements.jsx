import PropTypes from 'prop-types';
import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import styles from './constructor-elements.module.css';

const ConstructorElements = ({ ingredients }) => {
    return (
        <div className={styles.main}>
            {0 < ingredients.length &&
                <div className={`${styles.mainItem} pl-8`} key="top">
                    <ConstructorElement
                        type="top"
                        isLocked
                        text={`${ingredients[0].name} (верх)`}
                        price={ingredients[0].price}
                        thumbnail={ingredients[0].image_mobile}
                    />
                </div>
            }
            <div className={`${styles.optionalItems} custom-scroll`} key="middle">
                {ingredients.slice(1).map(ingredient => (
                    <div className={`${styles.optionalItem} custom-scroll pr-1`} key={ingredient._id}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image_mobile}
                        />
                    </div>
                ))}
            </div>
            {0 < ingredients.length &&
                <div className={`${styles.mainItem} pl-8`} key="bottom">
                    <ConstructorElement
                        type="bottom"
                        isLocked
                        text={`${ingredients[0].name} (низ)`}
                        price={ingredients[0].price}
                        thumbnail={ingredients[0].image_mobile}
                    />
                </div>
            }
        </div>
    );
};

ConstructorElements.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

export default ConstructorElements;
