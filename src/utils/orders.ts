import { TOrder, TOrders } from '../services/types';
import { TApiOrder } from '../services/types/api';

export const mapOrder = (order: TApiOrder): TOrder => ({
    // eslint-disable-next-line no-underscore-dangle
    id: order._id,
    number: order.number,
    name: order.name,
    status: order.status,
    createdAt: new Date(order.createdAt),
    updatedAt: new Date(order.updatedAt),
    ingredients: order.ingredients,
});

export const mapOrders = (orders: Array<TApiOrder>): TOrders => orders.map(mapOrder);
