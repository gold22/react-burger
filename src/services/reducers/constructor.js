import * as actions from '../actions/constructor';

const initialState = {
    bun: null,
    ingredients: [],
};

// eslint-disable-next-line import/prefer-default-export
export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
    case actions.SET_BUN: {
        return {
            ...state,
            bun: action.bun,
        };
    }
    case actions.ADD_INGREDIENT: {
        return {
            ...state,
            ingredients: [
                ...state.ingredients.slice(0, action.index),
                action.ingredient,
                ...state.ingredients.slice(action.index),
            ],
        };
    }
    case actions.REMOVE_INGREDIENT: {
        return {
            ...state,
            ingredients: state.ingredients.filter((ingredient, index) => index !== action.index),
        };
    }
    case actions.MOVE_INGREDIENT: {
        if (action.oldIndex === action.newIndex) {
            return state;
        }
        const { ingredients } = state;
        const ingredient = ingredients[action.oldIndex];
        return {
            ...state,
            ingredients: [
                ...ingredients.slice(0, Math.min(action.oldIndex, action.newIndex)),
                ...(action.newIndex < action.oldIndex
                    ? [ingredient, ...ingredients.slice(action.newIndex, action.oldIndex)]
                    : []),
                ...(action.newIndex > action.oldIndex
                    ? [...ingredients.slice(action.oldIndex + 1, action.newIndex + 1), ingredient]
                    : []),
                ...ingredients.slice(Math.max(action.oldIndex, action.newIndex) + 1),
            ],
        };
    }
    default: {
        return state;
    }
    }
};
