export class LeftNav{
    
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


    leftNavMenu(){
        cy.get('.nav-left > :nth-child(1)').click();

    }
    lossCalculation(){
        cy.contains('Loss Calculation').click({force :true});
       // cy.contains('Loss Calculation').click();
        cy.get('app-menu-drawer-child > :nth-child(4) > .ant-menu-submenu-title').click()
       // cy.get('.ant-menu-submenu-open > .ant-menu > app-menu-item.ng-star-inserted > :nth-child(1) > a').scrollIntoView().click({forece :true});
        

    }
    lossCalculationDashboard(){
        cy.get('app-menu-drawer-child > :nth-child(4) > .ant-menu-submenu-title').click();  
        cy.get('.ant-menu-submenu-open > .ant-menu > app-menu-item.ng-star-inserted > :nth-child(2) > a').click();      
        
    }

    jmr(){
        //Click on JMR
        cy.get('app-menu-drawer-child > :nth-child(6) > .ant-menu-submenu-title').click();
        
       //Click on Create
       cy.get('.ant-menu-submenu-active > .ant-menu > app-menu-item.ng-star-inserted > :nth-child(1) > a').scrollIntoView().click();
    }  
    dailyKPIReport(){
        // clicks on Daily Kpi
        
        cy.get('app-menu-drawer-child > :nth-child(11) > .ant-menu-submenu-title').click();
       // cy.get('li:nth-child(11) > div.ant-menu-submenu-title').eq(0).scrollIntoView().click();
          
        // Clicks on Create button
        cy.get('.ant-menu-submenu-open > .ant-menu > app-menu-item.ng-star-inserted > :nth-child(1) > a').click();
       
        //cy.get('.ant-menu-submenu-open > .ant-menu > app-menu-item.ng-star-inserted > :nth-child(1) > a').scrollIntoView().click();
       
 }    
 
 dailyKPIDashboard(){
    // clicks on Daily Kpi
    cy.get('app-menu-drawer-child > :nth-child(11) > .ant-menu-submenu-title > [title=""]').click();
    // click on Dashboard button
    cy.get('.ant-menu-submenu-open > .ant-menu > app-menu-item.ng-star-inserted > :nth-child(2) > a').click();
 }

}