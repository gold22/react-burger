import React from 'react';
import ProfileMenu from '../../components/profile-menu/profile-menu';
import OrderCards from '../../components/order-cards/order-cards';
import ErrorMessage from '../../components/error-message/error-message';
import { useDispatch, useSelector } from '../../services/hooks';
import { closeUserOrdersListConnection, openUserOrdersListConnection } from '../../services/actions/user-orders-list';
import styles from './profile-orders-page.module.css';

const ProfileOrdersPage = () => {
    const { connectionError, orders } = useSelector((state) => state.userOrdersList);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(openUserOrdersListConnection());
        return () => { dispatch(closeUserOrdersListConnection()); };
    }, [dispatch]);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <ProfileMenu />

                    <p className="text text_type_main-default text_color_inactive mt-20">
                        В этом разделе вы можете просмотреть свою историю заказов
                    </p>
                </div>
                <div className={styles.orders}>
                    {connectionError ? (
                        <ErrorMessage message={connectionError} />
                    ) : (
                        <OrderCards orders={orders} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileOrdersPage;
