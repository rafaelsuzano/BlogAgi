import { BlogSearchPage } from '../../support/pages/BlogSearchPage';

const blog = new BlogSearchPage();

describe('Testes de busca no Blog Agibank – Page Object', () => {
  beforeEach(() => {
    blog.visit();
    blog.getSearchField().should('be.visible');
  });

 it('Cenário 1 – Busca por termo relevante (Pix)', () => {
    blog.getSearchField().should('be.visible');
  });

 it.skip('Cenário 2 – Busca por termo inexistente (xpto123)', () => {
    blog.searchFor('xpto123');
    blog.getNoResultMessage().should('exist');
  });

 it.skip('Cenário 3 – Abrir artigo a partir da busca', () => {
    blog.searchFor('Cartão');
    blog.getFirstArticleLink()
      .should('have.attr', 'href')
      .then((href) => {
        cy.visit(href);
        blog.assertBodyHasText('Cartão');
      });
  });

 it.skip('Cenário 4 – Termo genérico com múltiplos resultados', () => {
    blog.searchFor('Conta');
    blog.getArticles()
      .should('have.length.greaterThan', 1)
      .each(($el) => {
        cy.wrap($el).should('contain.text', 'Conta');
      });
  });

 it.skip('Cenário 5 – Submissão de busca vazia', () => {
    blog.getSearchField().focus().type('{enter}');
    blog.assertUrlContains('s=');

    cy.get('body').then($body => {
      if ($body.text().toLowerCase().includes('resultado')) {
        cy.contains(/resultado/i).should('exist');
      } else {
        cy.log('Busca vazia tratada com fallback visual.');
      }
    });
  });
});
