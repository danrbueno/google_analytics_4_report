/*
* Global variables for the entire project.
*/
var properties = PropertiesService.getScriptProperties();
var headers = [];
var rows = [];
var spreadsheet = SpreadsheetApp.openById(properties.getProperty("spreadsheet_id"))
var report_sheet = spreadsheet.getSheetByName(properties.getProperty("report_sheet"));
var logs_sheet = spreadsheet.getSheetByName(properties.getProperty("logs_sheet"));
var start_running = new Date();
var end_running = new Date();