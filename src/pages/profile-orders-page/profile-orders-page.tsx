import React from 'react';
import ProfileMenu from '../../components/profile-menu/profile-menu';
import styles from './profile-orders-page.module.css';

const ProfileOrdersPage = () => (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.menu}>
                <ProfileMenu />

                <p className="text text_type_main-default text_color_inactive mt-20">
                    В этом разделе вы можете просмотреть свою историю заказов
                </p>
            </div>
            <div className={styles.orders} />
        </div>
    </div>
);

export default ProfileOrdersPage;
