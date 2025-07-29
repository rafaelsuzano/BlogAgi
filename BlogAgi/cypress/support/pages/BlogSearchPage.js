export class BlogSearchPage {
  visit() {
    cy.visit('https://blog.agibank.com.br');
  }

  getSearchField() {
    return cy.get("searchbox",{"name":"Pesquisar por:"}).click();
  }

  searchFor(term) {
    this.getSearchField().type(`${term}{enter}`);
  }

  getArticles() {
    return cy.get('article, .post, .entry-title');
  }

  getFirstArticleLink() {
    return cy.get('article a').first();
  }

  getNoResultMessage() {
    return cy.contains(/nenhum resultado/i);
  }

  assertUrlContains(text) {
    cy.url().should('include', text);
  }

  assertBodyHasText(text) {
    cy.get('body').should('contain.text', text);
  }
}
