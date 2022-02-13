describe('Constructor page', () => {
    describe('without authentication', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('should be opened by default', () => {
            cy.get('[data-testid="constructor-link"] p').should('have.class', 'text_color_primary');
            cy.contains('Соберите бургер');
        });

        it('should open and close ingredient details dialog', () => {
            cy.get('[data-type="ingredient-card"]').first().as('ingredientCard');
            cy.get('@ingredientCard').find('[data-type="ingredient-name"]').invoke('text').as('ingredientName');
            cy.get('@ingredientCard').click();
            cy.get('[data-testid="modal"]').as('modal');

            cy.get('@modal').contains('Детали ингредиента');
            // eslint-disable-next-line jest/valid-expect-in-promise
            cy.get('@modal').find('[data-type="ingredient-name"]').invoke('text').then((name) => {
                cy.get('@ingredientName').should('equal', name);
            });

            cy.get('@modal').find('[data-type="close-icon"]').click();
            cy.get('@modal').children().should('have.length', 0);
        });

        it('should add ingredients to order', () => {
            cy.get('[data-testid="bun-cards"]').find('[data-type="ingredient-card"]').first().as('bunCard');
            cy.get('[data-testid="sauce-cards"]').find('[data-type="ingredient-card"]').first().as('sauceCard');
            cy.get('[data-testid="main-cards"]').find('[data-type="ingredient-card"]').first().as('mainFirstCard');
            cy.get('[data-testid="main-cards"]').find('[data-type="ingredient-card"]').last().as('mainLastCard');

            cy.get('[data-testid="bun-drop-area"]').as('bunDropArea');
            cy.get('@bunCard').trigger('dragstart');
            cy.get('@bunDropArea').trigger('drop');
            cy.get('[data-type="element-drop-area"]').first().as('bunUpperElement');
            cy.get('[data-type="element-drop-area"]').last().as('bunLowerElement');

            cy.get('@sauceCard').trigger('dragstart');
            cy.get('@bunUpperElement').trigger('drop');
            cy.get('@mainFirstCard').trigger('dragstart');
            cy.get('@bunLowerElement').trigger('drop');
            cy.get('[data-type="element-drop-area"]').eq(2).as('mainFirstCardElement');
            cy.get('@mainLastCard').trigger('dragstart');
            cy.get('@mainFirstCardElement').trigger('drop');

            // eslint-disable-next-line jest/valid-expect-in-promise
            cy.get('@bunCard').find('[data-type="ingredient-name"]').invoke('text').then((name) => {
                cy.get('@bunUpperElement').find('.constructor-element__text').should('have.text', `${name} (верх)`);
                cy.get('@bunLowerElement').find('.constructor-element__text').should('have.text', `${name} (низ)`);
            });
            // eslint-disable-next-line jest/valid-expect-in-promise
            cy.get('@bunCard').find('[data-type="ingredient-price"]').invoke('text').then((price) => {
                cy.get('@bunUpperElement').find('.constructor-element__price').should('have.text', price);
                cy.get('@bunLowerElement').find('.constructor-element__price').should('have.text', price);
            });
            cy.get('@bunCard').find('[data-type="ingredient-counter"]').should('have.text', '2');

            ['sauceCard', 'mainLastCard', 'mainFirstCard'].forEach((card, index) => {
                // eslint-disable-next-line jest/valid-expect-in-promise
                cy.get(`@${card}`).find('[data-type="ingredient-name"]').invoke('text').then((name) => {
                    cy.get('[data-type="element-drop-area"]').eq(index + 1).find('.constructor-element__text').should('have.text', name);
                });
                // eslint-disable-next-line jest/valid-expect-in-promise
                cy.get(`@${card}`).find('[data-type="ingredient-price"]').invoke('text').then((price) => {
                    cy.get('[data-type="element-drop-area"]').eq(index + 1).find('.constructor-element__price').should('have.text', price);
                });
                cy.get(`@${card}`).find('[data-type="ingredient-counter"]').should('have.text', '1');
            });
        });
    });

    describe('with authentication', () => {
        beforeEach(() => {
            cy.login();
        });

        it('should create order', () => {
            cy.intercept('POST', `${Cypress.env('apiUrl')}/orders`).as('createOrder');
            cy.get('[data-testid="bun-cards"]').find('[data-type="ingredient-card"]').first().as('bunCard');
            cy.get('[data-testid="sauce-cards"]').find('[data-type="ingredient-card"]').first().as('sauceCard');
            cy.get('[data-testid="main-cards"]').find('[data-type="ingredient-card"]').first().as('mainCard');

            cy.get('[data-testid="bun-drop-area"]').as('bunDropArea');
            cy.get('@bunCard').trigger('dragstart');
            cy.get('@bunDropArea').trigger('drop');

            cy.get('[data-type="element-drop-area"]').first().as('bunElement');
            cy.get('@sauceCard').trigger('dragstart');
            cy.get('@bunElement').trigger('drop');
            cy.get('@mainCard').trigger('dragstart');
            cy.get('@bunElement').trigger('drop');

            cy.get('[data-type="element-drop-area"]').should('have.length', 4);

            cy.get('[data-testid="burger-constructor"]').find('button').click()
                .wait('@createOrder', { timeout: Cypress.config('responseTimeout') });

            cy.get('[data-testid="modal"]').as('modal');
            cy.get('@modal').find('[data-testid="order-number"]').invoke('text')
                .should('match', /^[0-9]+$/);

            cy.get('@modal').find('[data-type="close-icon"]').click();
            cy.get('[data-type="element-drop-area"]').should('have.length', 0);
        });
    });
});
