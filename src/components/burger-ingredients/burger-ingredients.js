import PropTypes from 'prop-types';
import React from 'react';
import IngredientCards from '../ingredient-cards/ingredient-cards';
import IngredientTabs from '../ingredient-tabs/ingredient-tabs';
import { ingredientType } from '../../utils/types';
import styles from './burger-ingredients.module.css';

const BurgerIngredients = ({ ingredients }) => {
    const [state, setState] = React.useState({
        type: 'bun',
    });
    const cards = {
        bun: React.useRef(),
        sauce: React.useRef(),
        main: React.useRef(),
    };

    const setType = (type) => {
        cards[type].current.scrollIntoView({ behavior: 'smooth' });
        setState({
            type,
        });
    }

    return (
        <section className={styles.main}>
            <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
            <IngredientTabs value={state.type} onClick={setType} />
            <div className={`${styles.cards} mt-10 custom-scroll`}>
                <IngredientCards
                    title="Булки"
                    ingredients={ingredients.filter(ingredient => 'bun' === ingredient.type)}
                    ref={cards.bun}
                />
                <IngredientCards
                    title="Соусы"
                    ingredients={ingredients.filter(ingredient => 'sauce' === ingredient.type)}
                    ref={cards.sauce}
                />
                <IngredientCards
                    title="Начинка"
                    ingredients={ingredients.filter(ingredient => 'main' === ingredient.type)}
                    ref={cards.main}
                />
            </div>
        </section>
    );
};

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

export default BurgerIngredients;
