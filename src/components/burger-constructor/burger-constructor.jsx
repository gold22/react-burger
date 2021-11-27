import React from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorElements from '../constructor-elements/constructor-elements';
import OrderDetails from '../order-details/order-details';
import Order from '../../model/order';
import { ApiContext } from '../../services/api-context';
import { OrderContext } from '../../services/order-context';
import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {
    const [showDetails, setShowDetails] = React.useState(false);
    const [orderCreation, setOrderCreation] = React.useState({
        creating: false,
        error: undefined,
    });
    const apiClient = React.useContext(ApiContext);
    const [order, setOrder] = React.useContext(OrderContext);

    const handleOrderCreation = async () => {
        if (orderCreation.creating) {
            // avoid redundant requests over double mouse clicks
            return;
        }
        setOrderCreation({creating: true, error: undefined});
        try {
            const result = await apiClient.createOrder(order);
            setOrder((prev) => new Order({
                ...prev,
                name: result.name,
                number: result.order.number,
            }));
            setOrderCreation({creating: false, error: undefined});
            setShowDetails(true);
        } catch (error) {
            setOrderCreation({creating: false, error: error.message});
        }
    };

    const total = React.useMemo(
        () => order.getTotal(),
        [order]
    );

    return (
        <section className={`${styles.main} pt-25 pl-4`}>
            <ConstructorElements />
            <div className={`${styles.submit} pt-10 pr-8`}>
                <div className={styles.total}>
                    <p className="text text_type_digits-medium">{total}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={handleOrderCreation}>
                    Оформить заказ
                </Button>

                <OrderDetails visible={showDetails} onClose={() => { setShowDetails(false); }} />
            </div>
        </section>
    );
};

export default BurgerConstructor;
