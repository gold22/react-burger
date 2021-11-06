import React from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';

class App extends React.Component {
    render() {
        return (
            <main>
                <AppHeader />
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        );
    }
}

export default App;
