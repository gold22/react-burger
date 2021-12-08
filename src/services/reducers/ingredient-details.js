import * as actions from '../actions/ingredient-details';

const initialState = {
    ingredient: null,
};

// eslint-disable-next-line import/prefer-default-export
export const ingredientDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
    case actions.SHOW_INGREDIENT_DETAILS: {
        return {
            ...state,
            ingredient: action.ingredient,
        };
    }
    case actions.HIDE_INGREDIENT_DETAILS: {
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
