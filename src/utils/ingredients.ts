import {
    IngredientType,
    TIngredient,
    TIngredientGroupItem,
    TIngredientGroupItems,
    TIngredients,
} from '../services/types';

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
): TIngredients => {
    const result: TIngredients = [];
    for (const ingredientId of ingredientIds) {
        const ingredient = getIngredient(ingredientId, ingredients);
        if (ingredient) {
            result.push(ingredient);
        }
    }
    return result;
};

export const groupIngredients = (
    ingredientIds: Array<string>,
    ingredients: TIngredients,
): TIngredientGroupItems => {
    const ingredientsMap = new Map<string, TIngredientGroupItem>();
    for (const ingredientId of ingredientIds) {
        const groupItem = ingredientsMap.get(ingredientId);
        if (groupItem) {
            groupItem.count += 1;
        } else {
            const ingredient = getIngredient(ingredientId, ingredients);
            if (ingredient) {
                ingredientsMap.set(ingredientId, { ingredient, count: 1 });
            }
        }
    }
    return Array.from(ingredientsMap.values());
};

export const getIngredientsPrice = (ingredients: TIngredients): number => (
    ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0)
);

export const getGroupedIngredientsPrice = (items: TIngredientGroupItems): number => (
    items.reduce((sum, item) => sum + item.count * item.ingredient.price, 0)
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
