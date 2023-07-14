import { utils } from "cypress/support/utils";

class LoginPage {
  elements = {
    usernameInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get('h3[data-test="error"]'),
  };

  // typeUsername(username) {
  //   utils.enterText(usernameInput, username)
  // }

  // typePassword(password) {
  //   utils.enterText(passwordInput, password)
  // }

  // clickLogin() {
  //   utils.click(loginBtn)
  // }
  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}

export const loginPage = new LoginPage();
