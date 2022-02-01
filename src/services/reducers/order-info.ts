import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR,
} from '../constants/order-info';
import { TOrder } from '../types';
import { TGetOrderActions } from '../types/actions/order-info';

export type TOrderInfoState = {
    order: TOrder | null;
    isLoading: boolean;
    loadError: string | null;
};

const initialState: TOrderInfoState = {
    order: null,
    isLoading: true,
    loadError: null,
};

export const orderInfoReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state: TOrderInfoState = initialState,
    action: TGetOrderActions,
): TOrderInfoState => {
    switch (action.type) {
    case GET_ORDER_REQUEST: {
        return {
            ...state,
            isLoading: true,
        };
    }
    case GET_ORDER_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            loadError: null,
            order: action.order,
        };
    }
    case GET_ORDER_ERROR: {
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
