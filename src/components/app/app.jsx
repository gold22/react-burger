import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import Order from '../../model/order';
import { ApiContext } from '../../services/api-context';
import { OrderContext } from '../../services/order-context';
import { orderIngredients } from '../../utils/data';
import { getIngredients } from '../../services/actions/ingredients-list';
import styles from './app.module.css';

const App = () => {
    const dispatch = useDispatch();
    const { ingredientsList } = useSelector(state => state);
    const [order, setOrder] = React.useState(new Order({
        ingredients: orderIngredients
    }));
    const apiClient = React.useContext(ApiContext);

    React.useEffect(
        () => {
            dispatch(getIngredients(apiClient));
        },
        [dispatch, apiClient]
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
                <OrderContext.Provider value={[order, setOrder]}>
                    <BurgerIngredients ingredients={ingredientsList.ingredients}/>
                    <BurgerConstructor />
                </OrderContext.Provider>
            </div>
        </main>
    );
};

export default App;
