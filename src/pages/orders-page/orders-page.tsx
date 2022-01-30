import React from 'react';
import OrderCards from '../../components/order-cards/order-cards';
import styles from './orders-page.module.css';

const OrdersPage = () => (
    <div className={styles.main}>
        <div className={styles.container}>
            <p className="text text_type_main-large">Лента заказов</p>
            <div className={styles.content}>
                <div className={styles.list}>
                    <OrderCards />
                </div>
                <div className={styles.status}>
                    Статус
                </div>
            </div>
        </div>
    </div>
);

export default OrdersPage;
