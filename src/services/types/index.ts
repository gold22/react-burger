import { Location } from 'history';
import { TApiOrderStatus } from './api';

export type TIngredient = {
    uuid?: string;
    id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    imageLarge: string;
    imageMobile: string;
};

export type TIngredients = Array<TIngredient>;

export type TIngredientGroupItem = {
    ingredient: TIngredient;
    count: number;
};

export type TIngredientGroupItems = Array<TIngredientGroupItem>;

export type TIngredientDragItem = {
    ingredient?: TIngredient;
    index?: number;
};

export type TLocationState = {
    background?: Location;
    from?: Location;
};

export enum IngredientType {
    Bun = 'bun',
    Sauce = 'sauce',
    Main = 'main',
}

export type TOrder = {
    id: string;
    number: number;
    name: string;
    status: TApiOrderStatus;
    createdAt: Date;
    updatedAt: Date;
    ingredients: Array<string>;
};

export type TOrders = Array<TOrder>;
