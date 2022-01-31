import React from 'react';
import { useSelector } from '../../services/hooks';
import { TApiOrderStatus } from '../../services/types/api';
import styles from './orders-status.module.css';

const OrdersStatus = () => {
    const { orders, total, totalToday } = useSelector((state) => state.ordersList);

    const doneOrders = React.useMemo(
        () => orders.filter((order) => TApiOrderStatus.Done === order.status),
        [orders],
    );
    const pendingOrders = React.useMemo(
        () => orders.filter((order) => TApiOrderStatus.Pending === order.status),
        [orders],
    );

    return (
        <div className={styles.main}>
            <div className={styles.orderPanels}>
                <div className={styles.doneOrderPanel}>
                    <p className="text text_type_main-medium">Готовы:</p>
                    <div className={styles.orders}>
                        {doneOrders.map((order) => (
                            <p
                                key={order.number}
                                className="text text_type_digits-default text_color_success"
                            >
                                {order.number}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.pendingOrderPanel}>
                    <p className="text text_type_main-medium">В работе:</p>
                    <div className={styles.orders}>
                        {pendingOrders.map((order) => (
                            <p
                                key={order.number}
                                className="text text_type_digits-default"
                            >
                                {order.number}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <p className="text text_type_main-medium">Выполнено за все время:</p>
                <p className={`text text_type_digits-large ${styles.totalShadow}`}>{total}</p>
            </div>
            <div>
                <p className="text text_type_main-medium">Выполнено за сегодня:</p>
                <p className={`text text_type_digits-large ${styles.totalShadow}`}>{totalToday}</p>
            </div>
        </div>
    );
};

export default OrdersStatus;
