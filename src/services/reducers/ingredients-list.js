import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR,
} from '../actions/ingredients-list';

const initialState = {
    ingredients: [],
    isLoading: true,
    loadError: null,
};

// eslint-disable-next-line import/prefer-default-export
export const ingredientsListReducer = (state = initialState, action) => {
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
