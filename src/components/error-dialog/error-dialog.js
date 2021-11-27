import PropTypes from "prop-types";
import React from 'react';
import Modal from '../modal/modal';

const ErrorDialog = ({ message, onClose }) => {
    if (null === message) {
        return null;
    }
    return (
        <Modal title="Ошибка!" visible={true} onClose={onClose}>
            <p className="text text_type_main-medium text_color_error mt-4">{message}</p>
        </Modal>
    );
};

ErrorDialog.propTypes = {
    message: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};

export default ErrorDialog;
