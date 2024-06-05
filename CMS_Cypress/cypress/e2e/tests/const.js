export const variables = {
    url : 'https://demo.kitchen.sgrids.io/',
    email :'radha.d@sgrids.io',
    password : 'ArmaX@1234'
}

export const losscalculationvariables = {

  
        create : 'form >nz-space > div:nth-child(1) > button',
        save : 'nz-card > ul > li > span > div > button',
        update : ' nz-card > ul > li > span > div > button > span' ,
        delete : ' tbody > tr:nth-child(3) > td:nth-child(7) > nz-space > div:nth-child(2) > button > span',
        approve : 'tr:nth-child(9) > td:nth-child(7) > nz-space > div:nth-child(3) > button > span' ,
        submit : 'nz-space > div:nth-child(6) > button > span' ,
    // Selectdate : 'input[placeholder="Select date"]',
    
         
     PlantType :'div > div:nth-child(2) > nz-form-item > nz-form-control > div > div > nz-select > nz-select-top-control > nz-select-search > input',
     PlantName : '#screencontainer > div > app-add-loss-form > div > div > nz-card > div.ant-card-body > form > div > div:nth-child(3) > nz-form-item > nz-form-control > div > div > nz-select',
     Periodcity : '#screencontainer > div > app-add-loss-form > div > div > nz-card > div.ant-card-body > form > div > div:nth-child(4) > nz-form-item > nz-form-control > div > div > nz-select > nz-select-top-control > nz-select-search > input',
     EGridTarget: 'tbody tr:nth-child(1) td:nth-child(2) input:nth-child(1)' ,
     EGridActual : '  div > table > tbody > tr:nth-child(1) > td:nth-child(3) > input' ,
     EgridDifference: 'div > table > tbody > tr:nth-child(1) > td:nth-child(4) > input',
     ShadingTarget : 'div > table > tbody > tr:nth-child(2) > td:nth-child(2) > input',
     ShadingActual : 'div > table > tbody > tr:nth-child(2) > td:nth-child(3) > input',
     ShadingDifference : 'div > table > tbody > tr:nth-child(2) > td:nth-child(4) > input' ,
     SoilingTarget : 'div > table > tbody > tr:nth-child(3) > td:nth-child(2) > input',
     SoilingActual : 'table > tbody > tr:nth-child(3) > td:nth-child(3) > input',
     SoilingDifference : 'table > tbody > tr:nth-child(3) > td:nth-child(4) > input' ,
     IAMTarget : 'table > tbody > tr:nth-child(4) > td:nth-child(2) > input',
     IAMActual : 'table > tbody > tr:nth-child(4) > td:nth-child(3) > input',
     IAMDifference : ' table > tbody > tr:nth-child(4) > td:nth-child(4) > input' ,
     BifacialGainTarget : 'table > tbody > tr:nth-child(5) > td:nth-child(2) > input',
     BifacialGainActual : ' table > tbody > tr:nth-child(5) > td:nth-child(3) > input',
     BifacialGainDifference : ' table > tbody > tr:nth-child(5) > td:nth-child(4) > input' ,
     TemperatureTarget : ' table > tbody > tr:nth-child(6) > td:nth-child(2) > input' ,
     TemperatureActual : 'table > tbody > tr:nth-child(6) > td:nth-child(3) > input',
     TemperatureDifference : 'table > tbody > tr:nth-child(6) > td:nth-child(4) > input' ,
     MismatchTarget : 'table > tbody > tr:nth-child(7) > td:nth-child(2) > input',
     MismatchActual : 'table > tbody > tr:nth-child(7) > td:nth-child(3) > input',
     MismatchDifferences : 'table > tbody > tr:nth-child(7) > td:nth-child(4) > input' ,
     DCOhmicTarget : ' table > tbody > tr:nth-child(8) > td:nth-child(2) > input',
     DCOhmicActual : ' table > tbody > tr:nth-child(8) > td:nth-child(3) > input',
     DCOhmicDifferences : ' table > tbody > tr:nth-child(8) > td:nth-child(4) > input' ,
     ACOhmicTarget : 'table > tbody > tr:nth-child(9) > td:nth-child(2) > input',
     ACOhmicActual : 'table > tbody > tr:nth-child(9) > td:nth-child(3) > input' ,
     ACOhmicDifferences : 'table > tbody > tr:nth-child(9) > td:nth-child(4) > input',
     InverterConversionTarget : 'table > tbody > tr:nth-child(10) > td:nth-child(2) > input',
     InverterConversionActual : 'table > tbody > tr:nth-child(10) > td:nth-child(3) > input',
     InverterConversionDifference : 'table > tbody > tr:nth-child(10) > td:nth-child(4) > input' , 
     MMPTTarget : 'table > tbody > tr:nth-child(11) > td:nth-child(2) > input' ,
     MMPTActual : 'table > tbody > tr:nth-child(11) > td:nth-child(3) > input',
     MMPTDifference : 'table > tbody > tr:nth-child(11) > td:nth-child(4) > input' ,
     ClipingLossTarget : ' table > tbody > tr:nth-child(12) > td:nth-child(2) > input' ,
     ClipingLossActual : ' table > tbody > tr:nth-child(12) > td:nth-child(3) > input',
     ClipingLossDifference : ' table > tbody > tr:nth-child(12) > td:nth-child(4) > input' ,
     CurtailmentOrderTarget : ' table > tbody > tr:nth-child(13) > td:nth-child(2) > input',
     CurtailmentOrderActual : ' table > tbody > tr:nth-child(13) > td:nth-child(3) > input',
     CurtailmentOrderDifference : ' table > tbody > tr:nth-child(13) > td:nth-child(4) > input' ,
     ReactivePowerTarget : 'table > tbody > tr:nth-child(14) > td:nth-child(2) > input' ,
     ReactivePowerActual : 'table > tbody > tr:nth-child(14) > td:nth-child(3) > input' ,
     ReactivePowerDifference : 'table > tbody > tr:nth-child(14) > td:nth-child(4) > input' ,
     PlantUptimeTarget : 'table > tbody > tr:nth-child(15) > td:nth-child(2) > input',
     PlantUptimeActual : 'table > tbody > tr:nth-child(15) > td:nth-child(3) > input',
     PlantUptimeDifference : 'table > tbody > tr:nth-child(15) > td:nth-child(4) > input' ,
     GridUptimeTarget : ' table > tbody > tr:nth-child(16) > td:nth-child(2) > input' ,
     GridUptimeActual : ' table > tbody > tr:nth-child(16) > td:nth-child(3) > input',
     GridUptimeDifference : ' table > tbody > tr:nth-child(16) > td:nth-child(4) > input' ,
     TrackerUptimeTarget :'table > tbody > tr:nth-child(17) > td:nth-child(2) > input',
     TrackerUptimeActual : 'table > tbody > tr:nth-child(17) > td:nth-child(3) > input',
     TrackerUptimeDifference : 'table > tbody > tr:nth-child(17) > td:nth-child(4) > input' ,
     TrackerGainTarget : 'table > tbody > tr:nth-child(18) > td:nth-child(2) > input',
     TrackerGainActual : 'table > tbody > tr:nth-child(18) > td:nth-child(3) > input' ,
     TrackerGainDifference : 'table > tbody > tr:nth-child(18) > td:nth-child(4) > input',
     DCUnbalancedLoadTarget : 'table > tbody > tr:nth-child(19) > td:nth-child(2) > input',
     DCUnbalanceLoadActual : 'table > tbody > tr:nth-child(19) > td:nth-child(3) > input',
     DCUnbalancedLoadDifference : 'table > tbody > tr:nth-child(19) > td:nth-child(4) > input' ,
     MeasuredTarget : 'table > tbody > tr:nth-child(20) > td:nth-child(2) > input',
     MeasuredActual : 'table > tbody > tr:nth-child(20) > td:nth-child(3) > input',
     MeasuredDifference : 'table > tbody > tr:nth-child(20) > td:nth-child(4) > input' ,
     RepoweringDelayTarget : 'table > tbody > tr:nth-child(21) > td:nth-child(2) > input',
     RepoweringDelayActual : 'table > tbody > tr:nth-child(21) > td:nth-child(3) > input',
     RepowerDelayDifference : 'table > tbody > tr:nth-child(21) > td:nth-child(4) > input' ,
     CapacityShortFallTarget : 'table > tbody > tr:nth-child(22) > td:nth-child(2) > input' ,
     CapacityShortFallActual : 'table > tbody > tr:nth-child(22) > td:nth-child(3) > input' ,
     CapacityShortFallDifference : 'table > tbody > tr:nth-child(22) > td:nth-child(4) > input' ,
     PRTarget : ' table > tbody > tr:nth-child(23) > td:nth-child(2) > input' ,
     PRActual : ' table > tbody > tr:nth-child(23) > td:nth-child(3) > input',
     PRDifference : ' table > tbody > tr:nth-child(23) > td:nth-child(4) > input' ,
     POATarget : ' table > tbody > tr:nth-child(24) > td:nth-child(2) > input',
     POAActual :' table > tbody > tr:nth-child(24) > td:nth-child(3) > input',
     POADifference :' table > tbody > tr:nth-child(24) > td:nth-child(4) > input' ,
     CreateSuccess: "Loss form added Successfully!!",
     Edit : 'tbody tr:nth-child(1) td:nth-child(7) nz-space:nth-child(1) div:nth-child(1) button:nth-child(1) span:nth-child(1)' ,
     UpdateSuccess : "Loss form Updated Succcessfully !!" ,
     Delete : 'tr:nth-child(2) > td:nth-child(7) > nz-space > div:nth-child(2) > button > span',
     DeleteSuccess : "Loss form Deleted Successfully" ,
    //Approve : 'tbody tr:nth-child(8) td:nth-child(7) nz-space:nth-child(1) div:nth-child(3) button:nth-child(1) span:nth-child(1)' ,
    ApprovedSuccess : 'Loss form Approved Successfully !!',
    InputPlantType : '#screencontainer div:nth-child(2) > nz-select > nz-select-top-control > nz-select-search > input' ,
    Plant :'div > form > nz-space > div:nth-child(3) > nz-select > nz-select-top-control > nz-select-search > input' ,
    InputPeriodicity : ' div:nth-child(4) > nz-select > nz-select-top-control > nz-select-search > input'
}
  export function enterRandomNumber(length){
    for (let randomNumber = 0; randomNumber<length; randomNumber++){
        return   randomNumber  = Math.floor(Math.random() * 9000) + 1000;
    }
  } 

