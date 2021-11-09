import PropTypes from 'prop-types';
import React from 'react';
import IngredientCard from "../ingredient-card/ingredient-card";
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
    }

    setType(type) {
        this.setState(() => ({
            type,
        }));
    }

    render() {
        return (
            <section>
                <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
                <IngredientTabs value={this.state.type} onClick={this.setType} />
                <div className="mt-10">
                    <p className="text text_type_main-medium">Булки</p>
                    <div className={styles.cards}>
                        {this.props.ingredients.filter(ingredient => 'bun' === ingredient.type).map(ingredient => (
                            <IngredientCard
                                key={ingredient._id}
                                ingredient={ingredient}
                                count={1}
                            />
                        ))}
                    </div>
                    <p className="text text_type_main-medium">Соусы</p>
                    <div className={styles.cards}>
                        {this.props.ingredients.filter(ingredient => 'sauce' === ingredient.type).map(ingredient => (
                            <IngredientCard
                                key={ingredient._id}
                                ingredient={ingredient}
                            />
                        ))}
                    </div>
                    <p className="text text_type_main-medium">Начинка</p>
                    <div className={styles.cards}>
                        {this.props.ingredients.filter(ingredient => 'main' === ingredient.type).map(ingredient => (
                            <IngredientCard
                                key={ingredient._id}
                                ingredient={ingredient}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

export default BurgerIngredients;
