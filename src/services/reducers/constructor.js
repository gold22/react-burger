import {
    SET_BUN,
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    REMOVE_INGREDIENTS,
    MOVE_INGREDIENT,
} from '../actions/constructor';
import { getBun } from '../../utils/ingredients';

const initialState = {
    ingredients: [],
};

// eslint-disable-next-line import/prefer-default-export
export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_BUN: {
        const ingredients = getBun(state.ingredients)
            ? [action.bun, ...state.ingredients.slice(1, state.ingredients.length - 1), action.bun]
            : [action.bun, ...state.ingredients, action.bun];
        return {
            ...state,
            ingredients,
        };
    }
    case ADD_INGREDIENT: {
        const ingredients = [...state.ingredients];
        const index = action.index === 0 && getBun(state.ingredients) ? 1 : action.index;
        ingredients.splice(index, 0, action.ingredient);
        return {
            ...state,
            ingredients,
        };
    }
    case REMOVE_INGREDIENT: {
        return {
            ...state,
            ingredients: state.ingredients.filter((ingredient, index) => index !== action.index),
        };
    }
    case REMOVE_INGREDIENTS: {
        return {
            ...state,
            ingredients: [],
        };
    }
    case MOVE_INGREDIENT: {
        const ingredients = [...state.ingredients];
        const [ingredient] = ingredients.splice(action.oldIndex, 1);
        let { newIndex } = action;
        if (newIndex === 0 && getBun(state.ingredients)) {
            newIndex += 1;
        } else if (newIndex === state.ingredients.length - 1 && getBun(state.ingredients)) {
            newIndex -= 1;
        }
        ingredients.splice(newIndex, 0, ingredient);
        return {
            ...state,
            ingredients,
        };
    }
    default: {
        return state;
    }
    }
};
