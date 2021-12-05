import * as actions from '../actions/ingredients-list';

const initialState = {
    ingredients: [],
    isLoading: true,
    loadError: null,
};

// eslint-disable-next-line import/prefer-default-export
export const ingredientsListReducer = (state = initialState, action) => {
    switch (action.type) {
    case actions.GET_INGREDIENTS_REQUEST: {
        return {
            ...state,
            isLoading: true,
        };
    }
    case actions.GET_INGREDIENTS_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            ingredients: action.ingredients,
        };
    }
    case actions.GET_INGREDIENTS_FAILED: {
        return {
            ...state,
            isLoading: false,
            loadError: action.message,
        };
    }
    default: {
        return state;
    }
    }
};
