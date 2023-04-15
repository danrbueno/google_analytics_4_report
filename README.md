# google_analytics_4_report
The goal of this Google Apps Script project is:
- Run a report of a Google Analytics 4 property ID using Google Analytics Data API (GA4)
- Create / update a sheet with the report in Google Spreadsheet.

API reference:
https://developers.google.com/analytics/devguides/reporting/data/v1/rest?hl=en

More samples:
https://developers.google.com/apps-script/advanced/analyticsdata

Set the script properties in "Project Settings" >> "Script Properties":

- ga_property_id: 
Google Analytics Property ID. Set this property named ga_property_id on "Project Settings" in Google Apps Script.

- dimensions:
The dimensions from Google Analytics you want in the report.
Set them separated with ';'.
For example: date; eventName; defaultChannelGroup
To see all the API dimensions, please visit:
https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema 

- metrics:
The metrics from Google Analytics you want in the report.
Set them separated with ';'.
For example: conversions; screenPageViews; sessions
To see all the API metrics, please visit:
https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema 

- start_date:
The inclusive start date for the query in the format YYYY-MM-DD. Cannot be after endDate. The format NdaysAgo, yesterday, or 
today is also accepted, and in that case, the date is inferred based on the property's reporting time zone.
Reference:
https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/DateRange?hl=en

- end_date:
The inclusive end date for the query in the format YYYY-MM-DD. Cannot be before startDate. The format NdaysAgo, yesterday,
or today is also accepted, and in that case, the date is inferred based on the property's reporting time zone.
Reference:
https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/DateRange?hl=en

- spreadsheet_id: 
The Google Spreadsheet ID where you want to see the report.

- report_sheet:
The page in the spreadsheet where you want to see the report.

- logs_sheet:
The page in the spreadsheet where you want to see the script logs.
