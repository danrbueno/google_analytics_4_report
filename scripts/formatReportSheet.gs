function formatReportSheet() {
    try {
      Logger.log("Formatting spreadsheet...");

      Logger.log("Formatting field 'date' to 'YYYY-mm-dd' format...");
      var dates_range = globalThis.report_sheet.getRange("A2:A");
      var dates = dates_range.getValues();
      var formatted_dates = [];
      
      dates.forEach(function(cell_content) {
        var cell_text = cell_content.toString();
        var date = cell_text.substring(0, 4) + "-" + cell_text.substring(4, 6) + "-" + cell_text.substring(6, 8);
        formatted_dates.push([date]);
      });
      
      dates_range.setValues(formatted_dates);
      globalThis.report_sheet.getRange("A:A").setNumberFormat('yyyy"-"mm"-"dd');

      Logger.log("Spreadsheet formatted!!!")
    }
    catch (error) {
      throw new Error("Failed to format spreadsheet: " + error.message);
  }
}
