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

const API_URL = 'https://norma.nomoreparties.space/api';
const WS_URL = 'wss://norma.nomoreparties.space';
const apiClient = new ApiClient({ url: API_URL });

const ordersListActions = {
    open: ORDERS_LIST_CONNECTION_OPEN,
    close: ORDERS_LIST_CONNECTION_CLOSE,
    onOpen: ORDERS_LIST_CONNECTION_SUCCESS,
    onClose: ORDERS_LIST_CONNECTION_CLOSED,
    onError: ORDERS_LIST_CONNECTION_ERROR,
    onMessage: ORDERS_LIST_RECEIVED,
};

const enhancer = composeWithDevTools(applyMiddleware(
    thunk.withExtraArgument(apiClient),
    socketMiddleware(`${WS_URL}/orders/all`, ordersListActions),
));
// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer, enhancer);
