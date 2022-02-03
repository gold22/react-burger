import React from 'react';
import DialogPage from '../../components/dialog-page/dialog-page';
import ErrorMessage from '../../components/error-message/error-message';
import OrderCards from '../../components/order-cards/order-cards';
import OrdersStatus from '../../components/orders-status/orders-status';
import { useDispatch, useSelector } from '../../services/hooks';
import { closeOrdersListConnection, openOrdersListConnection } from '../../services/actions/orders-list';
import styles from './orders-page.module.css';

const OrdersPage = () => {
    const { connectionError, orders } = useSelector((state) => state.ordersList);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(openOrdersListConnection());
        return () => { dispatch(closeOrdersListConnection()); };
    }, [dispatch]);

    if (connectionError) {
        return (
            <main>
                <DialogPage>
                    <ErrorMessage message={connectionError} />
                </DialogPage>
            </main>
        );
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <p className="text text_type_main-large">Лента заказов</p>
                <div className={styles.content}>
                    <div className={styles.list}>
                        <OrderCards orders={orders} />
                    </div>
                    <div className={styles.status}>
                        <OrdersStatus />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
