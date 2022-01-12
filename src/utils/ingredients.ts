import { TIngredient, TIngredients } from './ts-types';

export const INGREDIENT_TYPE_BUN = 'bun';
export const INGREDIENT_TYPE_SAUCE = 'sauce';
export const INGREDIENT_TYPE_MAIN = 'main';

export const getIngredient = (ingredientId: string, ingredients: TIngredients) => (
    ingredients.find((ingredient) => ingredientId === ingredient.id)
);

export const getIngredientCount = (ingredientId: string, ingredients: TIngredients) => (
    ingredients.reduce(
        (count, ingredient) => (ingredientId === ingredient.id ? count + 1 : count),
        0,
    )
);

export const getIngredientsPrice = (ingredients: TIngredients) => (
    ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0)
);

export const getIngredientsIds = (ingredients: TIngredients) => (
    ingredients.map((ingredient) => ingredient.id)
);

export const isBun = (ingredient: TIngredient) => (
    ingredient.type === INGREDIENT_TYPE_BUN
);

export const isSauce = (ingredient: TIngredient) => (
    ingredient.type === INGREDIENT_TYPE_SAUCE
);

export const isMain = (ingredient: TIngredient) => (
    ingredient.type === INGREDIENT_TYPE_MAIN
);

export const getBun = (ingredients: TIngredients) => (
    ingredients.find((ingredient) => isBun(ingredient))
);
