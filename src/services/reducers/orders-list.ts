import {
    ORDERS_LIST_CONNECTION_SUCCESS,
    ORDERS_LIST_CONNECTION_ERROR,
    ORDERS_LIST_CONNECTION_CLOSED,
    ORDERS_LIST_RECEIVED,
} from '../constants/orders-list';
import { TOrders } from '../types';
import { TOrdersListActions } from '../types/actions/orders-list';
import { TApiOrder } from '../types/api';

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
            ...initialState,
            isConnected: true,
        };
    }
    case ORDERS_LIST_CONNECTION_ERROR: {
        return {
            ...initialState,
        };
    }
    case ORDERS_LIST_CONNECTION_CLOSED: {
        return {
            ...initialState,
            connectionError: action.message,
        };
    }
    case ORDERS_LIST_RECEIVED: {
        return {
            ...state,
            orders: action.data.orders.map((order: TApiOrder) => ({
                number: order.number,
                status: order.status,
                createdAt: new Date(order.createdAt),
                updatedAt: new Date(order.updatedAt),
                ingredients: order.ingredients,
            })),
            total: action.data.total,
            totalToday: action.data.totalToday,
        };
    }
    default: {
        return state;
    }
    }
};
