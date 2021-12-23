import React from 'react';
import { useSelector } from 'react-redux';
import IngredientCards from '../ingredient-cards/ingredient-cards';
import IngredientTabs from '../ingredient-tabs/ingredient-tabs';
import {
    INGREDIENT_TYPE_BUN,
    INGREDIENT_TYPE_SAUCE,
    INGREDIENT_TYPE_MAIN,
    isBun,
    isSauce,
    isMain,
} from '../../utils/ingredients';
import styles from './burger-ingredients.module.css';

const BurgerIngredients = () => {
    const [currentTab, setCurrentTab] = React.useState(INGREDIENT_TYPE_BUN);
    const { ingredients } = useSelector((state) => state.ingredientsList);
    const categories = {
        bun: React.useRef(),
        sauce: React.useRef(),
        main: React.useRef(),
    };

    const handleTabChange = (value) => {
        categories[value].current.scrollIntoView({ behavior: 'smooth' });
        setCurrentTab(value);
    };
    const handleScroll = (e) => {
        const { scrollTop } = e.target;
        const bunOffset = scrollTop;
        const sauceOffset = Math.abs(
            categories.sauce.current.offsetTop - categories.bun.current.offsetTop - scrollTop,
        );
        const mainOffset = Math.abs(
            categories.main.current.offsetTop - categories.bun.current.offsetTop - scrollTop,
        );
        const minOffset = Math.min(bunOffset, sauceOffset, mainOffset);
        if (minOffset === bunOffset && currentTab !== INGREDIENT_TYPE_BUN) {
            setCurrentTab(INGREDIENT_TYPE_BUN);
        } else if (minOffset === sauceOffset && currentTab !== INGREDIENT_TYPE_SAUCE) {
            setCurrentTab(INGREDIENT_TYPE_SAUCE);
        } else if (minOffset === mainOffset && currentTab !== INGREDIENT_TYPE_MAIN) {
            setCurrentTab(INGREDIENT_TYPE_MAIN);
        }
    };

    const buns = React.useMemo(
        () => ingredients.filter((ingredient) => isBun(ingredient)),
        [ingredients],
    );
    const sauces = React.useMemo(
        () => ingredients.filter((ingredient) => isSauce(ingredient)),
        [ingredients],
    );
    const mains = React.useMemo(
        () => ingredients.filter((ingredient) => isMain(ingredient)),
        [ingredients],
    );

    return (
        <section className={styles.main}>
            <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
            <IngredientTabs value={currentTab} onChange={handleTabChange} />
            <div className={`${styles.cards} mt-10 custom-scroll`} onScroll={handleScroll}>
                <IngredientCards
                    title="Булки"
                    ingredients={buns}
                    ref={categories.bun}
                />
                <IngredientCards
                    title="Соусы"
                    ingredients={sauces}
                    ref={categories.sauce}
                />
                <IngredientCards
                    title="Начинка"
                    ingredients={mains}
                    ref={categories.main}
                />
            </div>
        </section>
    );
};

export default BurgerIngredients;
