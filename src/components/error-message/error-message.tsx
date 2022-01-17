import React from 'react';
import { InfoIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './error-message.module.css';

type TErrorMessageProps = {
    message: string;
};

const ErrorMessage: React.FC<TErrorMessageProps> = ({ message }) => (
    <div className={styles.main}>
        <InfoIcon type="error" />
        <p className="text text_type_main-default text_color_error ml-2">{message}</p>
    </div>
);

export default ErrorMessage;
