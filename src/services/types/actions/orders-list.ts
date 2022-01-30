import {
    ORDERS_LIST_CONNECTION_OPEN,
    ORDERS_LIST_CONNECTION_CLOSE,
    ORDERS_LIST_CONNECTION_SUCCESS,
    ORDERS_LIST_CONNECTION_ERROR,
    ORDERS_LIST_CONNECTION_CLOSED,
    ORDERS_LIST_RECEIVED,
} from '../../constants/orders-list';
// import { TOrders } from '../index';

export interface IOrdersListConnectionOpenAction {
    readonly type: typeof ORDERS_LIST_CONNECTION_OPEN;
}

export interface IOrdersListConnectionCloseAction {
    readonly type: typeof ORDERS_LIST_CONNECTION_CLOSE;
}

export interface IOrdersListConnectionSuccessAction {
    readonly type: typeof ORDERS_LIST_CONNECTION_SUCCESS;
}

export interface IOrdersListConnectionFailedAction {
    readonly type: typeof ORDERS_LIST_CONNECTION_ERROR;
    // readonly message: string;
}

export interface IOrdersListConnectionClosedAction {
    readonly type: typeof ORDERS_LIST_CONNECTION_CLOSED;
    // readonly message: string;
}

export interface IOrdersListReceivedAction {
    readonly type: typeof ORDERS_LIST_RECEIVED;
    // readonly orders: TOrders;
    // total: number,
    // totalToday: number,
}

export type TOrdersListActions =
    | IOrdersListConnectionOpenAction
    | IOrdersListConnectionCloseAction
    | IOrdersListConnectionSuccessAction
    | IOrdersListConnectionFailedAction
    | IOrdersListConnectionClosedAction
    | IOrdersListReceivedAction;
