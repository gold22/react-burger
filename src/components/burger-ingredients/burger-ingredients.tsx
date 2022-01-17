import React from 'react';
import { useSelector } from 'react-redux';
import IngredientCards from '../ingredient-cards/ingredient-cards';
import IngredientTabs from '../ingredient-tabs/ingredient-tabs';
import { isBun, isSauce, isMain } from '../../utils/ingredients';
import { IngredientType, TIngredient } from '../../utils/types';
import styles from './burger-ingredients.module.css';

const BurgerIngredients = () => {
    const [currentTab, setCurrentTab] = React.useState<IngredientType>(IngredientType.Bun);
    const { ingredients } = useSelector((state: any) => state.ingredientsList);
    const categories = {
        bun: React.useRef<HTMLDivElement>(null!),
        sauce: React.useRef<HTMLDivElement>(null!),
        main: React.useRef<HTMLDivElement>(null!),
    };

    const handleTabChange = (value: IngredientType): void => {
        categories[value].current.scrollIntoView({ behavior: 'smooth' });
        setCurrentTab(value);
    };
    const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
        const { scrollTop } = e.target as HTMLElement;
        const bunOffset = scrollTop;
        const sauceOffset = Math.abs(
            categories.sauce.current.offsetTop - categories.bun.current.offsetTop - scrollTop,
        );
        const mainOffset = Math.abs(
            categories.main.current.offsetTop - categories.bun.current.offsetTop - scrollTop,
        );
        const minOffset = Math.min(bunOffset, sauceOffset, mainOffset);
        if (minOffset === bunOffset && currentTab !== IngredientType.Bun) {
            setCurrentTab(IngredientType.Bun);
        } else if (minOffset === sauceOffset && currentTab !== IngredientType.Sauce) {
            setCurrentTab(IngredientType.Sauce);
        } else if (minOffset === mainOffset && currentTab !== IngredientType.Main) {
            setCurrentTab(IngredientType.Main);
        }
    };

    const buns = React.useMemo(
        () => ingredients.filter((ingredient: TIngredient) => isBun(ingredient)),
        [ingredients],
    );
    const sauces = React.useMemo(
        () => ingredients.filter((ingredient: TIngredient) => isSauce(ingredient)),
        [ingredients],
    );
    const mains = React.useMemo(
        () => ingredients.filter((ingredient: TIngredient) => isMain(ingredient)),
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
