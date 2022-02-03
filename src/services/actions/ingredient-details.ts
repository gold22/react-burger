import {
    SHOW_INGREDIENT_DETAILS,
    HIDE_INGREDIENT_DETAILS,
} from '../constants/ingredient-details';
import { TIngredient } from '../types';
import {
    IHideIngredientDetailsAction,
    IShowIngredientDetailsAction,
} from '../types/actions/ingredient-details';

export const showIngredientDetails = (ingredient: TIngredient): IShowIngredientDetailsAction => ({
    type: SHOW_INGREDIENT_DETAILS,
    ingredient,
});

export const hideIngredientDetails = (): IHideIngredientDetailsAction => ({
    type: HIDE_INGREDIENT_DETAILS,
});
