// noinspection ES6UnusedImports
// eslint-disable-next-line no-unused-vars
import Order from '../model/order';

class ApiClient {
    /**
     * @param {Object} config
     * @param {string} config.url
     */
    constructor({ url }) {
        this.url = url;
    }

    /**
     * @returns {Promise<Array>}
     */
    async getIngredients() {
        const result = await ApiClient.fetch(`${this.url}/ingredients`);
        return result.data;
    }

    /**
     * @param {Order} order
     * @returns {Promise<Object>}
     */
    async createOrder(order) {
        const body = {
            ingredients: order.getIngredientsIds(),
        };
        return ApiClient.fetch(`${this.url}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    }

    /**
     * @param {string} url
     * @param {Object} options
     * @returns {Promise<?Object>}
     */
    static async fetch(url, options = {}) {
        const response = await fetch(url, options);
        const resultText = await response.text();
        let result = null;
        try {
            result = JSON.parse(resultText);
        } catch (error) {
        }
        if (result && result.success === true) {
            return result;
        }
        if (result && result.success === false && result.message) {
            throw new Error(result.message);
        }
        if (result && result.success === false) {
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
