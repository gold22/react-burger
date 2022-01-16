import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorElements from '../constructor-elements/constructor-elements';
import ErrorDialog from '../error-dialog/error-dialog';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import { getIngredientsPrice, isBun } from '../../utils/ingredients';
import { createOrder } from '../../services/actions/order';
import { removeIngredients, setBun } from '../../services/actions/constructor';
import ApiClient from '../../services/api-client';
import { TIngredientDragItem } from '../../utils/ts-types';
import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {
    const [showDetails, setShowDetails] = React.useState<boolean>(false);
    const { ingredientsCount, orderPrice } = useSelector((state: any) => ({
        ingredientsCount: state.burgerConstructor.ingredients.length,
        orderPrice: getIngredientsPrice(state.burgerConstructor.ingredients),
    }));
    const { order } = useSelector((state: any) => state);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleOrderCreation = () => {
        if (order.isCreating) {
            // avoid redundant requests over double mouse clicks
            return;
        }
        if (!ApiClient.isAuthenticated()) {
            history.replace({ pathname: '/login' });
            return;
        }
        dispatch(createOrder());
        setShowDetails(true);
    };

    const handleOrderClose = () => {
        dispatch(removeIngredients());
        setShowDetails(false);
    };

    const [, dropRef] = useDrop<TIngredientDragItem, unknown, unknown>({
        accept: 'ingredient',
        drop(item) {
            dispatch(setBun(item.ingredient));
        },
        canDrop(item) {
            return typeof item.ingredient !== 'undefined' && isBun(item.ingredient);
        },
    });

    if (ingredientsCount === 0) {
        return (
            <section className={`${styles.main} pt-25 pl-4`}>
                <div className={styles.dropArea} ref={dropRef}>
                    <p className="text text_type_main-default">Начните сборку бургера с переноса булки сюда</p>
                </div>
            </section>
        );
    }

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

                <Modal
                    title="Оформление заказа"
                    visible={showDetails && order.isCreating}
                    onClose={() => {}}
                >
                    <p className="text text_type_main-medium text_color_inactive mt-8 mb-6">Ваш заказ оформляется...</p>
                </Modal>
                <OrderDetails
                    visible={showDetails && !order.isCreating && !order.creationError}
                    onClose={handleOrderClose}
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
