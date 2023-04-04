describe('Тестирование авторизации', function () {
    it('Позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#mail') .type('german@dolnikov.ru');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#pass') .type('iLoveqastudio1');
         cy.get('#loginButton') .should('be.enabled') .click();
         cy.get('body') .contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
        })
        it('Восстановление пароля', function () {
            cy.reload();
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton') .click();
            cy.get('body') .type('Восстановите пароль');
            cy.get('#mailForgot') .type('german@dolnikov.ru');
            cy.get('#restoreEmailButton').should('be.enabled') .click();
            cy.get('body') .contains('Успешно отправили пароль на e-mail');
            cy.get('#exitMessageButton > .exitIcon');
            cy.reload();
           })
           it('Негативный тест авторизации(неверный пароль)', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled');
            cy.get('#mail') .type('german@dolnikov.ru');
            cy.get('#loginButton').should('be.disabled');
            cy.get('#pass') .type('iLoveqastudio2');
            cy.get('#loginButton') .should('be.enabled') .click();
            cy.get('body') .contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon'); 
            cy.reload(); 
           }) 
           it('Негативный тест авторизации(неверный логин)', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled');
            cy.get('#mail') .type('dolly-eng@mail.ru');
            cy.get('#loginButton').should('be.disabled');
            cy.get('#pass') .type('iLoveqastudio1');
            cy.get('#loginButton').should('be.enabled') .click();
            cy.get('body') .contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon');  
            cy.reload();
           }) 
           it('Негативный тест валидации', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled');
            cy.get('#mail') .type('germandolnikov.ru');
            cy.get('#loginButton').should('be.disabled');
            cy.get('#pass') .type('iLoveqastudio1');
            cy.get('#loginButton').should('be.enabled') .click();
            cy.get('body') .contains('Нужно исправить проблему валидации');
            cy.get('#exitMessageButton > .exitIcon');  
            cy.reload();
           }) 
           it('Приведение к строчным буквам', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled');
            cy.get('#mail') .type('GerMan@Dolnikov.ru');
            cy.get('#loginButton').should('be.disabled');
            cy.get('#pass') .type('iLoveqastudio1');
            cy.get('#loginButton').should('be.enabled') .click();
            cy.get('body') .contains('Авторизация прошла успешно');
            cy.get('#exitMessageButton > .exitIcon');  
            cy.reload();
           }) 
        }
        )