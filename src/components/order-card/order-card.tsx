import React from 'react';
import { generatePath, useHistory, useLocation } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { v4 as uuid } from 'uuid';
import { TLocationState, TOrder } from '../../services/types';
import { TApiOrderStatus } from '../../services/types/api';
import { useSelector } from '../../services/hooks';
import {
    getIngredients,
    getIngredientsPrice,
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
        () => getIngredients(order.ingredients, ingredients)
            .map((ingredient) => ({ ...ingredient, uuid: uuid() })),
        [order.ingredients, ingredients],
    );
    const orderPrice = React.useMemo(
        () => getIngredientsPrice(orderIngredients),
        [orderIngredients],
    );

    const maxIngredientsCount = 5;
    const restIngredientsCount = orderIngredients.length - maxIngredientsCount;
    const displayedIngredients = React.useMemo(
        () => orderIngredients.slice(0, maxIngredientsCount + 1).reverse(),
        [orderIngredients],
    );

    const handleShowInfo = () => {
        history.push({
            pathname: generatePath(`${location.pathname}/:id`, { id: order.number }),
            state: { background: location },
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
                    {displayedIngredients.map((ingredient, index) => (
                        <div
                            key={ingredient.uuid}
                            className={styles.icon}
                            style={{
                                left: 48 * (displayedIngredients.length - index - 1),
                            }}
                        >
                            <img
                                src={ingredient.imageMobile}
                                alt={ingredient.name}
                                style={{
                                    opacity: (index === 0 && restIngredientsCount > 0) ? 0.6 : 1,
                                }}
                            />
                            {index === 0 && restIngredientsCount > 0 ? (
                                <p className="text text_type_main-default">{`+${restIngredientsCount}`}</p>
                            ) : null}
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
