import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../modal/modal';

const ErrorDialog = ({ visible, message, onClose }) => {
    if (!visible) {
        return null;
    }
    return (
        <Modal title="Ошибка!" visible onClose={onClose}>
            <p className="text text_type_main-medium text_color_error mt-4">{message}</p>
        </Modal>
    );
};

ErrorDialog.propTypes = {
    visible: PropTypes.bool.isRequired,
    message: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};

ErrorDialog.defaultProps = {
    message: null,
};

export default ErrorDialog;
