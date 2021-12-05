import PropTypes from 'prop-types';
import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-tabs.module.css';

const IngredientTabs = ({ value, onChange }) => (
    <div className={styles.main}>
        <Tab value="bun" active={value === 'bun'} onClick={onChange}>
            Булки
        </Tab>
        <Tab value="sauce" active={value === 'sauce'} onClick={onChange}>
            Соусы
        </Tab>
        <Tab value="main" active={value === 'main'} onClick={onChange}>
            Начинка
        </Tab>
    </div>
);

IngredientTabs.propTypes = {
    value: PropTypes.oneOf(['bun', 'sauce', 'main']).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default IngredientTabs;
