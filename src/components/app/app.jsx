import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import Order from '../../model/order';
import { ApiContext } from '../../services/api-context';
import { OrderContext } from '../../services/order-context';
import { getIngredients } from '../../services/actions/ingredients-list';
import { setBun } from '../../services/actions/constructor';
import styles from './app.module.css';

const App = () => {
    const dispatch = useDispatch();
    const { ingredientsList } = useSelector((state) => state);
    const [order, setOrder] = React.useState(new Order());
    const apiClient = React.useContext(ApiContext);

    React.useEffect(
        () => { dispatch(getIngredients(apiClient)); },
        [dispatch, apiClient],
    );
    React.useEffect(
        () => {
            if (ingredientsList.isLoading || ingredientsList.loadError) {
                return;
            }
            for (const ingredient of ingredientsList.ingredients) {
                if (ingredient.type === 'bun') {
                    dispatch(setBun(ingredient));
                    return;
                }
            }
        },
        [dispatch, ingredientsList],
    );

    if (ingredientsList.isLoading) {
        return (
            <main />
        );
    }
    if (ingredientsList.loadError) {
        return (
            <main>
                <div className={`${styles.error} mt-20`}>
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
                    <OrderContext.Provider value={[order, setOrder]}>
                        <BurgerIngredients ingredients={ingredientsList.ingredients} />
                        <BurgerConstructor />
                    </OrderContext.Provider>
                </DndProvider>
            </div>
        </main>
    );
};

export default App;
