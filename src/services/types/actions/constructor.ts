import {
    SET_BUN,
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    REMOVE_INGREDIENTS,
    MOVE_INGREDIENT,
} from '../../constants/constructor';
import { TIngredient } from '../index';

export interface ISetBunAction {
    readonly type: typeof SET_BUN;
    readonly bun: TIngredient;
}

export interface IAddIngredientAction {
    readonly type: typeof ADD_INGREDIENT;
    readonly ingredient: TIngredient;
    readonly index: number;
}

export interface IRemoveIngredientAction {
    readonly type: typeof REMOVE_INGREDIENT;
    readonly index: number;
}

export interface IRemoveIngredientsAction {
    readonly type: typeof REMOVE_INGREDIENTS;
}

export interface IMoveIngredientAction {
    readonly type: typeof MOVE_INGREDIENT;
    readonly oldIndex: number;
    readonly newIndex: number;
}
export type TConstructorActions =
    | ISetBunAction
    | IAddIngredientAction
    | IRemoveIngredientAction
    | IRemoveIngredientsAction
    | IMoveIngredientAction;
