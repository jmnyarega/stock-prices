import { format, getCompanyDetails } from "./graph";
import { getStockPrice, getStockPriceRange } from "./requests";

const utils = {
  graph: {
    format,
    getCompanyDetails,
  },

  requests: {
    getStockPrice,
    getStockPriceRange,
  },
};

export default utils;
