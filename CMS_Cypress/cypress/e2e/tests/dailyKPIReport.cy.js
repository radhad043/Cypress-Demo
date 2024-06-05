import { LoginPage } from "../../fixtures/PageObject/loginPage";
import { LeftNav } from "../../fixtures/PageObject/leftNav"; 
import { dailyKpivariables, enterRandomNumber, generateRandomNumberString, logout, losscalculationvariables, variables } from "./const";

//const dailykpi_report = `dailykpi-${new Date().getTime()}`;

const leftMenu = new LeftNav ;

const currentDate = new Date();
const options = { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' };

const formatDate = (date) => {
  return date.toLocaleDateString('en-IN', options).split('/').reverse().map(part => part.padStart(2, '0')).join('-');
};

const today = formatDate(currentDate);
const yesterday = formatDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
const startOfWeek = formatDate(new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay())));
const endOfWeek = formatDate(new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6)));
const startOfMonth = formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1));
const endOfMonth = formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0));
const startOfFinancialYear = formatDate(new Date(currentDate.getMonth() >= 3 ? currentDate.getFullYear() : currentDate.getFullYear() - 1, 3, 1));
const endOfFinancialYear = formatDate(new Date(currentDate.getMonth() >= 3 ? currentDate.getFullYear() + 1 : currentDate.getFullYear(), 2, 31));
const startOfCalendarYear = formatDate(new Date(currentDate.getFullYear(), 0, 1));
const endOfCalendarYear = formatDate(new Date(currentDate.getFullYear(), 11, 31));

describe('Filter By Date Functionality Test', () => {
    before(() => {
        leftMenu.navigate(variables.url);
            leftMenu.enterUserName(variables.email);
            leftMenu.enterPassword(variables.password);
            leftMenu.clickLogin();
            
            leftMenu.leftNavMenu();
            leftMenu.dailyKPIReport();
     // cy.visit('YOUR_PAGE_URL'); // Replace with your page URL
    })
  
    it('Selects various date ranges from date picker', () => {
      const selectDateRange = (startDate, endDate) => {
        cy.get('span > app-date-picker > nz-range-picker').click();
        cy.get('nz-range-picker input').first().clear().type(startDate).blur();
        cy.get('nz-range-picker input').last().clear().type(endDate).blur();
      };
  
      // Select Yesterday
      cy.wait(2000);
      selectDateRange(yesterday, yesterday);
  
      // Select Today
      cy.wait(2000);
      selectDateRange(today, today);
  
      // Select This Week
      cy.wait(2000);
      selectDateRange(startOfWeek, endOfWeek);
  
      // Select This Month
      cy.wait(2000);
      selectDateRange(startOfMonth, endOfMonth);
  
      // Select Financial Year
      cy.wait(2000);
      selectDateRange(startOfFinancialYear, endOfFinancialYear);
  
      // Select Calendar Year
      cy.wait(10000);
      selectDateRange(startOfCalendarYear, endOfCalendarYear);
    });
  });
  
  describe('Column Visibility Functionality Test', () => {
    before(() => {
        leftMenu.navigate(variables.url);
            leftMenu.enterUserName(variables.email);
            leftMenu.enterPassword(variables.password);
            leftMenu.clickLogin();
            
            leftMenu.leftNavMenu();
            leftMenu.dailyKPIReport();
     // cy.visit('YOUR_PAGE_URL'); // Replace with your page URL
    })

  it('Column Visibility Test', () => {
   
    const selectDateRange = (startDate, endDate) => {
    cy.get('span > app-date-picker > nz-range-picker').click();
    cy.get('nz-range-picker input').first().clear().type(startDate).blur();
    cy.get('nz-range-picker input').last().clear().type(endDate).blur();
  };
  selectDateRange(startOfCalendarYear, endOfCalendarYear);
  cy.wait(2000);

//Click on Column Visibility 
  cy.get(dailyKpivariables.columnVisbility).click();

   // Uncheck the checkbox if it's not already unchecked
  cy.get('input[type="checkbox"]').then($checkbox => {
    if ($checkbox.is(':checked')) {
      cy.wrap($checkbox).uncheck();
      cy.wait(2000);
      cy.contains('Reset').click();
      cy.wait(2000);
    }
  });
     
  })
})

