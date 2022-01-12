import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_ERROR,
} from '../actions/order';

const initialState = {
    name: null,
    number: null,
    isCreating: false,
    creationError: null,
};

// eslint-disable-next-line import/prefer-default-export,@typescript-eslint/default-param-last
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
    case CREATE_ORDER_REQUEST: {
        return {
            ...state,
            isCreating: true,
        };
    }
    case CREATE_ORDER_SUCCESS: {
        return {
            ...state,
            name: action.name,
            number: action.number,
            isCreating: false,
            creationError: null,
        };
    }
    case CREATE_ORDER_ERROR: {
        return {
            ...initialState,
            creationError: action.message,
        };
    }
    default: {
        return state;
    }
    }
};
