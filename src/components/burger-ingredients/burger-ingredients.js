import PropTypes from 'prop-types';
import React from 'react';
import IngredientCards from '../ingredient-cards/ingredient-cards';
import IngredientTabs from '../ingredient-tabs/ingredient-tabs';
import { ingredientType } from '../../utils/types';
import styles from './burger-ingredients.module.css';

class BurgerIngredients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'bun',
        }
        this.setType = this.setType.bind(this);
        this.cards = {
            bun: React.createRef(),
            sauce: React.createRef(),
            main: React.createRef(),
        }
    }

    setType(type) {
        this.cards[type].current.scrollIntoView({ behavior: 'smooth' });
        this.setState(() => ({
            type,
        }));
    }

    render() {
        return (
            <section className={styles.main}>
                <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
                <IngredientTabs value={this.state.type} onClick={this.setType} />
                <div className={`${styles.cards} mt-10 custom-scroll`}>
                    <IngredientCards
                        title="Булки"
                        ingredients={this.props.ingredients.filter(ingredient => 'bun' === ingredient.type)}
                        innerRef={this.cards.bun}
                    />
                    <IngredientCards
                        title="Соусы"
                        ingredients={this.props.ingredients.filter(ingredient => 'sauce' === ingredient.type)}
                        innerRef={this.cards.sauce}
                    />
                    <IngredientCards
                        title="Начинка"
                        ingredients={this.props.ingredients.filter(ingredient => 'main' === ingredient.type)}
                        innerRef={this.cards.main}
                    />
                </div>
            </section>
        );
    }
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

export default BurgerIngredients;