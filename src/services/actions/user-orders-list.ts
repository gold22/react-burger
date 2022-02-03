import {
    USER_ORDERS_LIST_CONNECTION_OPEN,
    USER_ORDERS_LIST_CONNECTION_CLOSE,
} from '../constants/user-orders-list';
import {
    IUserOrdersListConnectionCloseAction,
    IUserOrdersListConnectionOpenAction,
} from '../types/actions/user-orders-list';

export const openUserOrdersListConnection = (): IUserOrdersListConnectionOpenAction => ({
    type: USER_ORDERS_LIST_CONNECTION_OPEN,
});

export const closeUserOrdersListConnection = (): IUserOrdersListConnectionCloseAction => ({
    type: USER_ORDERS_LIST_CONNECTION_CLOSE,
});
