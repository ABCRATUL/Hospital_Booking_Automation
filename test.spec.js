describe('My First Test', () => {
  it('Visits website first', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    

 });

  it('Click on Make Appointment', function () {
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
    });
it('Make first appointment', function() {
    //cy.visit('https://katalon-demo-cura.herokuapp.com/')
         //cy.get('#btn-make-appointment').click();
		 cy.wait(500);//Added wait for 500s
	     cy.get('select').select('Seoul CURA Healthcare Center');
		 cy.get('#chk_hospotal_readmission').click();
		 cy.get('#radio_program_medicaid').click();
		 cy.get('#txt_visit_date').type('23/07/2021');
		
		  cy.get('#txt_comment').click({ force: true });
        cy.get('#txt_comment').type('Anirban Chakraborty will be avaiable at 23/07/2021');
        cy.get('#btn-book-appointment').click();
		
		//cy.get('#btn btn-default').click({ force: true });
		cy.get('*[class^="btn btn-default"]').click();

 });


 
});