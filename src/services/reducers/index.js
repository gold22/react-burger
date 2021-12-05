import { combineReducers } from 'redux';
import { ingredientsListReducer } from './ingredients-list';

export const rootReducer = combineReducers({
    ingredientsList: ingredientsListReducer,
});