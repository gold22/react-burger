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
    const [ingredients, setIngredients] = React.useState([]);
    const [ingredientsLoadState, setIngredientsLoadState] = React.useState({
        isLoading: true,
        error: null,
    });
    const [order, setOrder] = React.useState(new Order({
        ingredients: orderIngredients
    }));
    const apiClient = React.useContext(ApiContext);

    React.useEffect(() => {(async () => {
        try {
            const ingredients = await apiClient.getIngredients();
            setIngredients(ingredients);
            setIngredientsLoadState({isLoading: false, error: null});
        } catch (error) {
            setIngredientsLoadState({isLoading: false, error: error.message});
        }
    })();}, [apiClient]);

    if (ingredientsLoadState.isLoading) {
        return (
            <main />
        );
    }
    if (ingredientsLoadState.error) {
        return (
            <main>
                <div className={`${styles.error} mt-20`}>
                    <p className="text text_type_main-medium text_color_error">
                        {`Ошибка загрузки: ${ingredientsLoadState.error}`}
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
                    <BurgerIngredients ingredients={ingredients}/>
                    <BurgerConstructor />
                </OrderContext.Provider>
            </div>
        </main>
    );
};

export default App;
