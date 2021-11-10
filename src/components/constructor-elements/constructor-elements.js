import PropTypes from 'prop-types';
import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import styles from './constructor-elements.module.css';

class ConstructorElements extends React.Component {

    render() {
        return (
            <div className={styles.main}>
                {0 < this.props.ingredients.length &&
                    <div className="pl-8" key="top">
                        <ConstructorElement
                            type="top"
                            isLocked
                            text={this.props.ingredients[0].name}
                            price={this.props.ingredients[0].price}
                            thumbnail={this.props.ingredients[0].image_mobile}
                        />
                    </div>
                }
                <div className={styles.optionalItems} key="middle">
                    {this.props.ingredients.slice(1).map(ingredient => (
                        <div className={styles.optionalItem} key={ingredient._id}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image_mobile}
                            />
                        </div>
                    ))}
                </div>
                {0 < this.props.ingredients.length &&
                    <div className="pl-8" key="bottom">
                        <ConstructorElement
                            type="bottom"
                            isLocked
                            text={this.props.ingredients[0].name}
                            price={this.props.ingredients[0].price}
                            thumbnail={this.props.ingredients[0].image_mobile}
                        />
                    </div>
                }
            </div>
        );
    }
}

ConstructorElements.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

export default ConstructorElements;