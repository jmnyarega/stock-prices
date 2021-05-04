import { useState, useEffect } from "react";

// components 
import NavBar from "./Components/Nav";
import TopFilters from "./Components/Filters";
import CompanyDetails from "./Components/CompanyDetails";
import Results from "./Components/Results";
import DateRange from "./Components/DateRange";
import AlertBadge from "./Components/common/Alert";

// helpers
import utils from "./helpers";

function App() {
  // my state
  const [stockPrices, setStockPrices] = useState([]);
  const [filteredSp, setFilteredSp] = useState([]);
  const [company, setCompany] = useState("");
  const [companies, setCompanies] = useState([]);
  const [tag, setTag] = useState("high");
  const [pending, setPending] = useState(false);
  const [beginDate, setBeginDate] = useState();
  const [error, setError] = useState("");
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [checkFuture, setCheckFuture] = useState(false);
  const [database, setDatabase] = useState("WIKI");

  const clear = () => {
    setPending(true);
    setError("");
    setFilteredSp([]);
    setBeginDate("");
    setFilteredSp([]);
    !checkFuture && setCompanies([]);
    database === "WIKI" && setCheckFuture(false);
  };

  const getStockPrice = async () => {
    clear();
    setPending(true);
    try {
      const res = await utils.requests.getStockPrice(company, database);
      setStockPrices(res.data?.dataset_data);
      setPending(false);
      setBeginDate(res.data?.dataset_data.end_date);
    } catch (err) {
      setPending(false);
      setError("No data found, Please try a different company.");
    }
  };

  const getStockPriceRange = async () => {
    clear();
    try {
      const res = await utils.requests.getStockPriceRange(
        company,
        database,
        from,
        to
      );
      setStockPrices(res.data?.dataset_data);
      setPending(false);
      setBeginDate(res.data?.dataset_data.end_date);
    } catch (err) {
      setPending(false);
      setError("No data found, Please try a different date range.");
    }
  };

  const getFutureDataSets = async () => {
    setPending(true);
    try {
      const res = await utils.requests.getDatasets();
      setCompanies(utils.graph.formatDataset(res.data.datasets));
      setPending(false);
    } catch (err) {
      setPending(false);
      setError("No data found, Please try again.");
    }
  };

  const changed = (value) => setCompany(value);
  const onCheckFuture = () => {
    setCheckFuture(!checkFuture);
  };

  useEffect(() => {
    stockPrices?.data?.length && setFilteredSp(utils.graph.format(stockPrices));
  }, [stockPrices]);

  useEffect(() => {
    if (checkFuture) {
      getFutureDataSets();
      setDatabase("CHRIS");
    } else {
      setDatabase("WIKI");
    }
    setCompanies([]);
    setCompany("");
  }, [checkFuture]);

  const onCompanySelectSubmit = () => getStockPrice();
  const onDateRangeSubmit = () => getStockPriceRange();

  const handleTagChange = (evt) => setTag(evt.target.value);
  const onFromHandler = (_, date) => setFrom(date);
  const onToHandler = (_, date) => setTo(date);

  return (
    <main>
      <NavBar />
      <AlertBadge error={error} type="error" />
      <TopFilters
        handleTagChange={handleTagChange}
        changed={changed}
        tag={tag}
        pending={pending}
        onSearch={onCompanySelectSubmit}
        handleFutureChange={onCheckFuture}
        checkFuture={checkFuture}
        companies={companies}
        company={company}
      />
      <CompanyDetails
        data={utils.graph.getCompanyDetails(company)}
        checkFuture={checkFuture}
        company={companies?.find((x) => x.ticker === company)}
      />
      <Results type={tag} filteredSp={filteredSp} error={error} />
      <DateRange
        onSubmit={onDateRangeSubmit}
        pending={pending}
        beginDate={beginDate}
        onFromHandler={onFromHandler}
        onToHandler={onToHandler}
      />
    </main>
  );
}

export default App;
