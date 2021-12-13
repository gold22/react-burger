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
     * @param {string[]} ingredientsIds
     * @returns {Promise<Object>}
     */
    async createOrder(ingredientsIds) {
        const body = {
            ingredients: ingredientsIds,
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
        if (result && result.success) {
            return result;
        }
        if (result && result.message) {
            throw new Error(result.message);
        }
        throw new Error(
            'Произошла неожиданная ошибка при обработке запроса'
            + `: Код состояния HTTP - ${response.status}`
            + `: HTTP ответ - ${resultText}`,
        );
    }
}

export default ApiClient;
