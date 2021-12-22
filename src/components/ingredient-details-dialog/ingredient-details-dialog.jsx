import PropTypes from 'prop-types';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import ErrorMessage from '../error-message/error-message';
import { getIngredient } from '../../utils/ingredients';
import { hideIngredientDetails, showIngredientDetails } from '../../services/actions/ingredient-details';

const IngredientDetailsDialog = ({ visible, onClose }) => {
    const { id } = useParams();
    const { ingredients } = useSelector((state) => state.ingredientsList);
    const dispatch = useDispatch();

    const ingredient = React.useMemo(
        () => getIngredient(id, ingredients),
        [id, ingredients],
    );

    React.useEffect(() => {
        dispatch(showIngredientDetails(ingredient));
        return () => { dispatch(hideIngredientDetails()); };
    }, [ingredient, dispatch]);

    return (
        <Modal title="Детали ингредиента" visible={visible} onClose={onClose}>
            {ingredient ? (
                <IngredientDetails ingredient={ingredient} />
            ) : (
                <ErrorMessage message={`Ingredient #${id} is not found`} />
            )}
        </Modal>
    );
};

IngredientDetailsDialog.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default IngredientDetailsDialog;
