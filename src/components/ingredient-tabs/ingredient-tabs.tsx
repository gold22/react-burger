import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientType } from '../../utils/ts-types';
import styles from './ingredient-tabs.module.css';

type TIngredientTabsProps = {
    value: IngredientType;
    onChange: (value: IngredientType) => void;
};

const IngredientTabs: React.FC<TIngredientTabsProps> = ({ value, onChange }) => {
    const handleOnClick = (tab: string) => onChange(tab as IngredientType);
    return (
        <div className={styles.main}>
            <Tab
                value={IngredientType.Bun}
                active={value === IngredientType.Bun}
                onClick={handleOnClick}
            >
                Булки
            </Tab>
            <Tab
                value={IngredientType.Sauce}
                active={value === IngredientType.Sauce}
                onClick={handleOnClick}
            >
                Соусы
            </Tab>
            <Tab
                value={IngredientType.Main}
                active={value === IngredientType.Main}
                onClick={handleOnClick}
            >
                Начинка
            </Tab>
        </div>
    );
};

export default IngredientTabs;
