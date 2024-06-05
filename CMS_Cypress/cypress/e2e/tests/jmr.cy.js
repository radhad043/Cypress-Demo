import { LoginPage } from "../../fixtures/PageObject/loginPage";
import { LeftNav } from "../../fixtures/PageObject/leftNav"; 
import { enterRandomNumber, generateRandomNumberString, jmrVariables, logout, losscalculationvariables, variables } from "./const";

const leftMenu = new LeftNav ;

describe('JMR Creation Functionality Test', () => {
    before(() => {
        leftMenu.navigate(variables.url);
            leftMenu.enterUserName(variables.email);
            leftMenu.enterPassword(variables.password);
            leftMenu.clickLogin();
            
            leftMenu.leftNavMenu();
            leftMenu.jmr();
     // cy.visit('YOUR_PAGE_URL'); // Replace with your page URL
    })

  it('Add / Create JMR Test', () => {

    cy.get(jmrVariables.add).click();
    cy.get(jmrVariables.plantName).click();
    cy.get('.ant-select-dropdown').should('be.visible');

        // Get all options in the dropdown
        cy.get('.ant-select-item-option-content').then($options => {
          const options = $options.toArray();
          const randomIndex = Math.floor(Math.random() * options.length);
          const randomOption = options[randomIndex];
    
          // Select the random option
          cy.wrap(randomOption).click();
        
        })

        cy.get(jmrVariables.ExportkwH).type(enterRandomNumber.length);
        cy.get(jmrVariables.ImportkwH).type(enterRandomNumber.length);
        //cy.get(jmrVariables.DocumentUpload).type('iec');
        const csvContent = `date,plantidentifier,planttype,capacity,T_CUF,M_CUF,T_POA,M_POA,T_Egrid,
        M_Egrid,T_PR,M_PR,T_PA,M_PA,T_GA,M_GA,T_TA,M_TA,T_WS,M_WS,T_IGA,M_IGA`;
        
            // Convert CSV content to buffer
            const csvBuffer = Cypress.Buffer.from(csvContent);
        
            // Upload the CSV file
            cy.get('input[type=file]').selectFile({
              contents: csvBuffer,
              fileName: 'users.csv',
              mimeType: 'text/csv',
      })

    
  })
   

})
