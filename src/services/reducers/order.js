import * as actions from '../actions/order';

const initialState = {
    name: null,
    number: null,
    isCreating: false,
    creationError: null,
};

// eslint-disable-next-line import/prefer-default-export
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
    case actions.CREATE_ORDER_REQUEST: {
        return {
            ...state,
            isCreating: true,
            creationError: null,
        };
    }
    case actions.CREATE_ORDER_SUCCESS: {
        return {
            ...state,
            name: action.name,
            number: action.number,
            isCreating: false,
        };
    }
    case actions.CREATE_ORDER_ERROR: {
        return {
            ...state,
            isCreating: false,
            creationError: action.message,
        };
    }
    default: {
        return state;
    }
    }
};
