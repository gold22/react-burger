import { IngredientType, TIngredient, TIngredients } from '../services/types';

export const getIngredient = (
    ingredientId: string,
    ingredients: TIngredients,
): TIngredient | undefined => (
    ingredients.find((ingredient) => ingredientId === ingredient.id)
);

export const getIngredientCount = (ingredientId: string, ingredients: TIngredients): number => (
    ingredients.reduce(
        (count, ingredient) => (ingredientId === ingredient.id ? count + 1 : count),
        0,
    )
);

export const getIngredients = (
    ingredientIds: Array<string>,
    ingredients: TIngredients,
): TIngredients => (
    ingredients.filter((ingredient) => ingredientIds.includes(ingredient.id))
);

export const getIngredientsPrice = (ingredients: TIngredients): number => (
    ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0)
);

export const getIngredientsIds = (ingredients: TIngredients): Array<string> => (
    ingredients.map((ingredient) => ingredient.id)
);

export const isBun = (ingredient: TIngredient): boolean => (
    ingredient.type === IngredientType.Bun
);

export const isSauce = (ingredient: TIngredient): boolean => (
    ingredient.type === IngredientType.Sauce
);

export const isMain = (ingredient: TIngredient): boolean => (
    ingredient.type === IngredientType.Main
);

export const getBun = (ingredients: TIngredients): TIngredient | undefined => (
    ingredients.find((ingredient) => isBun(ingredient))
);
