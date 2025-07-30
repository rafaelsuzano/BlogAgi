export class BlogSearchPage {
  VisitHomePage() {
    cy.visit('https://blog.agibank.com.br');
  }

  SearchFor(termo) {
    cy.reload();
   return cy.visit('https://blog.agibank.com.br/?s='+termo);
  }
 

  
  getSearchField() {
    return cy.get("div.site-header-above-section-right > div.ast-builder-layout-element > div > div svg").click();

  }

  getClickSearchField() {
    return cy.get("#search-field").click();  }

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
