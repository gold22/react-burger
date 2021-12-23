import React from 'react';
import PropTypes from 'prop-types';
import { InfoIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './error-message.module.css';

const ErrorMessage = ({ message }) => (
    <div className={styles.main}>
        <InfoIcon type="error" />
        <p className="text text_type_main-default text_color_error ml-2">{message}</p>
    </div>
);

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;
