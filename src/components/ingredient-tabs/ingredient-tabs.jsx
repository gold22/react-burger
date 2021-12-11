import PropTypes from 'prop-types';
import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { INGREDIENT_TYPE_BUN, INGREDIENT_TYPE_SAUCE, INGREDIENT_TYPE_MAIN } from '../../utils/ingredients';
import styles from './ingredient-tabs.module.css';

const IngredientTabs = ({ value, onChange }) => (
    <div className={styles.main}>
        <Tab value="bun" active={value === INGREDIENT_TYPE_BUN} onClick={onChange}>
            Булки
        </Tab>
        <Tab value="sauce" active={value === INGREDIENT_TYPE_SAUCE} onClick={onChange}>
            Соусы
        </Tab>
        <Tab value="main" active={value === INGREDIENT_TYPE_MAIN} onClick={onChange}>
            Начинка
        </Tab>
    </div>
);

IngredientTabs.propTypes = {
    value: PropTypes.oneOf([
        INGREDIENT_TYPE_BUN,
        INGREDIENT_TYPE_SAUCE,
        INGREDIENT_TYPE_MAIN,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default IngredientTabs;
