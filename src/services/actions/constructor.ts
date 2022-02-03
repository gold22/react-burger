import { v4 as uuid } from 'uuid';
import {
    SET_BUN,
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    REMOVE_INGREDIENTS,
    MOVE_INGREDIENT,
} from '../constants/constructor';
import { TIngredient } from '../types';
import {
    IAddIngredientAction,
    IMoveIngredientAction,
    IRemoveIngredientAction,
    IRemoveIngredientsAction,
    ISetBunAction,
} from '../types/actions/constructor';

export const setBun = (bun: TIngredient): ISetBunAction => ({
    type: SET_BUN,
    bun,
});

export const addIngredient = (ingredient: TIngredient, index: number): IAddIngredientAction => ({
    type: ADD_INGREDIENT,
    ingredient: {
        ...ingredient,
        uuid: uuid(),
    },
    index,
});

export const removeIngredient = (index: number): IRemoveIngredientAction => ({
    type: REMOVE_INGREDIENT,
    index,
});

export const removeIngredients = (): IRemoveIngredientsAction => ({
    type: REMOVE_INGREDIENTS,
});

export const moveIngredient = (oldIndex: number, newIndex: number): IMoveIngredientAction => ({
    type: MOVE_INGREDIENT,
    oldIndex,
    newIndex,
});
