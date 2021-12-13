import PropTypes from 'prop-types';
import React from 'react';
import styles from './modal-overlay.module.css';

const ModalOverlay = ({ children, onClick }) => (
    <div className={styles.main} onClick={onClick}>
        {children}
    </div>
);

ModalOverlay.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
