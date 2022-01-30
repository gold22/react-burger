import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR,
} from '../constants/ingredients-list';
import { TIngredients } from '../types';
import { TIngredientsListActions } from '../types/actions/ingredients-list';

export type TIngredientsListState = {
    ingredients: TIngredients;
    isLoading: boolean;
    loadError: string | null;
};

const initialState: TIngredientsListState = {
    ingredients: [],
    isLoading: true,
    loadError: null,
};

export const ingredientsListReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state: TIngredientsListState = initialState,
    action: TIngredientsListActions,
): TIngredientsListState => {
    switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
        return {
            ...state,
            isLoading: true,
        };
    }
    case GET_INGREDIENTS_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            loadError: null,
            ingredients: action.ingredients,
        };
    }
    case GET_INGREDIENTS_ERROR: {
        return {
            ...initialState,
            isLoading: false,
            loadError: action.message,
        };
    }
    default: {
        return state;
    }
    }
};
