import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    CLEAR_ORDER,
} from '../constants/order-info';
import { TDispatch, TGetState, TThunk } from '../types/store';
import { IClearOrderAction } from '../types/actions/order-info';
import ApiClient from '../api-client';
import { getErrorMessage } from '../../utils/error';
import { mapOrder } from '../../utils/orders';

export const clearOrder = (): IClearOrderAction => ({
    type: CLEAR_ORDER,
});

export const getOrder: TThunk = (orderNumber: string) => async (
    dispatch: TDispatch,
    getState: TGetState,
    apiClient: ApiClient,
) => {
    dispatch({
        type: GET_ORDER_REQUEST,
    });
    try {
        const order = await apiClient.getOrder(orderNumber);
        dispatch({
            type: GET_ORDER_SUCCESS,
            order: mapOrder(order),
        });
    } catch (error) {
        dispatch({
            type: GET_ORDER_ERROR,
            message: getErrorMessage(error),
        });
    }
};
