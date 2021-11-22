import PropTypes from "prop-types";
import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';

const Modal = ({ title, visible, children, onClose }) => {
    React.useEffect(() => {
        if (!visible) {
            return null;
        }
        const handleKeyDown = (event) => {
            if ('Escape' === event.key) {
                onClose();
            }
        }
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [visible, onClose]);

    if (!visible) {
        return null;
    }

    const handleCloseClick = (event) => {
        onClose();
        event.stopPropagation();
    };
    const handleModalClick = (event) => {
        event.stopPropagation();
    };
    return ReactDOM.createPortal(
        <ModalOverlay onClick={handleCloseClick}>
            <div className={`${styles.main} pl-10 pt-10 pr-10 pb-15`} onClick={handleModalClick}>
                <div className={styles.title}>
                    <p className="text text_type_main-large">{title}</p>
                    <div className={styles.closeArea}>
                        <div className={styles.closeIcon}>
                            <CloseIcon type="primary" onClick={handleCloseClick} />
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </ModalOverlay>,
        document.getElementById('modal')
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
