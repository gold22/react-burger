import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { constructorReducer } from './constructor';
import { ingredientDetailsReducer } from './ingredient-details';
import { ingredientsListReducer } from './ingredients-list';
import { orderReducer } from './order';
import { ordersListReducer } from './orders-list';
import { resetPasswordReducer } from './reset-password';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
    auth: authReducer,
    burgerConstructor: constructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    ingredientsList: ingredientsListReducer,
    order: orderReducer,
    ordersList: ordersListReducer,
    resetPassword: resetPasswordReducer,
});
