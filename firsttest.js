describe('open github.com', () => {
  it('passes', () => {
    cy.visit('https://github.com');
     
      cy.xpath('/html/body/div[1]/header/div/div[2]/div[2]/div[2]/a').click({ force: true });
      cy.wait(9000);
      cy.get("input[id=login_field]").type("a.chakraborty58@yahoo.com",{log:false});
      cy.get("input[id=password]").type("WORKpower1234@",{log:false});
      cy.xpath('/html/body/div[3]/main/div/div[4]/form/div/input[12]').click({ force: true });
      
      cy.xpath('/html/body/div[1]/header/div[7]/details/summary/span[1]').click({ force: true});
      cy.xpath('/html/body/div[1]/header/div[7]/details/details-menu/form/button').click({ force: true});
       
      

  })
})