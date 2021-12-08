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
        const index = action.index < 0 ? state.ingredients.length : action.index;
        return {
            ...state,
            ingredients: [
                ...state.ingredients.slice(0, index),
                action.ingredient,
                ...state.ingredients.slice(index),
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
        const { oldIndex } = action;
        const newIndex = action.newIndex < 0 ? state.ingredients.length : action.newIndex;
        if (oldIndex === newIndex) {
            return state;
        }
        const { ingredients } = state;
        const ingredient = ingredients[oldIndex];
        return {
            ...state,
            ingredients: [
                ...ingredients.slice(0, Math.min(oldIndex, newIndex)),
                ...(newIndex < oldIndex
                    ? [ingredient, ...ingredients.slice(newIndex, oldIndex)]
                    : []),
                ...(newIndex > oldIndex
                    ? [...ingredients.slice(oldIndex + 1, newIndex + 1), ingredient]
                    : []),
                ...ingredients.slice(Math.max(oldIndex, newIndex) + 1),
            ],
        };
    }
    default: {
        return state;
    }
    }
};
