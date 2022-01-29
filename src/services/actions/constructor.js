import { v4 as uuid } from 'uuid';
import {
    SET_BUN,
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    REMOVE_INGREDIENTS,
    MOVE_INGREDIENT,
} from '../constants/constructor';

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

export const removeIngredients = () => ({
    type: REMOVE_INGREDIENTS,
});

export const moveIngredient = (oldIndex, newIndex) => ({
    type: MOVE_INGREDIENT,
    oldIndex,
    newIndex,
});
