import React from 'react';
import { ingredientType } from '../../utils/types';
import styles from './ingredient-details.module.css';

const IngredientDetails = ({ ingredient }) => {
    const { calories, carbohydrates, fat, imageLarge, name, proteins } = ingredient;
    return (
        <>
            <img src={imageLarge} alt={name} />
            <p className="text text_type_main-medium mt-4 mb-8">{name}</p>
            <div className={styles.details}>
                <div className={styles.detail}>
                    <p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{calories}</p>
                </div>
                <div className={styles.detail}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{proteins}</p>
                </div>
                <div className={styles.detail}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{fat}</p>
                </div>
                <div className={styles.detail}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{carbohydrates}</p>
                </div>
            </div>
        </>
    );
};

IngredientDetails.propTypes = {
    ingredient: ingredientType.isRequired,
};

export default IngredientDetails;
