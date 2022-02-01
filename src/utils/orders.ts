import { TOrders } from '../services/types';
import { TApiOrder } from '../services/types/api';

// eslint-disable-next-line import/prefer-default-export
export const mapOrders = (orders: Array<TApiOrder>): TOrders => (
    orders.map((order: TApiOrder) => ({
        number: order.number,
        name: order.name,
        status: order.status,
        createdAt: new Date(order.createdAt),
        updatedAt: new Date(order.updatedAt),
        ingredients: order.ingredients,
    }))
);
