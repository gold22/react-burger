export const getPrice = (bun, ingredients) => (
    ingredients.reduce((sum, ingredient) => sum + ingredient.price, bun ? 2 * bun.price : 0)
);

export const getIngredientCount = (ingredientId, bun, ingredients) => {
    if (bun && ingredientId === bun.id) {
        return 2;
    }
    return ingredients.reduce(
        (count, ingredient) => (ingredientId === ingredient.id ? count + 1 : count),
        0,
    );
};
