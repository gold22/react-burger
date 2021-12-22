import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import ConstructorPage from '../../pages/constructor-page/constructor-page';
import DialogPage from '../dialog-page/dialog-page';
import IngredientDetailsPage from '../../pages/ingredient-details-page/ingredient-details-page';
import LoginPage from '../../pages/login-page/login-page';
import LogoutPage from '../../pages/logout-page/logout-page';
import ForgotPasswordPage from '../../pages/forgot-password-page/forgot-password-page';
import ProfileOrdersPage from '../../pages/profile-orders-page/profile-orders-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import RegisterPage from '../../pages/register-page/register-page';
import ResetPasswordPage from '../../pages/reset-password-page/reset-password-page';
import ErrorMessage from '../error-message/error-message';
import ProtectedRoute from '../protected-route/protected-route';
import { getIngredients } from '../../services/actions/ingredients-list';
import { setBun } from '../../services/actions/constructor';
import { getBun } from '../../utils/ingredients';

const App = () => {
    const { ingredientsList } = useSelector((state) => state);
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
                <DialogPage>
                    <p className="text text_type_main-medium">
                        Загрузка...
                    </p>
                </DialogPage>
            </main>
        );
    }
    if (ingredientsList.loadError) {
        return (
            <main>
                <DialogPage>
                    <ErrorMessage message={ingredientsList.loadError} />
                </DialogPage>
            </main>
        );
    }

    return (
        <main>
            <Router>
                <AppHeader />
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/logout">
                        <LogoutPage />
                    </Route>
                    <Route path="/register">
                        <RegisterPage />
                    </Route>
                    <Route path="/forgot-password">
                        <ForgotPasswordPage />
                    </Route>
                    <Route path="/reset-password">
                        <ResetPasswordPage />
                    </Route>
                    <ProtectedRoute path="/profile/orders">
                        <ProfileOrdersPage />
                    </ProtectedRoute>
                    <ProtectedRoute path="/profile">
                        <ProfilePage />
                    </ProtectedRoute>
                    <Route path="/ingredients/:id">
                        <IngredientDetailsPage />
                    </Route>
                    <Route path="/">
                        <ConstructorPage />
                    </Route>
                </Switch>
            </Router>
        </main>
    );
};

export default App;
