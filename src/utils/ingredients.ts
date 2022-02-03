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

export const groupIngredients = (
    ingredientIds: Array<string>,
    ingredients: TIngredients,
): TIngredientGroupItems => {
    const ingredientsMap = new Map<string, TIngredientGroupItem>();
    for (const ingredient of ingredients) {
        if (ingredientIds.includes(ingredient.id)) {
            const groupItem = ingredientsMap.get(ingredient.id);
            if (groupItem) {
                groupItem.count += 1;
            } else {
                ingredientsMap.set(ingredient.id, { ingredient, count: 1 });
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
