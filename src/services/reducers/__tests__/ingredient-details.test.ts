import { ingredientDetailsReducer } from '../ingredient-details';
import { hideIngredientDetails, showIngredientDetails } from '../../actions/ingredient-details';
import { ingredient } from '../../../__fixtures__/ingredients';

describe('ingredient details reducer', () => {
    it('should return the initial state', () => {
        expect(ingredientDetailsReducer(undefined, {} as any)).toMatchSnapshot();
    });

    it('should handle SHOW_INGREDIENT_DETAILS', () => {
        expect(ingredientDetailsReducer(undefined, showIngredientDetails(ingredient)))
            .toMatchSnapshot();
    });

    it('should handle HIDE_INGREDIENT_DETAILS', () => {
        const state = ingredientDetailsReducer(undefined, showIngredientDetails(ingredient));
        expect(ingredientDetailsReducer(state, hideIngredientDetails()))
            .toMatchSnapshot();
    });
});
