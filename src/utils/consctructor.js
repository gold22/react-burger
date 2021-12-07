// eslint-disable-next-line import/prefer-default-export
export const getPrice = (bun, ingredients) => (
    ingredients.reduce((sum, ingredient) => sum + ingredient.price, bun ? 2 * bun.price : 0)
);
