import PropTypes from 'prop-types';
import React from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-tabs.module.css';

const IngredientTabs = ({ value, onClick }) => {
    return (
        <div className={styles.main}>
            <Tab value="bun" active={'bun' === value} onClick={onClick}>
                Булки
            </Tab>
            <Tab value="sauce" active={'sauce' === value} onClick={onClick}>
                Соусы
            </Tab>
            <Tab value="main" active={'main' === value} onClick={onClick}>
                Начинка
            </Tab>
        </div>
    );
};

IngredientTabs.propTypes = {
    value: PropTypes.oneOf(['bun', 'sauce', 'main']).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default IngredientTabs;
