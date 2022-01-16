import React from 'react';
import styles from './dialog-page.module.css';

const DialogPage: React.FC = ({ children }) => (
    <div className={styles.main}>
        {children}
    </div>
);

export default DialogPage;
