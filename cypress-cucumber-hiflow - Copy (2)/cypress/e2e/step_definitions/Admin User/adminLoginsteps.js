import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from 'cypress/support/pages/Admin User/LoginPage'
import {admintestdata_login} from '../../../fixtures/Admin User/adminDetails.json'


Given("Navigate to Admin Base Url", () => {
 // cy.visit("/");
  cy.visit(admintestdata_login.adminbaseUrl);
  cy.wait(2000);
});
// When("User Enters username", () => {
//     loginPage.typeUsername(admintestdata_login.email)
//   });
// And("User Enters password", () => {
//     loginPage.typePassword(admintestdata_login.password)
//   });

// And("Click on login button", () => {
//     loginPage.clickLogin()
//   });
  When("An Admin user enters the username the password and clicks on the login button", () => {
    loginPage.submitLogin(admintestdata_login.email, admintestdata_login.password)
    
  });
Then("Verify the Admin Url", () => {
  cy.url().should("contains", "/home");
});

