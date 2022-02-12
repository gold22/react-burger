import { userOrdersListReducer, TUserOrdersListState } from '../user-orders-list';
import {
    USER_ORDERS_LIST_CONNECTION_CLOSED,
    USER_ORDERS_LIST_CONNECTION_ERROR,
    USER_ORDERS_LIST_CONNECTION_SUCCESS,
    USER_ORDERS_LIST_RECEIVED,
} from '../../constants/user-orders-list';
import { IUserOrdersListReceivedAction } from '../../types/actions/user-orders-list';
import { orders, userApiOrders } from '../../../__fixtures__/orders';

const initialState: TUserOrdersListState = userOrdersListReducer(undefined, {} as any);

describe('user orders list reducer', () => {
    it('should return the initial state', () => {
        expect(initialState).toMatchSnapshot();
    });

    it('should handle USER_ORDERS_LIST_CONNECTION_SUCCESS', () => {
        expect(userOrdersListReducer(undefined, { type: USER_ORDERS_LIST_CONNECTION_SUCCESS }))
            .toMatchSnapshot();
    });

    it('should handle USER_ORDERS_LIST_RECEIVED', () => {
        const action: IUserOrdersListReceivedAction = {
            type: USER_ORDERS_LIST_RECEIVED,
            data: userApiOrders,
        };
        const state: TUserOrdersListState = {
            ...initialState,
            isConnected: true,
        };
        expect(userOrdersListReducer(state, action))
            .toMatchSnapshot();
    });

    it('should handle USER_ORDERS_LIST_CONNECTION_ERROR', () => {
        const type = USER_ORDERS_LIST_CONNECTION_ERROR;
        expect(userOrdersListReducer(undefined, { type, message: null }))
            .toMatchSnapshot();
        expect(userOrdersListReducer(undefined, { type, message: 'Connection error' }))
            .toMatchSnapshot();
    });

    it('should handle USER_ORDERS_LIST_CONNECTION_CLOSED', () => {
        const type = USER_ORDERS_LIST_CONNECTION_CLOSED;
        const state: TUserOrdersListState = {
            ...initialState,
            orders,
            isConnected: true,
        };
        expect(userOrdersListReducer(state, { type, message: null }))
            .toMatchSnapshot();
        expect(userOrdersListReducer(state, { type, message: 'Connection close error' }))
            .toMatchSnapshot();
    });
});
