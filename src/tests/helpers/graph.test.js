import { format, getCompanyDetails, latestDate, formatDataset } from "../../helpers/graph";
import companies from "../../data/companies.json";

const d = {
  column_names: [
    "Date",
    "Open",
    "High",
    "Low",
    "Last",
    "Volume",
    "Open Interest",
  ],
  end_date: "2018-03-27",
  frequency: "daily",
  limit: 1000,
  start_date: "1984-09-07",
  columns: [
    "Date",
    "Open",
    "High",
    "Low",
    "Close",
    "Volume",
    "Ex-Dividend",
    "Split Ratio",
    "Adj. Open",
    "Adj. High",
    "Adj. Low",
    "Adj. Close",
    "Adj. Volume",
  ],
  data: [
    [
      "2018-03-27",
      26.775,
      27.2,
      26.775,
      27.2,
      3345,
      0,
      1,
      26.775,
      27.2,
      26.775,
      27.2,
      3345,
    ],
  ],
};

describe("#format", () => {
  test("it should return correct output", () => {
    expect(format(d)[0].close).toBe(27.2);
    expect(format(d)[0].open).toBe(26.775);
    expect(format(d)[0].high).toBe(27.2);
    expect(format(d)[0].volume).toBe(3345);
    expect(format(d)[0].date).toBe("27 Mar 2018");
  });
});

describe("#getCompanyDetails", () => {
  test("it should return correct output", () => {
    const company = getCompanyDetails("SSMF F", companies);
    expect(company.longname).toBe("SFC Energy AG");
    expect(company.status).toBe("Active");
    expect(company.country).toBe("DEU");
  });
});

describe("#latestDate", () => {
  test("it should return correct output", () => {
    const date = latestDate(d);
    expect(date).toBe("2018-03-27");
  });
});

describe("#formatDataset", () => {
  const data = [
    {
      column_names: [
        "Date",
        "Open",
        "High",
        "Low",
        "Last",
        "Volume",
        "Open Interest",
      ],
      database_code: "CHRIS",
      database_id: 596,
      dataset_code: "MGEX_IH1",
      description:
        "Historical Futures Prices: Minneapolis HRWI Hard Red Wheat Futures, Continuous Contract #1. Non-adjusted price based on spot-month continuous contract calculations. Raw data from MGEX.",
      frequency: "daily",
      id: 9774107,
      name:
        "Minneapolis HRWI Hard Red Wheat Futures, Continuous Contract #1 (IH1) (Front Month)",
      newest_available_date: "2021-04-29",
      oldest_available_date: "2005-01-03",
      premium: false,
      refreshed_at: "2021-05-03T18:28:13.999Z",
      type: "Time Series",
    },
  ];
  const formatted = formatDataset(data);

  test("data should be formatted correctly", () => {
    expect(formatted[0].ticker).toBe(data[0].dataset_code);
    expect(formatted[0].longname).toBe(data[0].name);
  });
});
