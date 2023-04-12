function updateLogs() {
  Logger.log("Registering log...");  
  var now = new Date();
  var user = Session.getActiveUser().getEmail();

  globalThis.logs_sheet.getRange('2:2').activate();
  globalThis.logs_sheet.insertRowsBefore(globalThis.logs_sheet.getActiveRange().getRow(), 1);  
  globalThis.logs_sheet.getRange('A2').setValue(now);
  globalThis.logs_sheet.getRange('B2').setValue(globalThis.rows.length);
  globalThis.logs_sheet.getRange('C2').setValue(user);
  globalThis.logs_sheet.getRange('D2').setValue(globalThis.start_running);
  globalThis.logs_sheet.getRange('E2').setValue(globalThis.end_running);

  globalThis.logs_sheet.getRangeList(["A:A", "D:D", "E:E"]).setNumberFormat('yyyy"-"mm"-"dd" "hh":"mm":"ss');

  Logger.log("All work done at "+ now);
}