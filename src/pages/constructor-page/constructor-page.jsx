import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import IngredientDetailsDialog from '../../components/ingredient-details-dialog/ingredient-details-dialog';
import { hideIngredientDetails } from '../../services/actions/ingredient-details';
import styles from './constructor-page.module.css';

const ConstructorPage = () => {
    const { ingredientDetails } = useSelector((state) => state);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleHideIngredientDetails = () => {
        dispatch(hideIngredientDetails());
        history.replace({
            pathname: '/',
            search: '',
        });
    };

    return (
        <div className={styles.main}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
            </DndProvider>
            {ingredientDetails.ingredient && (
                <IngredientDetailsDialog
                    ingredient={ingredientDetails.ingredient}
                    visible
                    onClose={handleHideIngredientDetails}
                />
            )}
        </div>
    );
};

export default ConstructorPage;
