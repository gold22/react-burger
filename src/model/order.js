class Order {
    /**
     * @param {Object=} properties
     * @param {?string=} properties.name
     * @param {?number=} properties.number
     * @param {Array=} properties.ingredients
     */
    constructor({ name = null, number = null, ingredients = [] } = {}) {
        this.name = name;
        this.number = number;
        this.ingredients = ingredients;
    }

    /**
     * @returns {?Object}
     */
    getBun() {
        for (const ingredient of this.ingredients) {
            if ('bun' === ingredient.type) {
                return ingredient;
            }
        }
        return null;
    }

    /**
     * @param {string} ingredientId
     * @returns {number}
     */
    getIngredientCount(ingredientId) {
        return this.ingredients.reduce((count,  ingredient) => ingredientId === ingredient._id ? count + 1 : count, 0);
    }

    /**
     * @returns {string[]}
     */
    getIngredientsIds() {
        return this.ingredients.map((ingredient) => ingredient._id);
    }

    /**
     * @returns {number}
     */
    getPrice () {
        return this.ingredients.reduce((sum,  ingredient) => sum + ingredient.price, 0);
    }
}

export default Order;
