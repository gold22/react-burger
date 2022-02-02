import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TOrder } from '../../services/types';
import { TApiOrderStatus } from '../../services/types/api';
import { localizeDate, localizeStatus } from '../../utils/orders';
import {
    getGroupedIngredientsPrice,
    groupIngredients,
} from '../../utils/ingredients';
import { useSelector } from '../../services/hooks';
import styles from './order-info.module.css';

type TOrderInfoProps = {
    order: TOrder;
};

const OrderInfo: React.FC<TOrderInfoProps> = ({ order }) => {
    const { ingredients } = useSelector((state) => state.ingredientsList);

    const orderIngredients = React.useMemo(
        () => groupIngredients(order.ingredients, ingredients),
        [order.ingredients, ingredients],
    );
    const orderPrice = React.useMemo(
        () => getGroupedIngredientsPrice(orderIngredients),
        [orderIngredients],
    );

    const statusClass = TApiOrderStatus.Done === order.status
        ? 'text text_type_main-default mt-2 text_color_success'
        : 'text text_type_main-default mt-2';
    return (
        <div className={styles.main}>
            <p className="text text_type_main-medium">{order.name}</p>
            <p className={statusClass}>{localizeStatus(order.status)}</p>
            <p className="text text_type_main-medium mt-15 mb-6">Состав:</p>
            <div className={`${styles.ingredients} custom-scroll`}>
                {orderIngredients.map((item) => (
                    <div
                        key={item.ingredient.id}
                        className={styles.ingredient}
                    >
                        <div className={styles.label}>
                            <div className={styles.icon}>
                                <img src={item.ingredient.imageMobile} alt={item.ingredient.name} />
                            </div>
                            <p className="text text_type_main-default">{item.ingredient.name}</p>
                        </div>
                        <div className={styles.price}>
                            <p
                                className="text text_type_digits-default mr-2"
                            >
                                {`${item.count} x ${item.ingredient.price}`}
                            </p>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.footer}>
                <p className="text text_type_main-default text_color_inactive">{localizeDate(order.createdAt)}</p>
                <div className={styles.price}>
                    <p className="text text_type_digits-default mr-2">{orderPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
};

export default OrderInfo;
