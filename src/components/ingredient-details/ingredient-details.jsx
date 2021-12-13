import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../modal/modal';
import { ingredientType } from '../../utils/types';
import styles from './ingredient-details.module.css';

const IngredientDetails = ({ ingredient, visible, onClose }) => {
    const { calories, carbohydrates, fat, imageLarge, name, proteins } = ingredient;
    return (
        <Modal title="Детали ингредиента" visible={visible} onClose={onClose}>
            <img src={imageLarge} alt={name} />
            <p className="text text_type_main-medium mt-4 mb-8">{name}</p>
            <div className={styles.details}>
                <div className={styles.detail}>
                    <p className="text text_type_main-default">Калории, ккал</p>
                    <p className="text text_type_digits-default">{calories}</p>
                </div>
                <div className={styles.detail}>
                    <p className="text text_type_main-default">Белки, г</p>
                    <p className="text text_type_digits-default">{proteins}</p>
                </div>
                <div className={styles.detail}>
                    <p className="text text_type_main-default">Жиры, г</p>
                    <p className="text text_type_digits-default">{fat}</p>
                </div>
                <div className={styles.detail}>
                    <p className="text text_type_main-default">Углеводы, г</p>
                    <p className="text text_type_digits-default">{carbohydrates}</p>
                </div>
            </div>
        </Modal>
    );
};

IngredientDetails.propTypes = {
    ingredient: ingredientType.isRequired,
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default IngredientDetails;
