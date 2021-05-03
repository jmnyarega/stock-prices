import { useState, useEffect } from "react";

// components 
import NavBar from "./Components/Nav";
import TopFilters from "./Components/Filters";
import CompanyDetails from "./Components/CompanyDetails";
import Results from "./Components/Results";
import DateRange from "./Components/DateRange";
import AlertPopup from "./Components/common/Alert";

// helpers
import utils from "./helpers";

function App() {
  // my state
  const [stockPrices, setStockPrices] = useState([]);
  const [filteredSp, setFilteredSp] = useState([]);
  const [company, setCompany] = useState("");
  const [tag, setTag] = useState("high");
  const [pending, setPending] = useState(false);
  const [beginDate, setBeginDate] = useState();
  const [error, setError] = useState("");
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  const clear = () => {
    setPending(true);
    setError("");
    setFilteredSp([]);
    setBeginDate("");
  };

  const getStockPrice = async () => {
    clear();
    try {
      const res = await utils.requests.getStockPrice(company);
      setStockPrices(res.data?.dataset_data);
      setPending(false);
      setBeginDate(res.data?.dataset_data);
    } catch (err) {
      setPending(false);
      setError("No data found, Please try a different company.");
    }
  };

  const getStockPriceRange = async () => {
    clear();
    try {
      const res = await utils.requests.getStockPriceRange(company, from, to);
      setStockPrices(res.data?.dataset_data);
      setPending(false);
    } catch (err) {
      setPending(false);
      setError("No data found, Please try a different date range.");
    }
  };

  const changed = (value) => setCompany(value);

  useEffect(() => {
    if (stockPrices?.data?.length) {
      setFilteredSp(utils.graph.format(stockPrices));
    }
  }, [stockPrices]);

  const onCompanySelectSubmit = () => getStockPrice();
  const onDateRangeSubmit = () => getStockPriceRange();

  const handleTagChange = (evt) => setTag(evt.target.value);
  const onFromHandler = (_, date) => setFrom(date);
  const onToHandler = (_, date) => setTo(date);

  return (
    <main className="container">
      <NavBar />
      <AlertPopup error={error} type="error" />
      <TopFilters
        handleTagChange={handleTagChange}
        changed={changed}
        tag={tag}
        pending={pending}
        onSearch={onCompanySelectSubmit}
      />
      <CompanyDetails data={utils.graph.getCompanyDetails(company)} />
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
