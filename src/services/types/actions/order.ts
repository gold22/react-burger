import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_ERROR,
} from '../../constants/order';

export interface ICreateOrderAction {
    readonly type: typeof CREATE_ORDER_REQUEST;
}

export interface ICreateOrderSuccessAction {
    readonly type: typeof CREATE_ORDER_SUCCESS;
    readonly name: string;
    readonly number: string;
}

export interface ICreateOrderFailedAction {
    readonly type: typeof CREATE_ORDER_ERROR;
    readonly message: string;
}

export type TOrderActions =
    | ICreateOrderAction
    | ICreateOrderSuccessAction
    | ICreateOrderFailedAction;
