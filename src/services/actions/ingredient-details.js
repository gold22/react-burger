import {
    SHOW_INGREDIENT_DETAILS,
    HIDE_INGREDIENT_DETAILS,
} from '../constants/ingredient-details';

export const showIngredientDetails = (ingredient) => ({
    type: SHOW_INGREDIENT_DETAILS,
    ingredient,
});

export const hideIngredientDetails = () => ({
    type: HIDE_INGREDIENT_DETAILS,
});
