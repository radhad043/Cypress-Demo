import { LoginPage } from "../../fixtures/PageObject/loginPage";
import { LeftNav } from "../../fixtures/PageObject/leftNav";
import { enterRandomNumber,solarLossVariables,variables, } from "./const";

const leftMenu = new LeftNav ;
const currentDate = new Date();
const currentDay = currentDate.getDate();

describe('Solar Loss Form Functionality Test', () => {
    before(() => {
        leftMenu.navigate(variables.url);
            leftMenu.enterUserName(variables.email);
            leftMenu.enterPassword(variables.password);
            leftMenu.clickLogin();
            leftMenu.leftNavMenu();
            leftMenu.solarLossFormConfiguration();
         })
  
    it('Solar Loss', () => {

    cy.get(solarLossVariables.SelectPlant).click();
    cy.get('.ant-select-dropdown').should('be.visible');

    // Get all options in the dropdown
    cy.get('.ant-select-item-option-content').then($options => {
      const options = $options.toArray();
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomOption = options[randomIndex];

      // Select the random option
      cy.wrap(randomOption).click();
    
    })

    cy.get(solarLossVariables.CreateLoss).click();
    cy.get(solarLossVariables.TempartureLimit).type(enterRandomNumber.length);
    cy.get(solarLossVariables.NearShaddingirrandiancelossValue).type(enterRandomNumber.length);
    // cy.get(':nth-child(1) > :nth-child(3) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').contains('FIXED LOSS').click();
    // cy.get(':nth-child(1) > :nth-child(3) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input').contains('DYNAMIC LOSS').click();

    cy.get(solarLossVariables.NearShaddingirrandiancelossLosstype).click();
    cy.get('.ant-select-item-option-content').then($options => {
        // Loop through each option
        $options.each((index, $option) => {
          const optionText = $option.innerText;
  
          // Example condition: select option if it matches 'FIXED LOSS' or 'DYNAMIC LOSS'
          if (optionText === 'FIXED LOSS') {
            cy.wrap($option).click();
          } else if (optionText === 'DYNAMIC LOSS') {
            cy.wrap($option).click();
          }
        })
    })
    })
})