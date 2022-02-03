import {
    ORDERS_LIST_CONNECTION_SUCCESS,
    ORDERS_LIST_CONNECTION_ERROR,
    ORDERS_LIST_CONNECTION_CLOSED,
    ORDERS_LIST_RECEIVED,
} from '../constants/orders-list';
import { TOrders } from '../types';
import { TOrdersListActions } from '../types/actions/orders-list';
import { mapOrders } from '../../utils/orders';

export type TOrdersListState = {
    orders: TOrders;
    total: number,
    totalToday: number,
    isConnected: boolean;
    connectionError: string | null;
};

const initialState: TOrdersListState = {
    orders: [],
    total: 0,
    totalToday: 0,
    isConnected: false,
    connectionError: null,
};

export const ordersListReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state: TOrdersListState = initialState,
    action: TOrdersListActions,
): TOrdersListState => {
    switch (action.type) {
    case ORDERS_LIST_CONNECTION_SUCCESS: {
        return {
            ...state,
            isConnected: true,
            connectionError: null,
        };
    }
    case ORDERS_LIST_CONNECTION_ERROR: {
        return {
            ...state,
            connectionError: action.message,
        };
    }
    case ORDERS_LIST_CONNECTION_CLOSED: {
        if (action.message) {
            return {
                ...initialState,
                connectionError: state.connectionError || action.message,
            };
        }
        return {
            ...state,
            isConnected: false,
        };
    }
    case ORDERS_LIST_RECEIVED: {
        return {
            ...state,
            orders: mapOrders(action.data.orders),
            total: action.data.total,
            totalToday: action.data.totalToday,
        };
    }
    default: {
        return state;
    }
    }
};
