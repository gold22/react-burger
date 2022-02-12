import { orderReducer, TOrderState } from '../order';
import {
    CREATE_ORDER_ERROR,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
} from '../../constants/order';
import { ICreateOrderSuccessAction } from '../../types/actions/order';

const initialState: TOrderState = orderReducer(undefined, {} as any);

describe('order reducer', () => {
    it('should return the initial state', () => {
        expect(initialState).toMatchSnapshot();
    });

    it('should handle CREATE_ORDER_REQUEST', () => {
        expect(orderReducer(undefined, { type: CREATE_ORDER_REQUEST }))
            .toMatchSnapshot();
    });

    it('should handle CREATE_ORDER_SUCCESS', () => {
        const action: ICreateOrderSuccessAction = {
            type: CREATE_ORDER_SUCCESS,
            name: 'Традиционный-галактический краторный бургер',
            number: '9932',
        };
        const state = {
            ...initialState,
            isCreating: true,
        };
        expect(orderReducer(state, action))
            .toMatchSnapshot();
    });

    it('should handle CREATE_ORDER_ERROR', () => {
        const state = {
            ...initialState,
            isCreating: true,
        };
        expect(orderReducer(state, { type: CREATE_ORDER_ERROR, message: 'Create order error' }))
            .toMatchSnapshot();
    });
});
