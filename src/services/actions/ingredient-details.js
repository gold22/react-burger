export const SHOW_INGREDIENT_DETAILS = 'SHOW_INGREDIENT_DETAILS';
export const HIDE_INGREDIENT_DETAILS = 'HIDE_INGREDIENT_DETAILS';

export const showIngredientDetails = (ingredient) => ({
    type: SHOW_INGREDIENT_DETAILS,
    ingredient,
});

export const hideIngredientDetails = () => ({
    type: HIDE_INGREDIENT_DETAILS,
});
