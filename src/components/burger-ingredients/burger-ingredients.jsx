import PropTypes from 'prop-types';
import React from 'react';
import IngredientCards from '../ingredient-cards/ingredient-cards';
import IngredientTabs from '../ingredient-tabs/ingredient-tabs';
import { ingredientType } from '../../utils/types';
import styles from './burger-ingredients.module.css';

const BurgerIngredients = ({ ingredients }) => {
    const [currentTab, setCurrentTab] = React.useState('bun');
    const categories = {
        bun: React.useRef(),
        sauce: React.useRef(),
        main: React.useRef(),
    };

    const handleTabChange = (value) => {
        categories[value].current.scrollIntoView({ behavior: 'smooth' });
        setCurrentTab(value);
    }

    return (
        <section className={styles.main}>
            <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
            <IngredientTabs value={currentTab} onChange={handleTabChange} />
            <div className={`${styles.cards} mt-10 custom-scroll`}>
                <IngredientCards
                    title="Булки"
                    ingredients={ingredients.filter(ingredient => 'bun' === ingredient.type)}
                    ref={categories.bun}
                />
                <IngredientCards
                    title="Соусы"
                    ingredients={ingredients.filter(ingredient => 'sauce' === ingredient.type)}
                    ref={categories.sauce}
                />
                <IngredientCards
                    title="Начинка"
                    ingredients={ingredients.filter(ingredient => 'main' === ingredient.type)}
                    ref={categories.main}
                />
            </div>
        </section>
    );
};

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

export default BurgerIngredients;
