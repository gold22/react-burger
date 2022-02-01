import {
    USER_ORDERS_LIST_CONNECTION_SUCCESS,
    USER_ORDERS_LIST_CONNECTION_ERROR,
    USER_ORDERS_LIST_CONNECTION_CLOSED,
    USER_ORDERS_LIST_RECEIVED,
} from '../constants/user-orders-list';
import { TOrders } from '../types';
import { TUserOrdersListActions } from '../types/actions/user-orders-list';
import { mapOrders } from '../../utils/orders';

export type TUserOrdersListState = {
    orders: TOrders;
    isConnected: boolean;
    connectionError: string | null;
};

const initialState: TUserOrdersListState = {
    orders: [],
    isConnected: false,
    connectionError: null,
};

export const userOrdersListReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state: TUserOrdersListState = initialState,
    action: TUserOrdersListActions,
): TUserOrdersListState => {
    switch (action.type) {
    case USER_ORDERS_LIST_CONNECTION_SUCCESS: {
        return {
            ...state,
            isConnected: true,
            connectionError: null,
        };
    }
    case USER_ORDERS_LIST_CONNECTION_ERROR: {
        return {
            ...state,
            connectionError: action.message,
        };
    }
    case USER_ORDERS_LIST_CONNECTION_CLOSED: {
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
    case USER_ORDERS_LIST_RECEIVED: {
        return {
            ...state,
            orders: mapOrders(action.data.orders),
        };
    }
    default: {
        return state;
    }
    }
};
