import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderContext } from '../../services/order-context';
import styles from './constructor-elements.module.css';

const ConstructorElements = () => {
    const [order] = React.useContext(OrderContext);

    const bun = React.useMemo(
        () => order.getBun(),
        [order],
    );

    return (
        <div className={styles.main}>
            {bun && (
                <div className={`${styles.mainItem} pl-8`} key="top">
                    <ConstructorElement
                        type="top"
                        isLocked
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.imageMobile}
                    />
                </div>
            )}
            <div className={`${styles.optionalItems} custom-scroll`} key="middle">
                {order.ingredients.filter((ingredient) => ingredient.type !== 'bun').map((ingredient) => (
                    <div className={`${styles.optionalItem} custom-scroll pr-1`} key={ingredient.id}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.imageMobile}
                        />
                    </div>
                ))}
            </div>
            {bun && (
                <div className={`${styles.mainItem} pl-8`} key="bottom">
                    <ConstructorElement
                        type="bottom"
                        isLocked
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.imageMobile}
                    />
                </div>
            )}
        </div>
    );
};

export default ConstructorElements;
