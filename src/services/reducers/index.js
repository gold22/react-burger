import { combineReducers } from 'redux';
import { ingredientsListReducer } from './ingredients-list';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
    ingredientsList: ingredientsListReducer,
});
