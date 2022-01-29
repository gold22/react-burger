import {
    SHOW_INGREDIENT_DETAILS,
    HIDE_INGREDIENT_DETAILS,
} from '../constants/ingredient-details';

const initialState = {
    ingredient: null,
};

// eslint-disable-next-line import/prefer-default-export,@typescript-eslint/default-param-last
export const ingredientDetailsReducer = (state = initialState, action) => {
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
