import PropTypes from 'prop-types';
import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Card from "../card/card";
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
                <div className={`${styles.tabs} mb-10`}>
                    <Tab value="bun" active={'bun' === this.state.type} onClick={this.setType}>
                        Булки
                    </Tab>
                    <Tab value="sauce" active={'sauce' === this.state.type} onClick={this.setType}>
                        Соусы
                    </Tab>
                    <Tab value="main" active={'main' === this.state.type} onClick={this.setType}>
                        Начинка
                    </Tab>
                </div>
                <div>
                    <p className="text text_type_main-medium">Булки</p>
                    <div className={styles.cards}>
                        {this.props.ingredients.filter(ingredient => 'bun' === ingredient.type).map(ingredient => (
                            <Card
                                key={ingredient._id}
                                ingredient={ingredient}
                                count={1}
                            />
                        ))}
                    </div>
                    <p className="text text_type_main-medium">Соусы</p>
                    <div className={styles.cards}>
                        {this.props.ingredients.filter(ingredient => 'sauce' === ingredient.type).map(ingredient => (
                            <Card
                                key={ingredient._id}
                                ingredient={ingredient}
                            />
                        ))}
                    </div>
                    <p className="text text_type_main-medium">Начинка</p>
                    <div className={styles.cards}>
                        {this.props.ingredients.filter(ingredient => 'main' === ingredient.type).map(ingredient => (
                            <Card
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
