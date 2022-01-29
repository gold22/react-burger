import { getIngredientsIds } from '../../utils/ingredients';
import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_ERROR,
} from '../constants/order';

// eslint-disable-next-line import/prefer-default-export
export const createOrder = () => async (dispatch, getState, apiClient) => {
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
            message: error.message,
        });
    }
};
