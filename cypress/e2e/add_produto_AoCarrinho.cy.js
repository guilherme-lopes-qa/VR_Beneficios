
/// <reference types="cypress" />

describe('Adicionar produto ao carrinho', () => {
    it('Realizar fluxo de add produto ao carrinho', () => {

        Cypress.config('defaultCommandTimeout', 10000); // Tempo limite para concluir comandos
        Cypress.config('responseTimeout', 30000); // Tempo limite para resposta
        cy.visit('https://www.vr.com.br');

        cy.wait(2000);

        // Encadeie cy.wrap() para converter o objeto retornado por cy.get('#buttonCompreOnline') em um objeto Cypress
        cy.wrap(cy.get('#buttonCompreOnline')).then(($button) => {
            // Agora você pode acessar o objeto retornado e realizar operações Cypress nele
            $button.click();
        });
    });
});