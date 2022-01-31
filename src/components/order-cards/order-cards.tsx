import React from 'react';
import { TOrders } from '../../services/types';
import OrderCard from '../order-card/order-card';
import styles from './order-cards.module.css';

type TOrderCardsProps = {
    orders: TOrders;
};

const OrderCards: React.FC<TOrderCardsProps> = ({ orders }) => (
    <div className={`${styles.cards} custom-scroll`}>
        {orders.map((order) => (
            <OrderCard
                key={order.number}
                order={order}
            />
        ))}
    </div>
);

export default OrderCards;
