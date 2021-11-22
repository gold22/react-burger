import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { orderIngredients } from '../../utils/data';
import styles from './app.module.css';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
    const [ingredients, setIngredients] = React.useState({
        data: [],
        loading: true,
        loadError: undefined,
    })

    React.useEffect(() => {(async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                const loadError = response.statusText || response.status.toString();
                setIngredients({data: [], loading: false, loadError});
                return;
            }
            const result = await response.json();
            if (!result.success) {
                setIngredients({data: [], loading: false, loadError: 'Ошибка сервиса'});
                return;
            }
            setIngredients({data: result.data, loading: false, loadError: null});
        } catch (error) {
            setIngredients({data: [], loading: false, loadError: error.message});
        }
    })();}, []);

    if (ingredients.loading) {
        return null;
    }
    if (ingredients.loadError) {
        return (
            <div className={`${styles.error} mt-20`}>
                <p className="text text_type_main-medium text_color_error">
                    {`Ошибка загрузки: ${ingredients.loadError}`}
                </p>
            </div>
        );
    }
    return (
        <main>
            <AppHeader />
            <div className={styles.panels}>
                <BurgerIngredients ingredients={ingredients.data}/>
                <BurgerConstructor ingredients={orderIngredients}/>
            </div>
        </main>
    );
};

export default App;