describe('Create /Add Daily KPI Functionality Test', () => {
    before(() => {
        leftMenu.navigate(variables.url);
            leftMenu.enterUserName(variables.email);
            leftMenu.enterPassword(variables.password);
            leftMenu.clickLogin();
            
            leftMenu.leftNavMenu();
            leftMenu.dailyKPIReport();

     // cy.visit('YOUR_PAGE_URL'); // Replace with your page URL
    })

    it('Add/ Create  KPI Functionality Test', () => {

        cy.get(dailyKpivariables.create).click();
        cy.get(dailyKpivariables.PlantType).click();
        cy.contains('SOLAR').click();
        cy.get(dailyKpivariables.Plant).click();
        cy.get('.ant-select-dropdown').should('be.visible');

        // Get all options in the dropdown
        cy.get('.ant-select-item-option-content').then($options => {
          const options = $options.toArray();
          const randomIndex = Math.floor(Math.random() * options.length);
          const randomOption = options[randomIndex];
    
          // Select the random option
          cy.wrap(randomOption).click();
        

        })
        //Select Today's date 
        cy.get('.ant-picker-input').click();
        cy.contains('Today').click();
        cy.get(dailyKpivariables.capacity).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.AccufTarget).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.AccufMeasured).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.POATarget).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.POAMeasured).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.kwhExportTarget).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.kwhExportMEasured).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.prTarget).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.prMeasured).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.paTarget).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.paMeasured).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.gaTarget).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.gaMeasured).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.taTarget).type(enterRandomNumber.length);
        cy.get(dailyKpivariables.taMeasured).type(enterRandomNumber.length);
        cy.viewport (1050 ,900);
        cy.get(dailyKpivariables.save).click();
        cy.viewport (1000 ,660); 
        // Alert message on creating record successfully
        // cy.contains('Daily Kpi Report Created Successfully!!').should('be.visible');
        // cy.get(dailyKpivariables.AlreadyExist).should('contain','Manual KPI Already Exist with the date 04-06-2024 and plant ESEP10MW ');
               
    })
  })

  describe('Export KPI Functionality Test', () => {
    before(() => {
        leftMenu.navigate(variables.url);
            leftMenu.enterUserName(variables.email);
            leftMenu.enterPassword(variables.password);
            
            leftMenu.clickLogin();
            
            leftMenu.leftNavMenu();
            leftMenu.dailyKPIReport();

     // cy.visit('YOUR_PAGE_URL'); // Replace with your page URL
    })

    it('Export KPI Functionality Test', () => {
     cy.get(dailyKpivariables.Export).click();
     cy.get(dailyKpivariables.okAlert).click();
     cy.get(dailyKpivariables.BulkUpload).click();
     //cy.get(dailyKpivariables.FileImport).click();

    })

    describe('Daily KPI Dashboard Functionality Test', () => {
      before(() => {
          leftMenu.navigate(variables.url);
              leftMenu.enterUserName(variables.email);
              leftMenu.enterPassword(variables.password);
              leftMenu.clickLogin();
              
              leftMenu.leftNavMenu();
              leftMenu.dailyKPIDashboard();
  
       // cy.visit('YOUR_PAGE_URL'); // Replace with your page URL
      })  

      it('Daily KPI Dashboard Functionality Test by Date filter', () => {
        const selectDateRange = (startDate, endDate) => {
          cy.get('span > app-date-picker > nz-range-picker').click();
          cy.get('nz-range-picker input').first().clear().type(startDate).blur();
          cy.get('nz-range-picker input').last().clear().type(endDate).blur();
        };
         // Select Calendar Year
      cy.wait(10000);
      selectDateRange(startOfCalendarYear, endOfCalendarYear);
      cy.get('app-daily-kpi-dashboard.ng-star-inserted > :nth-child(2)').scrollTo('bottom', { ensureScrollable: false });
      //cy.scrollTo('bottom');
      //cy.viewport (1550 ,1000);
      })


    })
  })