import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { ingredientType } from '../../utils/types';

const IngredientDetailsDialog = ({ ingredient, visible, onClose }) => (
    <Modal title="Детали ингредиента" visible={visible} onClose={onClose}>
        <IngredientDetails ingredient={ingredient} />
    </Modal>
);

IngredientDetailsDialog.propTypes = {
    ingredient: ingredientType.isRequired,
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default IngredientDetailsDialog;
