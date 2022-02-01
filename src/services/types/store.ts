import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../store';
import { TAuthActions } from './actions/auth';
import { TConstructorActions } from './actions/constructor';
import { TIngredientDetailsActions } from './actions/ingredient-details';
import { TIngredientsListActions } from './actions/ingredients-list';
import { TOrderActions } from './actions/order';
import { TResetPasswordActions } from './actions/reset-password';
import { TOrdersListActions } from './actions/orders-list';
import { TUserOrdersListActions } from './actions/user-orders-list';
import ApiClient from '../api-client';

export type TApplicationActions =
    | TAuthActions
    | TConstructorActions
    | TIngredientDetailsActions
    | TIngredientsListActions
    | TOrderActions
    | TResetPasswordActions
    | TOrdersListActions
    | TUserOrdersListActions;
export type TApplicationActionsTypes = TApplicationActions['type'];

export type TGetState = typeof store.getState;
export type TDispatch = typeof store.dispatch;
export type TRootState = ReturnType<TGetState>;
export type TThunk<ReturnType = void> =
    ActionCreator<ThunkAction<ReturnType, TRootState, ApiClient, Action<TApplicationActions>>>;

export type TSocketActions = {
    open: TApplicationActionsTypes;
    close: TApplicationActionsTypes;
    onOpen: TApplicationActionsTypes;
    onClose: TApplicationActionsTypes;
    onError: TApplicationActionsTypes;
    onMessage: TApplicationActionsTypes;
};
