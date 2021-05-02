import Axios from "axios";

const url = process.env.REACT_APP_STOCK_API_URL;
const secret = process.env.REACT_APP_STOCK_API_SECRET;

export const getStockPrice = async (company) => {
  let results = [];
  if (company) {
    results = await Axios.get(
      `${url}/${company}/data.json?limit=1000&api_key=${secret}`
    );
  }
  return results;
};

export const getStockPriceRange = async (company, from, to) => {
  let results = [];
  if (company && to >= from) {
    results = await Axios.get(
      `${url}/${company}/data.json?limit=1000&start_date=${from}&end_date=${to}&order=DESC&api_key=${secret}`
    );
  }
  return results;
};
