import moment from "moment";
import companies from "../data/companies.json";

export const format = (d) =>
  d.data?.map((x) => ({
    date: moment(x[d.column_names.indexOf("Date")]).format("DD MMM YYYY"),
    dividend: x[d.column_names.indexOf("Ex-Dividend")] || 0,
    open: x[d.column_names.indexOf("Open")] || 0,
    volume: x[d.column_names.indexOf("Volume")] || 0,
    low: x[d.column_names.indexOf("Low")] || 0,
    close:
      x[d.column_names.indexOf("Close")] ||
      x[d.column_names.indexOf("Last")] ||
      0,
    high: x[d.column_names.indexOf("High")] || 0,
  }));

export const getCompanyDetails = (companyName, co = companies) =>
  co.find((x) => x.ticker && x.ticker === companyName);

export const latestDate = (data) => data.end_date;

export const formatDataset = (data) =>
  data.map((x) => ({
    databaseCode: x.database_code,
    ticker: x.dataset_code,
    longname: x.name,
  }));
