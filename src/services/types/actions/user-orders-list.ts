import {
    USER_ORDERS_LIST_CONNECTION_OPEN,
    USER_ORDERS_LIST_CONNECTION_CLOSE,
    USER_ORDERS_LIST_CONNECTION_SUCCESS,
    USER_ORDERS_LIST_CONNECTION_ERROR,
    USER_ORDERS_LIST_CONNECTION_CLOSED,
    USER_ORDERS_LIST_RECEIVED,
} from '../../constants/user-orders-list';
import { TApiOrders } from '../api';

export interface IUserOrdersListConnectionOpenAction {
    readonly type: typeof USER_ORDERS_LIST_CONNECTION_OPEN;
}

export interface IUserOrdersListConnectionCloseAction {
    readonly type: typeof USER_ORDERS_LIST_CONNECTION_CLOSE;
}

export interface IUserOrdersListConnectionSuccessAction {
    readonly type: typeof USER_ORDERS_LIST_CONNECTION_SUCCESS;
}

export interface IUserOrdersListConnectionFailedAction {
    readonly type: typeof USER_ORDERS_LIST_CONNECTION_ERROR;
    readonly message: string | null;
}

export interface IUserOrdersListConnectionClosedAction {
    readonly type: typeof USER_ORDERS_LIST_CONNECTION_CLOSED;
    readonly message: string | null;
}

export interface IUserOrdersListReceivedAction {
    readonly type: typeof USER_ORDERS_LIST_RECEIVED;
    readonly data: TApiOrders;
}

export type TUserOrdersListActions =
    | IUserOrdersListConnectionOpenAction
    | IUserOrdersListConnectionCloseAction
    | IUserOrdersListConnectionSuccessAction
    | IUserOrdersListConnectionFailedAction
    | IUserOrdersListConnectionClosedAction
    | IUserOrdersListReceivedAction;
