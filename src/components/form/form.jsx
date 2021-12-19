import React from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.css';

const Form = ({ children, onSubmit }) => (
    <form
        className={styles.main}
        onSubmit={onSubmit}
    >
        {children}
    </form>
);

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.bool,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.bool])),
    ]).isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
