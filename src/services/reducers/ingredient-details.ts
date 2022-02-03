import {
    SHOW_INGREDIENT_DETAILS,
    HIDE_INGREDIENT_DETAILS,
} from '../constants/ingredient-details';
import { TIngredient } from '../types';
import { TIngredientDetailsActions } from '../types/actions/ingredient-details';

export type TIngredientDetailsState = {
    ingredient: TIngredient | null;
};

const initialState: TIngredientDetailsState = {
    ingredient: null,
};

export const ingredientDetailsReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state: TIngredientDetailsState = initialState,
    action: TIngredientDetailsActions,
): TIngredientDetailsState => {
    switch (action.type) {
    case SHOW_INGREDIENT_DETAILS: {
        return {
            ...state,
            ingredient: action.ingredient,
        };
    }
    case HIDE_INGREDIENT_DETAILS: {
        return {
            ...state,
            ingredient: null,
        };
    }
    default: {
        return state;
    }
    }
};
