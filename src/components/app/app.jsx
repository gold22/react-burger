import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import Order from '../../model/order';
import { ApiContext } from '../../services/api-context';
import { OrderContext } from '../../services/order-context';
import { orderIngredients } from '../../utils/data';
import styles from './app.module.css';

const App = () => {
    const [ingredientsLoad, setIngredientsLoad] = React.useState({
        data: [],
        loading: true,
        error: undefined,
    });
    const [order, setOrder] = React.useState(new Order({
        bun: orderIngredients[0],
        components: orderIngredients.slice(1)
    }));
    const apiClient = React.useContext(ApiContext);

    React.useEffect(() => {(async () => {
        try {
            const ingredients = await apiClient.getIngredients();
            setIngredientsLoad({data: ingredients, loading: false, error: undefined});
        } catch (error) {
            setIngredientsLoad({data: [], loading: false, error: error.message});
        }
    })();}, [apiClient]);

    if (ingredientsLoad.loading) {
        return null;
    }
    if (ingredientsLoad.error) {
        return (
            <div className={`${styles.error} mt-20`}>
                <p className="text text_type_main-medium text_color_error">
                    {`Ошибка загрузки: ${ingredientsLoad.error}`}
                </p>
            </div>
        );
    }

    return (
        <main>
            <AppHeader />
            <div className={styles.panels}>
                <OrderContext.Provider value={[order, setOrder]}>
                    <BurgerIngredients ingredients={ingredientsLoad.data}/>
                    <BurgerConstructor />
                </OrderContext.Provider>
            </div>
        </main>
    );
};

export default App;
