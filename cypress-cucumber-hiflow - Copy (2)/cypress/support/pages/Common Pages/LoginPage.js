import { utils } from "cypress/support/utils";

class CommonPage {
  elements = {
    usernameInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get('button[type="submit"]'),
    
  };

  verifyUsernameField() {
    utils.verifyelementsvisibility(usernameInput)
  }

  verifyPasswordField() {
    utils.verifyelementsvisibility(passwordInput)
  }

  verifyLoginBtn() {
    utils.verifyelementsvisibility(loginBtn)
  }

}

export const commpnpage = new CommonPage();
