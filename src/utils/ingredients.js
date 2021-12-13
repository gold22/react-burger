export const INGREDIENT_TYPE_BUN = 'bun';
export const INGREDIENT_TYPE_SAUCE = 'sauce';
export const INGREDIENT_TYPE_MAIN = 'main';

export const getIngredientCount = (ingredientId, ingredients) => (
    ingredients.reduce(
        (count, ingredient) => (ingredientId === ingredient.id ? count + 1 : count),
        0,
    )
);

export const getIngredientsPrice = (ingredients) => (
    ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0)
);

export const getIngredientsIds = (ingredients) => (
    ingredients.map((ingredient) => ingredient.id)
);

export const isBun = (ingredient) => (
    ingredient.type === INGREDIENT_TYPE_BUN
);

export const isSauce = (ingredient) => (
    ingredient.type === INGREDIENT_TYPE_SAUCE
);

export const isMain = (ingredient) => (
    ingredient.type === INGREDIENT_TYPE_MAIN
);

export const getBun = (ingredients) => (
    ingredients.find((ingredient) => isBun(ingredient))
);
