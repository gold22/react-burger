export type TApiConfig = {
    url: string;
    wsUrl: string;
};

export type TApiIngredient = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_large: string;
    image_mobile: string;
};

export type TApiIngredients = Array<TApiIngredient>;

export type TApiOrderInfo = {
    name: string;
    order: { number: string };
};

export enum TApiOrderStatus {
    Pending = 'pending',
    Created = 'created',
    Done = 'done',
}

export type TApiOrder = {
    number: number;
    name: string;
    status: TApiOrderStatus;
    createdAt: string;
    updatedAt: string;
    ingredients: Array<string>;
};

export type TApiOrders = {
    orders: Array<TApiOrder>;
    total: number;
    totalToday: number;
};

export type TApiUser = {
    name: string;
    email: string;
    password: string;
};

export type TApiUserInfo = {
    name: string;
    email: string;
};

export type TApiUserCredentials = {
    email: string;
    password: string;
};

export type TApiUserResetPasswordInfo = {
    password: string;
    token: string;
};
