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

    getTotal () {
        return this.components.reduce(
            (sum,  component) => sum + component.price,
            this.bun ? 2 * this.bun.price : 0
        );
    }
}

export default Order;
