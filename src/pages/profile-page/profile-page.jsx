import React from 'react';
import ProfileMenu from '../../components/profile-menu/profile-menu';
import ProfileForm from '../../components/profile-form/profile-form';
import styles from './profile-page.module.css';

const ProfilePage = () => (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.menu}>
                <ProfileMenu />
            </div>
            <div className={styles.form}>
                <ProfileForm />
            </div>
            <div className={styles.space} />
        </div>
    </div>
);

export default ProfilePage;
