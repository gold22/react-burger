import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { getIngredients } from '../../services/actions/ingredients-list';
import { hideIngredientDetails } from '../../services/actions/ingredient-details';
import { setBun } from '../../services/actions/constructor';
import styles from './app.module.css';

const App = () => {
    const { ingredientDetails, ingredientsList } = useSelector((state) => state);
    const dispatch = useDispatch();

    React.useEffect(
        () => { dispatch(getIngredients()); },
        [dispatch],
    );
    React.useEffect(
        () => {
            if (ingredientsList.isLoading || ingredientsList.loadError) {
                return;
            }
            const bun = ingredientsList.ingredients.find((ingredient) => ingredient.type === 'bun');
            if (bun) {
                dispatch(setBun(bun));
            }
        },
        [dispatch, ingredientsList],
    );

    if (ingredientsList.isLoading) {
        return (
            <main>
                <div className={`${styles.message} mt-20`}>
                    <p className="text text_type_main-medium">
                        Загрузка...
                    </p>
                </div>
            </main>
        );
    }
    if (ingredientsList.loadError) {
        return (
            <main>
                <div className={`${styles.message} mt-20`}>
                    <p className="text text_type_main-medium text_color_error">
                        {`Ошибка загрузки: ${ingredientsList.loadError}`}
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main>
            <AppHeader />
            <div className={styles.panels}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients ingredients={ingredientsList.ingredients} />
                    <BurgerConstructor />
                </DndProvider>
            </div>
            {ingredientDetails.ingredient && (
                <IngredientDetails
                    ingredient={ingredientDetails.ingredient}
                    visible
                    onClose={() => { dispatch(hideIngredientDetails()); }}
                />
            )}
        </main>
    );
};

export default App;
