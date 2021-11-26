class Order {
    /**
     * @param {?string=} name
     * @param {?number=} number
     * @param {?Object=} bun
     * @param {Array=} components
     */
    constructor({ name = null, number = null, bun = null, components = [] } = {}) {
        this.name = name;
        this.number = number;
        this.bun = bun;
        this.components = components;
    }

    /**
     * @param {string} ingredientId
     * @returns {number}
     */
    getIngredientCount(ingredientId) {
        return this.components.reduce(
            (count,  component) => ingredientId === component._id ? count + 1 : count,
            this.bun && ingredientId === this.bun._id ? 2 : 0
        );
    }

    /**
     * @returns {number}
     */
    getTotal () {
        return this.components.reduce(
            (sum,  component) => sum + component.price,
            this.bun ? 2 * this.bun.price : 0
        );
    }
}

export default Order;
