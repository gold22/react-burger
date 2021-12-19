import React from 'react';
import ProfileMenu from '../../components/profile-menu/profile-menu';
import ProfileForm from '../../components/profile-form/profile-form';
import styles from './profile-page.module.css';

const ProfilePage = () => (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.menu}>
                <ProfileMenu />

                <p className="text text_type_main-default text_color_inactive mt-20">
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>
            <div className={styles.form}>
                <ProfileForm />
            </div>
            <div className={styles.space} />
        </div>
    </div>
);

export default ProfilePage;
