import { ordersListReducer, TOrdersListState } from '../orders-list';
import {
    ORDERS_LIST_CONNECTION_CLOSED,
    ORDERS_LIST_CONNECTION_ERROR,
    ORDERS_LIST_CONNECTION_SUCCESS,
    ORDERS_LIST_RECEIVED,
} from '../../constants/orders-list';
import { IOrdersListReceivedAction } from '../../types/actions/orders-list';
import { apiOrders, orders } from '../../../__fixtures__/orders';

const initialState: TOrdersListState = ordersListReducer(undefined, {} as any);

describe('orders list reducer', () => {
    it('should return the initial state', () => {
        expect(initialState).toMatchSnapshot();
    });

    it('should handle ORDERS_LIST_CONNECTION_SUCCESS', () => {
        expect(ordersListReducer(undefined, { type: ORDERS_LIST_CONNECTION_SUCCESS }))
            .toMatchSnapshot();
    });

    it('should handle ORDERS_LIST_RECEIVED', () => {
        const action: IOrdersListReceivedAction = {
            type: ORDERS_LIST_RECEIVED,
            data: apiOrders,
        };
        const state: TOrdersListState = {
            ...initialState,
            isConnected: true,
        };
        expect(ordersListReducer(state, action))
            .toMatchSnapshot();
    });

    it('should handle ORDERS_LIST_CONNECTION_ERROR', () => {
        expect(ordersListReducer(undefined, { type: ORDERS_LIST_CONNECTION_ERROR, message: null }))
            .toMatchSnapshot();
        expect(ordersListReducer(undefined, { type: ORDERS_LIST_CONNECTION_ERROR, message: 'Connection error' }))
            .toMatchSnapshot();
    });

    it('should handle ORDERS_LIST_CONNECTION_CLOSED', () => {
        const state: TOrdersListState = {
            ...initialState,
            orders,
            total: 9848,
            totalToday: 17,
            isConnected: true,
        };
        expect(ordersListReducer(state, { type: ORDERS_LIST_CONNECTION_CLOSED, message: null }))
            .toMatchSnapshot();
        expect(ordersListReducer(state, { type: ORDERS_LIST_CONNECTION_CLOSED, message: 'Connection close error' }))
            .toMatchSnapshot();
    });
});
