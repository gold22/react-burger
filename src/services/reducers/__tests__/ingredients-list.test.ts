import { ingredientsListReducer, TIngredientsListState } from '../ingredients-list';
import {
    GET_INGREDIENTS_ERROR,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
} from '../../constants/ingredients-list';
import { ingredients } from '../../../__fixtures__/ingredients';

const initialState: TIngredientsListState = ingredientsListReducer(undefined, {} as any);

describe('ingredients list reducer', () => {
    it('should return the initial state', () => {
        expect(initialState).toMatchSnapshot();
    });

    it('should handle GET_INGREDIENTS_REQUEST', () => {
        expect(ingredientsListReducer(undefined, { type: GET_INGREDIENTS_REQUEST }))
            .toMatchSnapshot();
    });

    it('should handle GET_INGREDIENTS_SUCCESS', () => {
        const state = {
            ...initialState,
            isLoading: true,
        };
        expect(ingredientsListReducer(state, { type: GET_INGREDIENTS_SUCCESS, ingredients }))
            .toMatchSnapshot();
    });

    it('should handle GET_INGREDIENTS_ERROR', () => {
        const state = {
            ...initialState,
            isLoading: true,
        };
        expect(ingredientsListReducer(state, { type: GET_INGREDIENTS_ERROR, message: 'Get ingredients error' }))
            .toMatchSnapshot();
    });
});
