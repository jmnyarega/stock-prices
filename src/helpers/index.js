import { format, getCompanyDetails, formatDataset } from "./graph";
import { getStockPrice, getStockPriceRange, getDatasets } from "./requests";

const utils = {
  graph: {
    format,
    getCompanyDetails,
    formatDataset,
  },

  requests: {
    getStockPrice,
    getStockPriceRange,
    getDatasets,
  },
};

export default utils;
