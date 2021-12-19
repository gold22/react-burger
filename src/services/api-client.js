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
        const result = await this.fetch(`${this.url}/ingredients`);
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
        return this.fetch(`${this.url}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    }

    /**
     * @param {{name: string, email: string, password: string}} user
     * @returns {Promise<{email: string, name: string}>}
     */
    async registerUser(user) {
        /** @type {AuthResult} */
        const result = await this.fetch(`${this.url}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        localStorage.setItem('accessToken', result.accessToken);
        localStorage.setItem('refreshToken', result.refreshToken);
        return result.user;
    }

    /**
     * @param {{email: string, password: string}} user
     * @returns {Promise<{email: string, name: string}>}
     */
    async logInUser(user) {
        /** @type {AuthResult} */
        const result = await this.fetch(`${this.url}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        localStorage.setItem('accessToken', result.accessToken);
        localStorage.setItem('refreshToken', result.refreshToken);
        return result.user;
    }

    /**
     * @param {string} email
     * @returns {Promise<void>}
     */
    async sendResetUserPasswordEmail(email) {
        await this.fetch(`${this.url}/password-reset`, {
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
        await this.fetch(`${this.url}/password-reset/reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password, token }),
        });
    }

    /**
     * @returns {Promise<{email: string, name: string}>}
     */
    async getUser() {
        const result = await this.fetch(`${this.url}/auth/user`, {
            headers: {
                Authorization: localStorage.getItem('accessToken'),
            },
        });
        return result.user;
    }

    /**
     * @param {{name: string, email: string, password: string}} user
     * @returns {Promise<{email: string, name: string}>}
     */
    async updateUser(user) {
        const result = await this.fetch(`${this.url}/auth/user`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('accessToken'),
            },
            body: JSON.stringify(user),
        });
        return result.user;
    }

    /**
     * @returns {Promise<void>}
     */
    async updateToken() {
        const result = await this.fetch(`${this.url}/auth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('accessToken'),
            },
            body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
        });
        localStorage.setItem('accessToken', result.accessToken);
    }

    /**
     * @param {string} url
     * @param {Object} options
     * @returns {Promise<Object>}
     */
    async fetch(url, options = {}) {
        let response = await fetch(url, options);
        if (response.status === 403 && 'headers' in options && 'Authorization' in options.headers) {
            await this.updateToken();
            response = await fetch(url, {
                ...options,
                headers: {
                    ...options.headers,
                    Authorization: localStorage.getItem('accessToken'),
                },
            });
        }
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
