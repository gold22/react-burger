import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorElements from '../constructor-elements/constructor-elements';
import ErrorDialog from '../error-dialog/error-dialog';
import OrderDetails from '../order-details/order-details';
import { getIngredientsPrice } from '../../utils/ingredients';
import { createOrder } from '../../services/actions/order';
import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {
    const [showDetails, setShowDetails] = React.useState(false);
    const orderPrice = useSelector((state) => getIngredientsPrice(
        state.burgerConstructor.ingredients,
    ));
    const { order } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleOrderCreation = () => {
        if (order.isCreating) {
            // avoid redundant requests over double mouse clicks
            return;
        }
        dispatch(createOrder());
        setShowDetails(true);
    };

    return (
        <section className={`${styles.main} pt-25 pl-4`}>
            <ConstructorElements />
            <div className={`${styles.submit} pt-10 pr-8`}>
                <div className={styles.total}>
                    <p className="text text_type_digits-medium">{orderPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={handleOrderCreation}>
                    Оформить заказ
                </Button>

                <OrderDetails
                    visible={showDetails && !order.isCreating && !order.creationError}
                    onClose={() => { setShowDetails(false); }}
                />
                <ErrorDialog
                    visible={showDetails && !order.isCreating && !!order.creationError}
                    message={order.creationError}
                    onClose={() => { setShowDetails(false); }}
                />
            </div>
        </section>
    );
};

export default BurgerConstructor;
