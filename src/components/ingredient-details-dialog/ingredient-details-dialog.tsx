import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import ErrorMessage from '../error-message/error-message';
import { getIngredient } from '../../utils/ingredients';
import { hideIngredientDetails, showIngredientDetails } from '../../services/actions/ingredient-details';

type TIngredientDetailsDialogProps = {
    visible: boolean;
    onClose: () => void;
};

type TIngredientDetailsDialogParams = {
    id: string;
};

const IngredientDetailsDialog: React.FC<TIngredientDetailsDialogProps> = ({ visible, onClose }) => {
    const { id } = useParams<TIngredientDetailsDialogParams>();
    const { ingredients } = useSelector((state: any) => state.ingredientsList);
    const dispatch = useDispatch();

    const ingredient = React.useMemo(
        () => getIngredient(id, ingredients),
        [id, ingredients],
    );

    React.useEffect(() => {
        if (ingredient) {
            dispatch(showIngredientDetails(ingredient));
        }
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

export default IngredientDetailsDialog;
