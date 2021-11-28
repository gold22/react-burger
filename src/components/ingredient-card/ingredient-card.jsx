import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { OrderContext } from '../../services/order-context';
import { ingredientType } from '../../utils/types';
import styles from './ingredient-card.module.css';

const IngredientCard = ({ ingredient }) => {
    const [showDetails, setShowDetails] = React.useState(false);
    const [order] = React.useContext(OrderContext);

    const count = React.useMemo(
        () => order.getIngredientCount(ingredient._id),
        [order, ingredient._id]
    );

    const { image, name, price } = ingredient;
    return (
        <div
            className={styles.main}
            onClick={() => { setShowDetails(true); }}
        >
            {0 < count &&
                <Counter count={count} size="default" />
            }
            <img className="ml-4 mr-4" src={image} alt={name} />
            <div className={`mt-1 mb-1 ${styles.price}`}>
                <p className="text text_type_digits-default mr-2">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`text text_type_main-default ${styles.name}`}>{name}</p>

            <IngredientDetails
                ingredient={ingredient}
                visible={showDetails}
                onClose={() => { setShowDetails(false); }}
            />
        </div>
    );
};

IngredientCard.propTypes = {
    ingredient: ingredientType.isRequired,
};

IngredientCard.defaultProps = {
    count: 0,
};

export default IngredientCard;
