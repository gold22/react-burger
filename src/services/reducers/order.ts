import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_ERROR,
} from '../constants/order';
import { TOrderActions } from '../types/actions/order';

export type TOrderState = {
    name: string | null;
    number: string | null;
    isCreating: boolean;
    creationError: string | null;
};

const initialState: TOrderState = {
    name: null,
    number: null,
    isCreating: false,
    creationError: null,
};

export const orderReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state: TOrderState = initialState,
    action: TOrderActions,
) => {
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
