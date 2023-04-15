function getData() {  
  propertyId = globalThis.properties.getProperty("ga_property_id");

  try {
    dimensions_list = globalThis.properties.getProperty("dimensions").split(";");
    metrics_list = globalThis.properties.getProperty("metrics").split(";");

    dimensions_objs = [];
    metrics_objs = [];

    for (var i = 0; i < dimensions_list.length; i = i + 1) {
      dimensions_objs[i] = AnalyticsData.newDimension();
      dimensions_objs[i].name = dimensions_list[i].trim();
    }        

    for (var i = 0; i < metrics_list.length; i = i + 1) {
      metrics_objs[i] = AnalyticsData.newMetric();
      metrics_objs[i].name = metrics_list[i].trim();
    }

    const dateRanges = AnalyticsData.newDateRange();
    dateRanges.startDate = globalThis.properties.getProperty("start_date");
    dateRanges.endDate = globalThis.properties.getProperty("end_date");

    Logger.log("Requesting report (date range: " + dateRanges.startDate + " -> " + dateRanges.endDate + ")...")

    const request = AnalyticsData.newRunReportRequest();
    request.dimensions = [dimensions_objs];
    request.metrics = [metrics_objs];
    
    request.dateRanges = dateRanges;

    request.limit = 100000;    

    Logger.log("Running report from Google Analytics (property ID = " + propertyId + ")...")

    const report = AnalyticsData.Properties.runReport(request,
        'properties/' + propertyId);
    if (!report.rows) {
      throw new Error("No rows returned.");
    }

    // Append the headers.
    const dimensionHeaders = report.dimensionHeaders.map(
        (dimensionHeader) => {
          return dimensionHeader.name;
        });
    const metricHeaders = report.metricHeaders.map(
        (metricHeader) => {
          return metricHeader.name;
        });
    globalThis.headers = [...dimensionHeaders, ...metricHeaders];

    // Append the results.
    globalThis.rows = report.rows.map((row) => {
      const dimensionValues = row.dimensionValues.map(
          (dimensionValue) => {
            return dimensionValue.value;
          });
      const metricValues = row.metricValues.map(
          (metricValues) => {
            return metricValues.value;
          });
      return [...dimensionValues, ...metricValues];
    });

    //Sort rows by data
    globalThis.rows = globalThis.rows.sort(sortByDate);

    Logger.log("Google Analytics data returned successfully!");
    Logger.log("headers: " + headers.join(", "));
    Logger.log(rows.length + " rows returned!");

  } catch (error) {
    throw new Error("Failed to get Google Analytics data: " + error.message);    
  }
}
