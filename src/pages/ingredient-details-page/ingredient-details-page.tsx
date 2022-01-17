import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import DialogPage from '../../components/dialog-page/dialog-page';
import ErrorMessage from '../../components/error-message/error-message';
import { getIngredient } from '../../utils/ingredients';
import { hideIngredientDetails, showIngredientDetails } from '../../services/actions/ingredient-details';

type TIngredientDetailsPageParams = {
    id: string;
};

const IngredientDetailsPage = () => {
    const { id } = useParams<TIngredientDetailsPageParams>();
    const { ingredients } = useSelector((state: any) => state.ingredientsList);
    const dispatch = useDispatch();

    const ingredient = React.useMemo(
        () => getIngredient(id, ingredients),
        [id, ingredients],
    );

    React.useEffect(() => {
        dispatch(showIngredientDetails(ingredient));
        return () => { dispatch(hideIngredientDetails()); };
    }, [ingredient, dispatch]);

    if (!ingredient) {
        return (
            <DialogPage>
                <ErrorMessage message={`Ingredient #${id} is not found`} />
            </DialogPage>
        );
    }

    return (
        <DialogPage>
            <p className="text text_type_main-large">Детали ингредиента</p>
            <IngredientDetails ingredient={ingredient} />
        </DialogPage>
    );
};

export default IngredientDetailsPage;
