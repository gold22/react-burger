import React from 'react';
import styles from './modal-overlay.module.css';

type TModalOverlayProps = {
    onClick: () => void;
};

const ModalOverlay: React.FC<TModalOverlayProps> = ({ children, onClick }) => {
    const handleOnClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
        onClick();
        event.stopPropagation();
    };
    return (
        <div className={styles.main} onClick={handleOnClick}>
            {children}
        </div>
    );
};

export default ModalOverlay;
