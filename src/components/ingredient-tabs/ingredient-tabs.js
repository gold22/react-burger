import PropTypes from 'prop-types';
import React from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-tabs.module.css';

class IngredientTabs extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <Tab value="bun" active={'bun' === this.props.value} onClick={this.props.onClick}>
                    Булки
                </Tab>
                <Tab value="sauce" active={'sauce' === this.props.value} onClick={this.props.onClick}>
                    Соусы
                </Tab>
                <Tab value="main" active={'main' === this.props.value} onClick={this.props.onClick}>
                    Начинка
                </Tab>
            </div>
        );
    }
}

IngredientTabs.propTypes = {
    value: PropTypes.oneOf(['bun', 'sauce', 'main']).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default IngredientTabs;