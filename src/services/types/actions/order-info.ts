import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    CLEAR_ORDER,
} from '../../constants/order-info';
import { TOrder } from '../index';

export interface IGetOrderAction {
    readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccessAction {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly order: TOrder;
}

export interface IGetOrderFailedAction {
    readonly type: typeof GET_ORDER_ERROR;
    readonly message: string;
}

export interface IClearOrderAction {
    readonly type: typeof CLEAR_ORDER;
}

export type TGetOrderActions =
    | IGetOrderAction
    | IGetOrderSuccessAction
    | IGetOrderFailedAction
    | IClearOrderAction;
