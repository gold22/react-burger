import { ingredientDetailsReducer, TIngredientDetailsState } from '../ingredient-details';
import {
    HIDE_INGREDIENT_DETAILS,
    SHOW_INGREDIENT_DETAILS,
} from '../../constants/ingredient-details';
import { IHideIngredientDetailsAction, IShowIngredientDetailsAction } from '../../types/actions/ingredient-details';
import { bunN200i } from '../../../__fixtures__/ingredients';

const initialState: TIngredientDetailsState = ingredientDetailsReducer(undefined, {} as any);

describe('ingredient details reducer', () => {
    it('should return the initial state', () => {
        expect(initialState).toMatchSnapshot();
    });

    it('should handle SHOW_INGREDIENT_DETAILS', () => {
        const action: IShowIngredientDetailsAction = {
            type: SHOW_INGREDIENT_DETAILS,
            ingredient: bunN200i,
        };
        expect(ingredientDetailsReducer(undefined, action))
            .toMatchSnapshot();
    });

    it('should handle HIDE_INGREDIENT_DETAILS', () => {
        const action: IHideIngredientDetailsAction = {
            type: HIDE_INGREDIENT_DETAILS,
        };
        const state = {
            ...initialState,
            ingredient: bunN200i,
        };
        expect(ingredientDetailsReducer(state, action))
            .toMatchSnapshot();
    });
});
