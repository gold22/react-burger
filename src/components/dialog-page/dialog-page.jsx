import React from 'react';
import PropTypes from 'prop-types';
import styles from './dialog-page.module.css';

const DialogPage = ({ children }) => (
    <div className={styles.main}>
        {children}
    </div>
);

DialogPage.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
};

export default DialogPage;
