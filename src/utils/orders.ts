import { TOrder, TOrders } from '../services/types';
import { TApiOrder, TApiOrderStatus } from '../services/types/api';
import { ucFirst } from './string';

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

export const localizeDate = (date: Date) => {
    const diff = (new Date()).getTime() - date.getTime();
    const rtf = new Intl.RelativeTimeFormat('ru', { numeric: 'auto' });
    const days = ucFirst(rtf.format(-Math.floor(diff / (1000 * 60 * 60 * 24)), 'day'));
    const dtf = new Intl.DateTimeFormat('ru', { hour: 'numeric', minute: 'numeric', timeZoneName: 'short' });
    const time = dtf.format(date);
    return `${days}, ${time}`;
};

export const localizeStatus = (status: TApiOrderStatus): string => {
    if (TApiOrderStatus.Created === status) {
        return 'Создан';
    }
    if (TApiOrderStatus.Pending === status) {
        return 'Готовится';
    }
    return 'Выполнен';
};
