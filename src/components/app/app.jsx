import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import ConstructorPage from '../../pages/constructor-page/constructor-page';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { getIngredients } from '../../services/actions/ingredients-list';
import { hideIngredientDetails } from '../../services/actions/ingredient-details';
import { setBun } from '../../services/actions/constructor';
import { getBun } from '../../utils/ingredients';
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
            const bun = getBun(ingredientsList.ingredients);
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
            <Router>
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/register">
                        <RegisterPage />
                    </Route>
                    <Route path="/">
                        <ConstructorPage />
                    </Route>
                </Switch>
            </Router>
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
