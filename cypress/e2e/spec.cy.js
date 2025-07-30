import { BlogSearchPage } from '../support/pages/BlogSearchPage';

const blog = new BlogSearchPage();

describe('Testes de busca no Blog Agibank – Page Object', () => {
  beforeEach(() => {
    blog.VisitHomePage();

  });

  it('Cenário 1 – Busca por termo relevante sem retorno tttt', () => {

    blog.SearchFor('tttt');
    cy.contains('Resultados encontrados para: tttt').should('be.visible');
    // cy.contains('Pix').should('be.visible');

    cy.contains('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.').should('be.visible');
    cy.screenshot()


  });

  it('Cenário 2 – Busca por termo relevante com retorno INSS ', () => {

    blog.SearchFor('INSS');

    cy.get('.search-results, article') // Alvo geral, ajuste se necessário
      .should('exist')

      .and('be.visible');
    cy.screenshot()



  });

  it('Cenário 3 - Visita a página de busca do INSS e clica no primeiro resultado', () => {
    blog.SearchFor('inss');



    cy.contains('h2', 'Como consultar número do benefício INSS?') // Encontra o h2 com o texto
      .click();

    cy.contains('h1', 'Como consultar número do benefício INSS?').should('exist')

      .and('be.visible');; // Verifica se o título da página do post está visível
 
   cy.screenshot()
  });



});
