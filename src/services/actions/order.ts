import { getIngredientsIds } from '../../utils/ingredients';
import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_ERROR,
} from '../constants/order';
import { TDispatch, TGetState, TThunk } from '../types/store';
import ApiClient from '../api-client';
import { getErrorMessage } from '../../utils/error';

// eslint-disable-next-line import/prefer-default-export
export const createOrder: TThunk = () => async (
    dispatch: TDispatch,
    getState: TGetState,
    apiClient: ApiClient,
) => {
    dispatch({
        type: CREATE_ORDER_REQUEST,
    });
    try {
        const { ingredients } = getState().burgerConstructor;
        const result = await apiClient.createOrder(getIngredientsIds(ingredients));
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            name: result.name,
            number: result.order.number,
        });
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_ERROR,
            message: getErrorMessage(error),
        });
    }
};
