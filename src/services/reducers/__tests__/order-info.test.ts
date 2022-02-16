import { orderInfoReducer, TOrderInfoState } from '../order-info';
import {
    CLEAR_ORDER,
    GET_ORDER_ERROR,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
} from '../../constants/order-info';
import { order9932 } from '../../../__fixtures__/orders';
import { IGetOrderSuccessAction } from '../../types/actions/order-info';

const initialState: TOrderInfoState = orderInfoReducer(undefined, {} as any);

describe('order info reducer', () => {
    it('should return the initial state', () => {
        expect(initialState).toMatchSnapshot();
    });

    it('should handle GET_ORDER_REQUEST', () => {
        expect(orderInfoReducer(undefined, { type: GET_ORDER_REQUEST }))
            .toMatchSnapshot();
    });

    it('should handle GET_ORDER_SUCCESS', () => {
        const action: IGetOrderSuccessAction = {
            type: GET_ORDER_SUCCESS,
            order: order9932,
        };
        const state: TOrderInfoState = {
            ...initialState,
            isLoading: true,
        };
        expect(orderInfoReducer(state, action))
            .toMatchSnapshot();
    });

    it('should handle GET_ORDER_ERROR', () => {
        const state: TOrderInfoState = {
            ...initialState,
            isLoading: true,
        };
        expect(orderInfoReducer(state, { type: GET_ORDER_ERROR, message: 'Get order error' }))
            .toMatchSnapshot();
    });

    it('should handle CLEAR_ORDER', () => {
        const state: TOrderInfoState = {
            ...initialState,
            order: order9932,
        };
        expect(orderInfoReducer(state, { type: CLEAR_ORDER }))
            .toMatchSnapshot();
    });
});
