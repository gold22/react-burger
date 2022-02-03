import React from 'react';
import { TOrders } from '../../services/types';
import OrderCard from '../order-card/order-card';
import styles from './order-cards.module.css';

type TOrderCardsProps = {
    orders: TOrders;
    showStatus?: boolean;
};

const OrderCards: React.FC<TOrderCardsProps> = ({ orders, showStatus = false }) => (
    <div className={`${styles.cards} custom-scroll`}>
        {orders.map((order) => (
            <OrderCard
                key={order.number}
                order={order}
                showStatus={showStatus}
            />
        ))}
    </div>
);

export default OrderCards;
