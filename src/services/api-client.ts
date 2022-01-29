import {
    TApiConfig,
    TApiIngredients,
    TApiOrder,
    TApiUser,
    TApiUserInfo,
    TApiUserCredentials,
    TApiUserResetPasswordInfo,
} from './types/api';

class ApiClient {
    private readonly url: string;

    constructor({ url }: TApiConfig) {
        this.url = url;
    }

    async getIngredients(): Promise<TApiIngredients> {
        const result = await this.fetch(`${this.url}/ingredients`);
        return result.data;
    }

    async createOrder(ingredientsIds: Array<string>): Promise<TApiOrder> {
        const body = {
            ingredients: ingredientsIds,
        };
        return this.fetch(`${this.url}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: ApiClient.getAccessToken(),
            },
            body: JSON.stringify(body),
        });
    }

    async registerUser(user: TApiUser): Promise<TApiUserInfo> {
        const result = await this.fetch(`${this.url}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        ApiClient.setAccessToken(result.accessToken);
        ApiClient.setRefreshToken(result.refreshToken);
        return result.user;
    }

    async logInUser(user: TApiUserCredentials): Promise<TApiUserInfo> {
        const result = await this.fetch(`${this.url}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        ApiClient.setAccessToken(result.accessToken);
        ApiClient.setRefreshToken(result.refreshToken);
        return result.user;
    }

    async logOutUser(): Promise<void> {
        await this.fetch(`${this.url}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: ApiClient.getAccessToken(),
            },
            body: JSON.stringify({ token: ApiClient.getRefreshToken() }),
        });
        ApiClient.setAccessToken(null);
        ApiClient.setRefreshToken(null);
    }

    async sendResetUserPasswordEmail(email: string): Promise<void> {
        await this.fetch(`${this.url}/password-reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
    }

    async resetUserPassword({ password, token }: TApiUserResetPasswordInfo): Promise<void> {
        await this.fetch(`${this.url}/password-reset/reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password, token }),
        });
    }

    async getUser(): Promise<TApiUserInfo> {
        const result = await this.fetch(`${this.url}/auth/user`, {
            headers: {
                Authorization: ApiClient.getAccessToken(),
            },
        });
        return result.user;
    }

    async updateUser(user: TApiUser): Promise<TApiUserInfo> {
        const result = await this.fetch(`${this.url}/auth/user`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: ApiClient.getAccessToken(),
            },
            body: JSON.stringify(user),
        });
        return result.user;
    }

    async updateToken(): Promise<void> {
        const result = await this.fetch(`${this.url}/auth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: ApiClient.getAccessToken(),
            },
            body: JSON.stringify({ token: ApiClient.getRefreshToken() }),
        });
        ApiClient.setAccessToken(result.accessToken);
        ApiClient.setRefreshToken(result.refreshToken);
    }

    async fetch(url: string, options: RequestInit = {}): Promise<any> {
        let response = await fetch(url, options);
        if (response.status === 403 && options.headers && 'Authorization' in options.headers) {
            await this.updateToken();
            response = await fetch(url, {
                ...options,
                headers: {
                    ...options.headers,
                    Authorization: ApiClient.getAccessToken(),
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

    static getAccessToken(): string {
        return localStorage.getItem('accessToken') ?? '';
    }

    static setAccessToken(accessToken: string | null): void {
        if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
        } else {
            localStorage.removeItem('accessToken');
        }
    }

    static getRefreshToken(): string {
        return localStorage.getItem('refreshToken') ?? '';
    }

    static setRefreshToken(refreshToken: string | null): void {
        if (refreshToken) {
            localStorage.setItem('refreshToken', refreshToken);
        } else {
            localStorage.removeItem('refreshToken');
        }
    }

    static isAuthenticated(): boolean {
        return !!ApiClient.getRefreshToken();
    }
}

export default ApiClient;
