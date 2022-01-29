import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR,
} from '../../constants/ingredients-list';
import { TIngredients } from '../index';

export interface IGetIngredientsAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly ingredients: TIngredients;
}

export interface IGetIngredientsFailedAction {
    readonly type: typeof GET_INGREDIENTS_ERROR;
    readonly message: string;
}

export type TIngredientsListActions =
    | IGetIngredientsAction
    | IGetIngredientsSuccessAction
    | IGetIngredientsFailedAction;
