export type TApiConfig = {
    url: string;
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

export type TApiOrder = {
    name: string;
    order: { number: string };
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
