import moment from "moment";
import companies from "../data/companies.json";

export const format = (d) =>
  d.data?.map((x) => ({
    date: moment(x[0]).format("DD MMM"),
    year: moment(x[0]).format("YYYY"),
    dividend: x[6],
    open: x[1],
    volume: x[5],
    low: x[3],
    close: x[4],
    high: x[2],
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
