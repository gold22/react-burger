import {
    ORDERS_LIST_CONNECTION_OPEN,
    ORDERS_LIST_CONNECTION_CLOSE,
} from '../constants/orders-list';
import {
    IOrdersListConnectionCloseAction,
    IOrdersListConnectionOpenAction,
} from '../types/actions/orders-list';

export const openOrdersListConnection = (): IOrdersListConnectionOpenAction => ({
    type: ORDERS_LIST_CONNECTION_OPEN,
});

export const closeOrdersListConnection = (): IOrdersListConnectionCloseAction => ({
    type: ORDERS_LIST_CONNECTION_CLOSE,
});
