import { v4 as uuid } from 'uuid';

export const SET_BUN = 'SET_BUN';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';

export const setBun = (bun) => ({
    type: SET_BUN,
    bun,
});

export const addIngredient = (ingredient, index) => ({
    type: ADD_INGREDIENT,
    ingredient: {
        ...ingredient,
        uuid: uuid(),
    },
    index,
});

export const removeIngredient = (index) => ({
    type: REMOVE_INGREDIENT,
    index,
});

export const moveIngredient = (oldIndex, newIndex) => ({
    type: MOVE_INGREDIENT,
    oldIndex,
    newIndex,
});
