import { LoginPage } from "../../fixtures/PageObject/loginPage"
import { variables } from "./const";

const loginPage = new LoginPage;
describe('Validating Login functionality', () => {
    it('Login test', () => {
      loginPage.navigate(variables.url);
      loginPage.enterUserName(variables.email);
      loginPage.enterPassword(variables.password);
      loginPage.clickLogin();
     
      loginPage.validateTooltip();

      loginPage.validateSwitchToggle();

      loginPage.validateLogo();

      loginPage.validateTitle();
     
   
    })
  })

    // loginPage.leftNavMenu();
     // loginPage.lossCalculation();