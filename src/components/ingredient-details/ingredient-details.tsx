import React from 'react';
import { TIngredient } from '../../services/types';
import styles from './ingredient-details.module.css';

type TIngredientDetailsProps = {
    ingredient: TIngredient;
};

const IngredientDetails: React.FC<TIngredientDetailsProps> = ({ ingredient }) => {
    const { calories, carbohydrates, fat, imageLarge, name, proteins } = ingredient;
    return (
        <>
            <img src={imageLarge} alt={name} />
            <p className="text text_type_main-medium mt-4 mb-8" data-type="ingredient-name">{name}</p>
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

export default IngredientDetails;
