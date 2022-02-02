import React from 'react';
import { generatePath, useHistory, useLocation } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TLocationState, TOrder } from '../../services/types';
import { TApiOrderStatus } from '../../services/types/api';
import { useSelector } from '../../services/hooks';
import {
    getGroupedIngredientsPrice,
    groupIngredients,
} from '../../utils/ingredients';
import { localizeDate, localizeStatus } from '../../utils/orders';
import styles from './order-card.module.css';

type TOrderCardProps = {
    order: TOrder;
    showStatus: boolean;
};

const OrderCard: React.FC<TOrderCardProps> = ({ order, showStatus }) => {
    const { ingredients } = useSelector((state) => state.ingredientsList);
    const location = useLocation();
    const history = useHistory<TLocationState>();

    const orderIngredients = React.useMemo(
        () => groupIngredients(order.ingredients, ingredients),
        [order.ingredients, ingredients],
    );
    const orderPrice = React.useMemo(
        () => getGroupedIngredientsPrice(orderIngredients),
        [orderIngredients],
    );

    const handleShowInfo = () => {
        history.push({
            pathname: generatePath(`${location.pathname}/:id`, { id: order.number }),
            // state: { background: location },
        });
    };

    const statusClass = TApiOrderStatus.Done === order.status
        ? 'text text_type_main-default mt-2 text_color_success'
        : 'text text_type_main-default mt-2';
    return (
        <div
            className={styles.card}
            onClick={handleShowInfo}
        >
            <div className={styles.header}>
                <p className="text text_type_digits-default">{`#${order.number}`}</p>
                <p className="text text_type_main-default text_color_inactive">{localizeDate(order.createdAt)}</p>
            </div>
            <div>
                <p className="text text_type_main-medium">{order.name}</p>
                {showStatus && (
                    <p className={statusClass}>{localizeStatus(order.status)}</p>
                )}
            </div>
            <div className={styles.footer}>
                <div className={styles.icons}>
                    {orderIngredients.reverse().map((item, index) => (
                        <div
                            key={item.ingredient.id}
                            className={styles.icon}
                            style={{
                                left: 48 * (orderIngredients.length - index - 1),
                            }}
                        >
                            <img src={item.ingredient.imageMobile} alt={item.ingredient.name} />
                        </div>
                    ))}
                </div>
                <div className={styles.price}>
                    <p className="text text_type_digits-default mr-2">{orderPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
