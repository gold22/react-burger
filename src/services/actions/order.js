import { getIngredientsIds } from '../../utils/consctructor';

export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR';

export const createOrder = () => async (dispatch, getState, apiClient) => {
    dispatch({
        type: CREATE_ORDER_REQUEST,
    });
    try {
        const { bun, ingredients } = getState().burgerConstructor;
        const result = await apiClient.createOrder(getIngredientsIds(bun, ingredients));
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
