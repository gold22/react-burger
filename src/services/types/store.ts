import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TAuthActions } from './actions/auth';
import { TConstructorActions } from './actions/constructor';
import { TIngredientDetailsActions } from './actions/ingredient-details';
import { TIngredientsListActions } from './actions/ingredients-list';
import ApiClient from '../api-client';

type TApplicationActions =
    | TAuthActions
    | TConstructorActions
    | TIngredientDetailsActions
    | TIngredientsListActions;

export type TGetState = typeof store.getState;
export type TRootState = ReturnType<TGetState>;
export type TDispatch = typeof store.dispatch;
export type TThunk<ReturnType = void> =
    ActionCreator<ThunkAction<ReturnType, TRootState, ApiClient, Action<TApplicationActions>>>;