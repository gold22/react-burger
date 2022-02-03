import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR,
} from '../constants/ingredients-list';
import { TDispatch, TGetState, TThunk } from '../types/store';
import ApiClient from '../api-client';
import { getErrorMessage } from '../../utils/error';

// eslint-disable-next-line import/prefer-default-export
export const getIngredients: TThunk = () => async (
    dispatch: TDispatch,
    getState: TGetState,
    apiClient: ApiClient,
) => {
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
            message: getErrorMessage(error),
        });
    }
};
