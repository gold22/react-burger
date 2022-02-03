import {
    SHOW_INGREDIENT_DETAILS,
    HIDE_INGREDIENT_DETAILS,
} from '../../constants/ingredient-details';
import { TIngredient } from '../index';

export interface IShowIngredientDetailsAction {
    readonly type: typeof SHOW_INGREDIENT_DETAILS;
    readonly ingredient: TIngredient;
}

export interface IHideIngredientDetailsAction {
    readonly type: typeof HIDE_INGREDIENT_DETAILS;
}

export type TIngredientDetailsActions =
    | IShowIngredientDetailsAction
    | IHideIngredientDetailsAction;
