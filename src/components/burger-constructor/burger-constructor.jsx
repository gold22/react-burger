import React from 'react';
import { useSelector } from 'react-redux';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorElements from '../constructor-elements/constructor-elements';
import ErrorDialog from '../error-dialog/error-dialog';
import OrderDetails from '../order-details/order-details';
import Order from '../../model/order';
import { ApiContext } from '../../services/api-context';
import { OrderContext } from '../../services/order-context';
import { getPrice } from '../../utils/consctructor';
import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {
    const [showDetails, setShowDetails] = React.useState(false);
    const [orderCreationState, setOrderCreationState] = React.useState({
        isCreating: false,
        loadError: null,
    });
    const { bun, ingredients } = useSelector((state) => state.burgerConstructor);
    const apiClient = React.useContext(ApiContext);
    const [order, setOrder] = React.useContext(OrderContext);

    const handleOrderCreation = async () => {
        if (orderCreationState.isCreating) {
            // avoid redundant requests over double mouse clicks
            return;
        }
        setOrderCreationState({ isCreating: true, loadError: null });
        try {
            const result = await apiClient.createOrder(order);
            setOrder((prev) => new Order({
                ...prev,
                name: result.name,
                number: result.order.number,
            }));
            setOrderCreationState({ isCreating: false, loadError: null });
            setShowDetails(true);
        } catch (error) {
            setOrderCreationState({ isCreating: false, loadError: error.message });
        }
    };

    const orderPrice = React.useMemo(
        () => getPrice(bun, ingredients),
        [bun, ingredients],
    );

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

                <OrderDetails visible={showDetails} onClose={() => { setShowDetails(false); }} />
                <ErrorDialog
                    message={orderCreationState.error}
                    onClose={() => {
                        setOrderCreationState({ isCreating: false, loadError: null });
                    }}
                />
            </div>
        </section>
    );
};

export default BurgerConstructor;
