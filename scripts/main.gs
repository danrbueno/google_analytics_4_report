function main() {
  globalThis.start_running = new Date();
  getData();
  data = {"headers": globalThis.headers, "rows": globalThis.rows};
  updateReport(data);
  formatReportSheet();  
  globalThis.end_running = new Date();
  updateLogs();
}