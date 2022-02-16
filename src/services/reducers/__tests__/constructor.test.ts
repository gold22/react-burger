import { constructorReducer, TConstructorState } from '../constructor';
import {
    ADD_INGREDIENT,
    MOVE_INGREDIENT,
    REMOVE_INGREDIENT,
    REMOVE_INGREDIENTS,
    SET_BUN,
} from '../../constants/constructor';
import { IRemoveIngredientsAction, ISetBunAction } from '../../types/actions/constructor';
import { bunN200i, bunR2D3, mainFillet, sauceSpicyX } from '../../../__fixtures__/ingredients';

const initialState: TConstructorState = constructorReducer(undefined, {} as any);

describe('constructor reducer', () => {
    it('should return the initial state', () => {
        expect(initialState).toMatchSnapshot();
    });

    it('should handle SET_BUN', () => {
        const action: ISetBunAction = {
            type: SET_BUN,
            bun: bunN200i,
        };

        expect(constructorReducer(undefined, action))
            .toMatchSnapshot();

        let state: TConstructorState = {
            ingredients: [bunR2D3, bunR2D3],
        };
        expect(constructorReducer(state, action))
            .toMatchSnapshot();

        state = {
            ingredients: [bunR2D3, { ...mainFillet, uuid: '118541d3-3a6e-4502-8152-5eb0c25949f2' }, bunR2D3],
        };
        expect(constructorReducer(state, action))
            .toMatchSnapshot();
    });

    it('should handle ADD_INGREDIENT', () => {
        const type = ADD_INGREDIENT;
        const ingredient = { ...mainFillet, uuid: '118541d3-3a6e-4502-8152-5eb0c25949f2' };

        let state: TConstructorState = {
            ingredients: [bunN200i, bunN200i],
        };
        expect(constructorReducer(state, { type, ingredient, index: 0 }))
            .toMatchSnapshot();
        expect(constructorReducer(state, { type, ingredient, index: 1 }))
            .toMatchSnapshot();

        state = {
            ingredients: [bunN200i, { ...sauceSpicyX, uuid: 'c029fc17-21fc-43dc-a0f0-d6de887d92e8' }, bunN200i],
        };
        expect(constructorReducer(state, { type, ingredient, index: 0 }))
            .toMatchSnapshot();
        expect(constructorReducer(state, { type, ingredient, index: 1 }))
            .toMatchSnapshot();
        expect(constructorReducer(state, { type, ingredient, index: 2 }))
            .toMatchSnapshot();
    });

    it('should handle REMOVE_INGREDIENT', () => {
        const type = REMOVE_INGREDIENT;
        const state = {
            ingredients: [bunN200i, { ...mainFillet, uuid: '118541d3-3a6e-4502-8152-5eb0c25949f2' }, bunN200i],
        };
        expect(constructorReducer(state, { type, index: 1 }))
            .toMatchSnapshot();
    });

    it('should handle REMOVE_INGREDIENTS', () => {
        const action: IRemoveIngredientsAction = {
            type: REMOVE_INGREDIENTS,
        };
        const state = {
            ingredients: [bunN200i, { ...mainFillet, uuid: '118541d3-3a6e-4502-8152-5eb0c25949f2' }, bunN200i],
        };
        expect(constructorReducer(state, action))
            .toMatchSnapshot();
    });

    it('should handle MOVE_INGREDIENT', () => {
        const type = MOVE_INGREDIENT;
        const state: TConstructorState = {
            ingredients: [
                bunN200i,
                { ...mainFillet, uuid: '118541d3-3a6e-4502-8152-5eb0c25949f2' },
                { ...sauceSpicyX, uuid: 'c029fc17-21fc-43dc-a0f0-d6de887d92e8' },
                bunN200i,
            ],
        };

        for (let oldIndex = 1; oldIndex < state.ingredients.length - 1; oldIndex += 1) {
            for (let newIndex = 0; newIndex < state.ingredients.length; newIndex += 1) {
                expect(constructorReducer(state, { type, oldIndex, newIndex }))
                    .toMatchSnapshot();
            }
        }
    });
});
