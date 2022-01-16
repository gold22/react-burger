import React from 'react';
import styles from './form.module.css';

type TFormProps = {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const Form: React.FC<TFormProps> = ({ children, onSubmit }) => (
    <form
        className={styles.main}
        onSubmit={onSubmit}
    >
        {children}
    </form>
);

export default Form;
