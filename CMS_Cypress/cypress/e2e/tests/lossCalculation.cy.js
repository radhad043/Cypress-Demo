import { LeftNav } from "../../fixtures/PageObject/leftNav";
import { LoginPage } from "../../fixtures/PageObject/loginPage";
import { enterRandomNumber, generateRandomNumberString, logout, losscalculationvariables, variables } from "./const";

const leftMenu = new LeftNav ;
const currentDate = new Date();
const currentDay = currentDate.getDate();
 
it('Create Loss Calculation form', () => {
    leftMenu.navigate(variables.url);
    leftMenu.enterUserName(variables.email);
    leftMenu.enterPassword(variables.password);
    leftMenu.clickLogin();
    
    leftMenu.leftNavMenu();
    leftMenu.lossCalculation();
    cy.viewport(1080,660);

    
cy.get(losscalculationvariables.create).click()

// Get the current date
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.toLocaleString('default', { month: 'short' });
const currentYear = currentDate.getFullYear();

// Click to open the date picker
cy.get('[placeholder="Select date"]').click();

// Select the current day
cy.get('a[title="5/11/2024"]').click();
 
cy.get(losscalculationvariables.PlantType).click();
cy.contains('SOLAR').click();

cy.get(losscalculationvariables.PlantName).click();
// cy.contains('Select Plant').click();
cy.contains('ES Sun Power 20MW').click();

cy.get(losscalculationvariables.Periodcity).click();
cy.contains('DAILY').click();

cy.get(losscalculationvariables.EGridTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.EGridActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.EgridDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.ShadingTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.ShadingActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.ShadingDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.SoilingTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.SoilingActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.SoilingDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.IAMTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.IAMActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.IAMDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.BifacialGainTarget).type(encodeURI.length);
cy.get(losscalculationvariables.BifacialGainActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.BifacialGainDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.TemperatureTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.TemperatureActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.TemperatureDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.MismatchTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.MismatchActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.MismatchDifferences).type(enterRandomNumber.length);
cy.get(losscalculationvariables.DCOhmicTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.DCOhmicActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.DCOhmicDifferences).type(enterRandomNumber.length);
cy.get(losscalculationvariables.ACOhmicTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.ACOhmicActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.ACOhmicDifferences).type(enterRandomNumber.length);
cy.get(losscalculationvariables.InverterConversionTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.InverterConversionActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.InverterConversionDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.MMPTTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.MMPTActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.MMPTDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.ClipingLossTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.ClipingLossActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.ClipingLossDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.CurtailmentOrderTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.CurtailmentOrderActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.CurtailmentOrderDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.ReactivePowerTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.ReactivePowerActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.ReactivePowerDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.PlantUptimeTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.PlantUptimeActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.PlantUptimeDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.GridUptimeTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.GridUptimeActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.GridUptimeDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.TrackerUptimeTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.TrackerUptimeActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.TrackerUptimeDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.TrackerGainTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.TrackerGainActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.TrackerGainDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.DCUnbalancedLoadTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.DCUnbalanceLoadActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.DCUnbalancedLoadDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.MeasuredTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.MeasuredActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.MeasuredDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.RepoweringDelayTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.RepoweringDelayActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.RepowerDelayDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.CapacityShortFallTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.CapacityShortFallActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.CapacityShortFallDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.PRTarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.PRActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.PRDifference).type(enterRandomNumber.length);
cy.get(losscalculationvariables.POATarget).type(enterRandomNumber.length);
cy.get(losscalculationvariables.POAActual).type(enterRandomNumber.length);
cy.get(losscalculationvariables.POADifference).type(enterRandomNumber.length);

cy.get('#screencontainer').scrollIntoView().click();

cy.get(losscalculationvariables.save).click({force:true});
cy.get('li:nth-child(4) > a > svg > use').click();
cy.get('div[class="cdk-overlay-container"] li:nth-child(3)').trigger('Logout').click({force:true});
});

 
it('Edit Loss Calculation form', () => {
    leftMenu.navigate(variables.url);
    leftMenu.enterUserName(variables.email);
    leftMenu.enterPassword(variables.password);
    leftMenu.clickLogin();
    
    leftMenu.leftNavMenu();
    leftMenu.lossCalculation();
    cy.viewport(1080,660);
    cy.get(losscalculationvariables.Edit).click();
    cy.get('#screencontainer').scrollIntoView().click();
    cy.get(losscalculationvariables.update).click({force:true});

  

}) ;

it('Deletion of Loss Form', () => {
    leftMenu.navigate(variables.url);
    leftMenu.enterUserName(variables.email);
    leftMenu.enterPassword(variables.password);
    leftMenu.clickLogin();
    
    leftMenu.leftNavMenu();
    leftMenu.lossCalculation();
    cy.viewport(1080,660);
    cy.get(losscalculationvariables.Delete).click();
    cy.get('#screencontainer').scrollIntoView().click();
    //cy.get(losscalculationvariables.update).click({force:true});

    
}) ;

it('Approving the Loss Form', () => {
    leftMenu.navigate(variables.url);
    leftMenu.enterUserName(variables.email);
    leftMenu.enterPassword(variables.password);
    leftMenu.clickLogin();
    
    leftMenu.leftNavMenu();
    leftMenu.lossCalculation();
    cy.viewport(1080,660);
    cy.get(losscalculationvariables.approve).click();
    cy.get('#screencontainer').scrollIntoView().click();
    
}) ;
it('Dashboard functionality', () => {
    leftMenu.navigate(variables.url);
    leftMenu.enterUserName(variables.email);
    leftMenu.enterPassword(variables.password);
    leftMenu.clickLogin();
    
    leftMenu.leftNavMenu();
    leftMenu.lossCalculationDashboard();
    cy.viewport(1080,660);
    cy.get('.ant-picker').click();
    
const currentDate = new Date();
const formattedCurrentDate = currentDate.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
  .split('/').reverse().map(part => part.padStart(2, '0')).join('-') + ' 00:00';
 
cy.get('[placeholder="Start date"]').type(formattedCurrentDate);
cy.get('[placeholder="End date"]').type(formattedCurrentDate);

cy.get(losscalculationvariables.InputPlantType).click()
cy.contains('SOLAR').click();
cy.get(losscalculationvariables.Plant).click();
cy.contains('ESSP20MW').click();
cy.get(losscalculationvariables.InputPeriodicity).click();
cy.contains('DAILY').click();
cy.get(losscalculationvariables.submit).click();






})

