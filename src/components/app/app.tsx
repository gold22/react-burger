import React from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/hooks';
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
import OrdersPage from '../../pages/orders-page/orders-page';
import OrderInfoPage from '../../pages/order-info-page/order-info-page';
import OrderInfoDialog from '../order-info-dialog/order-info-dialog';
import IngredientDetailsDialog from '../ingredient-details-dialog/ingredient-details-dialog';
import ErrorMessage from '../error-message/error-message';
import ProtectedRoute from '../protected-route/protected-route';
import { TLocationState } from '../../services/types';
import { getIngredients } from '../../services/actions/ingredients-list';

const App = () => {
    const { ingredientsList } = useSelector((state) => state);
    const location = useLocation<TLocationState>();
    const history = useHistory();
    const dispatch = useDispatch();

    React.useEffect(
        () => { dispatch(getIngredients()); },
        [dispatch],
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

    const background = location.state?.background;

    return (
        <main>
            <AppHeader />
            <Switch location={background || location}>
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
                <Route path="/feed/:id">
                    <OrderInfoPage />
                </Route>
                <Route path="/feed">
                    <OrdersPage />
                </Route>
                <ProtectedRoute path="/profile/orders/:id">
                    <OrderInfoPage />
                </ProtectedRoute>
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
            {background && (
                <Switch location={location}>
                    <Route path="/feed/:id">
                        <OrderInfoDialog onClose={() => history.goBack()} />
                    </Route>
                    <ProtectedRoute path="/profile/orders/:id">
                        <OrderInfoDialog onClose={() => history.goBack()} />
                    </ProtectedRoute>
                    <Route path="/ingredients/:id">
                        <IngredientDetailsDialog
                            visible
                            onClose={() => history.goBack()}
                        />
                    </Route>
                </Switch>
            )}
        </main>
    );
};

export default App;
