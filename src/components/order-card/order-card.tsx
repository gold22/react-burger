import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TOrder } from '../../services/types';
import { useSelector } from '../../services/hooks';
import { getIngredients, getIngredientsPrice } from '../../utils/ingredients';
import { ucFirst } from '../../utils/string';
import styles from './order-card.module.css';

type TOrderCardProps = {
    order: TOrder;
};

const localizeDate = (date: Date) => {
    const diff = (new Date()).getTime() - date.getTime();
    const rtf = new Intl.RelativeTimeFormat('ru', { numeric: 'auto' });
    const days = ucFirst(rtf.format(-Math.floor(diff / (1000 * 60 * 60 * 24)), 'day'));
    const dtf = new Intl.DateTimeFormat('ru', { hour: 'numeric', minute: 'numeric', timeZoneName: 'short' });
    const time = dtf.format(date);
    return `${days}, ${time}`;
};

const OrderCard: React.FC<TOrderCardProps> = ({ order }) => {
    const { ingredients } = useSelector((state) => state.ingredientsList);

    const orderIngredients = React.useMemo(
        () => getIngredients(order.ingredients, ingredients),
        [order.ingredients, ingredients],
    );
    const orderPrice = React.useMemo(
        () => getIngredientsPrice(orderIngredients),
        [orderIngredients],
    );

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <p className="text text_type_digits-default">{`#${order.number}`}</p>
                <p className="text text_type_main-default text_color_inactive">{localizeDate(order.createdAt)}</p>
            </div>
            <p className="text text_type_main-medium">{order.name}</p>
            <div className={styles.footer}>
                <div className={styles.icons}>
                    {orderIngredients.reverse().map((ingredient, index) => (
                        <div
                            key={ingredient.id}
                            className={styles.icon}
                            style={{
                                left: 48 * (orderIngredients.length - index - 1),
                            }}
                        >
                            <img src={ingredient.imageMobile} alt={ingredient.name} />
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
