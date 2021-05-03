import Axios from "axios";
import moment from "moment";

const url = process.env.REACT_APP_STOCK_API_URL;
const secret = process.env.REACT_APP_STOCK_API_SECRET;

export const getStockPrice = async (company, database) => {
  let results = [];
  if (company) {
    results = await Axios.get(
      `${url}/${database}/${company}/data.json?limit=1000&api_key=${secret}`
    );
  }
  return results;
};

export const getStockPriceRange = async (company, database, from, to) => {
  let results = [];
  if (company && to >= from) {
    results = await Axios.get(
      `${url}/${database}/${company}/data.json?limit=10000&start_date=${from}&end_date=${to}&order=DESC&api_key=${secret}`
    );
  }
  return results;
};

export const getDatasets = async () => {
  const start_date = moment().subtract(2, "months");
  return await Axios.get(
    `${url}.json?database_code=CHRIS&start_date=${start_date}&api_key=${secret}`
  );
};
