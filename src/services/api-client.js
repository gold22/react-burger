// noinspection ES6UnusedImports
// eslint-disable-next-line no-unused-vars
import Order from '../model/order';

class ApiClient {
    /**
     * @param {Object} config
     * @param {string} config.url
     */
    constructor({url}) {
        this.url = url;
    }

    /**
     * @returns {Promise<Array>}
     */
    async getIngredients() {
        const result = await this.fetch(`${this.url}/ingredients`);
        return result.data;
    }

    /**
     * @param {Order} order
     * @returns {Promise<Object>}
     */
    async createOrder(order) {
        const request = {
            ingredients: order.getIngredientsIds(),
        };
        return await this.fetch(`${this.url}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });
    }

    /**
     * @param {string} url
     * @param {Object} options
     * @returns {Promise<?Object>}
     */
    async fetch(url, options = {}) {
        const response = await fetch(url, options);
        const resultText = await response.text();
        let result = null;
        try {
            result = JSON.parse(resultText);
        } catch (error) {
        }
        if (result && true === result.success) {
            return result;
        }
        if (result && false === result.success && result.message) {
            throw new Error(result.message);
        }
        if (result && false === result.success) {
            throw new Error(resultText);
        }
        if (result && response.ok) {
            return result;
        }
        if (response.ok) {
            return null;
        }
        if (resultText) {
            throw new Error(resultText);
        }
        if (response.statusText) {
            throw new Error(response.statusText);
        }
        throw new Error(`Ошибка HTTP ${response.status}`);
    }
}

export default ApiClient;