export const jmrVariables = {
     add: '.ant-form > .ant-space > :nth-child(1) > .ant-btn > .ng-star-inserted' ,
     plantName :':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input',
     ExportkwH : ':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input',
     ImportkwH : ':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input' ,
    DocumentUpload :'.ng-tns-c234-194 > .ant-select > .ant-select-selector' 
    
}


  export const dailyKpivariables = {
        add : ' div.ant-card-extra.ng-star-inserted nz-space > div:nth-child(1) > button > span',
        columnVisbility: '.ant-btn-group > .ant-btn > .ng-star-inserted',
        create : ':nth-child(2) > .ant-btn > .ng-star-inserted',
        PlantType:':nth-child(1) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input',
        Plant : ':nth-child(2) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input',
        capacity :'.ant-input',
        AccufTarget :':nth-child(1) > :nth-child(2) > .input-field',
        AccufMeasured : ':nth-child(1) > :nth-child(3) > .input-field',
        POATarget : ':nth-child(2) > :nth-child(2) > .input-field',
        POAMeasured : ':nth-child(2) > :nth-child(3) > .input-field',
        kwhExportTarget : ':nth-child(3) > :nth-child(2) > .input-field',
        kwhExportMEasured : ':nth-child(3) > :nth-child(3) > .input-field' ,
        prTarget : ':nth-child(4) > :nth-child(2) > .input-field' ,
        prMeasured : ':nth-child(4) > :nth-child(3) > .input-field' ,
        paTarget : ':nth-child(5) > :nth-child(2) > .input-field' ,
        paMeasured : ':nth-child(5) > :nth-child(3) > .input-field' ,
        gaTarget : ':nth-child(6) > :nth-child(2) > .input-field' ,
        gaMeasured : ':nth-child(6) > :nth-child(3) > .input-field' ,
        taTarget : ':nth-child(7) > :nth-child(2) > .input-field' ,
        taMeasured : ':nth-child(7) > :nth-child(3) > .input-field' ,
        save : '.align-button-right > .ant-btn' ,
        CreateSuccess : 'Daily Kpi Report Created Successfully!!' ,
        AlreadyExist :'Manual KPI Already Exist with the date 04-06-2024 and plant ESEP10MW',
        Export : ':nth-child(4) > .ant-btn' ,
        okAlert :'.ant-modal-confirm-btns > .ant-btn-primary' ,
        BulkUpload : ':nth-child(5) > .ant-btn > .ng-star-inserted' ,
        FileImport : '#fileImportInput' ,
        Delete : ' tr:nth-child(7) > td:nth-child(23) > nz-space > div:nth-child(2) > button > span' ,
        Edit :' tr:nth-child(6) > td:nth-child(23) > nz-space > div:nth-child(1) > button > span'
  }
 
  
  export const solarLossVariables = {
  SelectPlant : 'form.ng-pristine > .ant-select > .ant-select-selector > .ant-select-selection-item' ,
  CreateLoss : '.ant-btn > .ng-star-inserted' , 
  TempartureLimit : '.ant-form-item-control-input',
  NearShaddingirrandiancelossValue : ':nth-child(1) > :nth-child(2) > .ant-input',
  NearShaddingirrandiancelossLosstype :':nth-child(2) > :nth-child(3) > .ant-select > .ant-select-selector',
  NearShaddingirrandiancelossControlability : '',
  NearShaddingirrandianceFacing : '' ,
  
  }

