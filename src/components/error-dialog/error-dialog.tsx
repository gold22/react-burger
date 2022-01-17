import React from 'react';
import Modal from '../modal/modal';

type TErrorDialogProps = {
    visible: boolean;
    message?: string;
    onClose: () => void;
};

const ErrorDialog: React.FC<TErrorDialogProps> = ({ visible, message, onClose }) => {
    if (!visible) {
        return null;
    }
    return (
        <Modal title="Ошибка!" visible onClose={onClose}>
            <p className="text text_type_main-medium text_color_error mt-4">{message}</p>
        </Modal>
    );
};

export default ErrorDialog;
