import { ingredientDetailsReducer, TIngredientDetailsState } from '../ingredient-details';
import { hideIngredientDetails, showIngredientDetails } from '../../actions/ingredient-details';
import { ingredient } from '../../../__fixtures__/ingredients';

const initialState: TIngredientDetailsState = ingredientDetailsReducer(undefined, {} as any);

describe('ingredient details reducer', () => {
    it('should return the initial state', () => {
        expect(initialState).toMatchSnapshot();
    });

    it('should handle SHOW_INGREDIENT_DETAILS', () => {
        expect(ingredientDetailsReducer(undefined, showIngredientDetails(ingredient)))
            .toMatchSnapshot();
    });

    it('should handle HIDE_INGREDIENT_DETAILS', () => {
        const state = {
            ...initialState,
            ingredient,
        };
        expect(ingredientDetailsReducer(state, hideIngredientDetails()))
            .toMatchSnapshot();
    });
});
