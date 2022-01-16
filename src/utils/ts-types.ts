export type TIngredient = {
    id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    imageLarge: string;
    imageMobile: string;
};

export type TIngredients = Array<TIngredient>;

export enum IngredientType {
    Bun = 'bun',
    Sauce = 'sauce',
    Main = 'main',
}
