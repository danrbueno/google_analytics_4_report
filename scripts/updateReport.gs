function updateReport(data) {    
    try {
      Logger.log("Updating spreadsheet...")
      globalThis.report_sheet.clear();

      globalThis.report_sheet.appendRow(data.headers);

      globalThis.report_sheet.getRange(2, 1, data.rows.length, data.headers.length)
          .setValues(data.rows);

      Logger.log('Report spreadsheet updated: %s',
          globalThis.spreadsheet.getUrl());      
    }
    catch (error) {
      throw new Error("Failed to update spreadsheet: " + error.message);
  }

}
