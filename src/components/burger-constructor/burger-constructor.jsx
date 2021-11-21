import PropTypes from 'prop-types';
import React from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorElements from '../constructor-elements/constructor-elements';
import OrderDetails from '../order-details/order-details';
import { ingredientType } from '../../utils/types';
import styles from './burger-constructor.module.css';

const BurgerConstructor = ({ ingredients }) => {
    const [showDetails, setShowDetails] = React.useState(false);

    const total = React.useMemo(
        () => ingredients.reduce((sum,  ingredient) => sum + ingredient.price, 0),
        [ingredients]
    );

    return (
        <section className={`${styles.main} pt-25 pl-4`}>
            <ConstructorElements ingredients={ingredients} />
            <div className={`${styles.submit} pt-10 pr-8`}>
                <div className={styles.total}>
                    <p className="text text_type_digits-medium">{total}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={() => { setShowDetails(true); }}>
                    Оформить заказ
                </Button>

                <OrderDetails visible={showDetails} onClose={() => { setShowDetails(false); }} />
            </div>
        </section>
    );
};

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

export default BurgerConstructor;
