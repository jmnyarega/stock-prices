import { format, getCompanyDetails, latestDate } from "./graph";
import companies from "../data/companies.json";

const d = {
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
    expect(format(d)[0].date).toBe("27 Mar");
    expect(format(d)[0].year).toBe("2018");
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
