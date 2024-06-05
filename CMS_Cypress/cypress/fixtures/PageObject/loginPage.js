export class LoginPage{


    navigate(url){
        cy.visit(url);
    }
    enterUserName(username){
        cy.get('.ng-tns-c234-1 > .ant-input-wrapper > .ant-input').type(username); // radha.d@sgrids.io
    }
     
    enterPassword(password){
        cy.get('.ng-tns-c234-2 > .ant-input-wrapper > .ant-input').type(password); // 'ArmaX@1234'

    }

    clickLogin(){
        cy.get('.ant-btn').click();
    }

    validateTooltip(){
        cy.get('.nav-right > :nth-child(2)').should('be.visible').click();
        }

        validateSwitchToggle(){
            
            cy.get('.label > .ant-switch > .ant-switch-handle').click();
            cy.get('.label > .ant-switch').click();
         //   cy.get('.label > .ant-switch > .ant-switch-inner').click();
        }
        
        validateLogo(){
            cy.get(':nth-child(2) > .logo').should('be.visible');
        }
        validateTitle(){
            cy.title().should('include','Smart Grid Analytics')
        }
        
}