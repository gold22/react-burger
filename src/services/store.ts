import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApiClient from './api-client';
import { rootReducer } from './reducers';
import { socketMiddleware } from './middleware/socket-middleware';
import {
    ORDERS_LIST_CONNECTION_OPEN,
    ORDERS_LIST_CONNECTION_CLOSE,
    ORDERS_LIST_CONNECTION_SUCCESS,
    ORDERS_LIST_CONNECTION_ERROR,
    ORDERS_LIST_CONNECTION_CLOSED,
    ORDERS_LIST_RECEIVED,
} from './constants/orders-list';
import {
    USER_ORDERS_LIST_CONNECTION_OPEN,
    USER_ORDERS_LIST_CONNECTION_CLOSE,
    USER_ORDERS_LIST_CONNECTION_SUCCESS,
    USER_ORDERS_LIST_CONNECTION_ERROR,
    USER_ORDERS_LIST_CONNECTION_CLOSED,
    USER_ORDERS_LIST_RECEIVED,
} from './constants/user-orders-list';

const API_URL = 'https://norma.nomoreparties.space/api';
const WS_URL = 'wss://norma.nomoreparties.space';
const apiClient = new ApiClient({ url: API_URL, wsUrl: WS_URL });

const ordersListActions = {
    open: ORDERS_LIST_CONNECTION_OPEN,
    close: ORDERS_LIST_CONNECTION_CLOSE,
    onOpen: ORDERS_LIST_CONNECTION_SUCCESS,
    onClose: ORDERS_LIST_CONNECTION_CLOSED,
    onError: ORDERS_LIST_CONNECTION_ERROR,
    onMessage: ORDERS_LIST_RECEIVED,
};
const userOrdersListActions = {
    open: USER_ORDERS_LIST_CONNECTION_OPEN,
    close: USER_ORDERS_LIST_CONNECTION_CLOSE,
    onOpen: USER_ORDERS_LIST_CONNECTION_SUCCESS,
    onClose: USER_ORDERS_LIST_CONNECTION_CLOSED,
    onError: USER_ORDERS_LIST_CONNECTION_ERROR,
    onMessage: USER_ORDERS_LIST_RECEIVED,
};

const enhancer = composeWithDevTools(applyMiddleware(
    thunk.withExtraArgument(apiClient),
    socketMiddleware(() => apiClient.createOrdersSocket(), ordersListActions),
    socketMiddleware(() => apiClient.createUserOrdersSocket(), userOrdersListActions),
));
// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer, enhancer);
