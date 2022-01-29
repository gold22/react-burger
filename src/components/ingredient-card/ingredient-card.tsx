import React from 'react';
import { generatePath, useHistory, useLocation } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/hooks';
import { getIngredientCount } from '../../utils/ingredients';
import { TIngredient, TIngredientDragItem, TLocationState } from '../../services/types';
import styles from './ingredient-card.module.css';

type TIngredientCardProps = {
    ingredient: TIngredient;
};

const IngredientCard: React.FC<TIngredientCardProps> = ({ ingredient }) => {
    const count = useSelector((state) => getIngredientCount(
        ingredient.id, state.burgerConstructor.ingredients,
    ));
    const location = useLocation();
    const history = useHistory<TLocationState>();

    const [, dragRef] = useDrag<TIngredientDragItem, unknown, unknown>({
        type: 'ingredient',
        item: { ingredient },
    });

    const handleShowDetails = () => {
        history.push({
            pathname: generatePath('/ingredients/:id', { id: ingredient.id }),
            state: { background: location },
        });
    };

    const { image, name, price } = ingredient;
    return (
        <div
            className={styles.main}
            onClick={handleShowDetails}
            ref={dragRef}
        >
            {count > 0 && (
                <Counter count={count} size="default" />
            )}
            <img className="ml-4 mr-4" src={image} alt={name} />
            <div className={`mt-1 mb-1 ${styles.price}`}>
                <p className="text text_type_digits-default mr-2">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`text text_type_main-default ${styles.name}`}>{name}</p>
        </div>
    );
};

export default IngredientCard;
