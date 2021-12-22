import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import DialogPage from '../../components/dialog-page/dialog-page';
import ErrorMessage from '../../components/error-message/error-message';
import { showIngredientDetails } from '../../services/actions/ingredient-details';
import { getIngredient } from '../../utils/ingredients';
import { deserializeQuery } from '../../utils/url';
import ConstructorPage from '../constructor-page/constructor-page';

const IngredientDetailsPage = () => {
    const { id } = useParams();
    const { ingredients } = useSelector((state) => state.ingredientsList);
    const { search } = useLocation();
    const dispatch = useDispatch();

    const { view } = React.useMemo(
        () => deserializeQuery(search),
        [search],
    );
    const ingredient = React.useMemo(
        () => getIngredient(id, ingredients),
        [id, ingredients],
    );

    React.useEffect(() => {
        if (ingredient && view === 'modal') {
            dispatch(showIngredientDetails(ingredient));
        }
    }, [ingredient, view, dispatch]);

    if (!ingredient) {
        return (
            <DialogPage>
                <ErrorMessage message={`Ingredient #${id} is not found`} />
            </DialogPage>
        );
    }

    if (view === 'modal') {
        return <ConstructorPage />;
    }

    return (
        <DialogPage>
            <p className="text text_type_main-large">Детали ингредиента</p>
            <IngredientDetails ingredient={ingredient} />
        </DialogPage>
    );
};

export default IngredientDetailsPage;
