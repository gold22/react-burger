import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { ingredients, orderIngredients } from '../../utils/data';
import styles from './app.module.css';

const App = () => {
    return (
        <main>
            <AppHeader />
            <div className={styles.panels}>
                <BurgerIngredients ingredients={ingredients} />
                <BurgerConstructor ingredients={orderIngredients} />
            </div>
        </main>
    );
};

export default App;
