export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = (apiClient) => async (dispatch) => {
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
            type: GET_INGREDIENTS_FAILED,
            message: error.message,
        });
    }
};
