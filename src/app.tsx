import React from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { ingredients, orderIngredients } from './utils/data';
import styles from './app.module.css';

class App extends React.Component {
    render() {
        return (
            <main>
                <AppHeader />
                <div className={styles.panels}>
                    <BurgerIngredients ingredients={ingredients} />
                    <BurgerConstructor ingredients={orderIngredients} />
                </div>
            </main>
        );
    }
}

export default App;
