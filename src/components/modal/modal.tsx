import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';

type TModalProps = {
    title: string;
    visible: boolean;
    onClose: () => void;
};

const Modal: React.FC<TModalProps> = ({ title, visible, children, onClose }) => {
    React.useEffect(() => {
        if (!visible) {
            return () => {};
        }
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [visible, onClose]);

    if (!visible) {
        return null;
    }

    const container = document.getElementById('modal');
    if (!container) {
        return null;
    }

    const handleCloseClick = () => {
        onClose();
    };
    const handleModalClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
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
        container,
    );
};

export default Modal;
