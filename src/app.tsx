import React from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { ingredients } from './utils/data';

class App extends React.Component {
    render() {
        return (
            <main>
                <AppHeader />
                <BurgerIngredients ingredients={ingredients} />
                <BurgerConstructor />
            </main>
        );
    }
}

export default App;
