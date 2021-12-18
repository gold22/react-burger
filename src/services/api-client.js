/**
 * @typedef {Object} AuthResult
 * @property {{name: string, email: string}} user
 * @property {string} accessToken
 * @property {string} refreshToken
 */

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
     * @param {{name: string, email: string, password: string}} user
     * @returns {Promise<AuthResult>}
     */
    async registerUser(user) {
        return ApiClient.fetch(`${this.url}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    }

    /**
     * @param {{email: string, password: string}} user
     * @returns {Promise<AuthResult>}
     */
    async logInUser(user) {
        return ApiClient.fetch(`${this.url}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    }

    /**
     * @param {string} email
     * @returns {Promise<void>}
     */
    async sendResetUserPasswordEmail(email) {
        await ApiClient.fetch(`${this.url}/password-reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
    }

    /**
     * @param {string} password
     * @param {string} token
     * @returns {Promise<void>}
     */
    async resetUserPassword({ password, token }) {
        await ApiClient.fetch(`${this.url}/password-reset/reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password, token }),
        });
    }

    /**
     * @param {string} url
     * @param {Object} options
     * @returns {Promise<Object>}
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
