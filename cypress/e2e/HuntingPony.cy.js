describe('HuntingPony', function () {
    it('Тестирование заказа в HuntingPony', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link') .click();
         cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1') .click();
         cy.wait(3000);
         cy.get('.add-cart-counter__btn') .click();
         cy.wait(3000);
         cy.get('.add-cart-counter__detail').contains('В корзине 1 шт');
         cy.wait(3000);
         cy.get('[data-add-cart-counter-plus=""]') .click({force: true});
         cy.wait(3000);
         cy.get('.add-cart-counter__detail').contains('В корзине 2 шт');
         cy.get('.header__cart') .click();
         cy.get('.cart-controls > .button') .click();
         cy.get('main > .layout') .contains('Оформление заказа');
     })
 })


 //cy.get('[data-add-cart-counter-plus=""]') .click({force: true});