import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR,
} from '../constants/ingredients-list';

// eslint-disable-next-line import/prefer-default-export
export const getIngredients = () => async (dispatch, getState, apiClient) => {
    dispatch({
        type: GET_INGREDIENTS_REQUEST,
    });
    try {
        const ingredients = await apiClient.getIngredients();
        dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: ingredients.map((ingredient) => ({
                ...ingredient,
                // eslint-disable-next-line no-underscore-dangle
                id: ingredient._id,
                imageLarge: ingredient.image_large,
                imageMobile: ingredient.image_mobile,
            })),
        });
    } catch (error) {
        dispatch({
            type: GET_INGREDIENTS_ERROR,
            message: error.message,
        });
    }
};
