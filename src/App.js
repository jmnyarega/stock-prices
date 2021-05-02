import { useState, useEffect } from "react";

// components 
import { Result, Alert } from "antd";
import SelectCompany from "./Components/Filters/Search";
import SelectType from "./Components/Filters/Types";
import CompanyDetails from "./Components/CompanyDetails";
import Results from "./Components/Results";
import DateRange from "./Components/DateRange";
import NavBar from "./Components/Nav";

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
      setError("No data found, Please try a different company.");
    }
  };

  const changed = (value) => setCompany(value);
  useEffect(() => {
    if (stockPrices?.data?.length) {
      setFilteredSp(utils.graph.format(stockPrices));
    }
  }, [stockPrices]);

  const handleTagChange = (evt) => setTag(evt.target.value);

  const onSubmit = () => getStockPriceRange();
  const onSearch = () => getStockPrice();

  const onFromHandler = (_, date) => setFrom(date);
  const onToHandler = (_, date) => setTo(date);

  return (
    <main>
      <NavBar />
      {error && (
        <Alert message={error} className="errors" type="error" closable />
      )}
      <div className="top-filters">
        <SelectCompany
          changed={changed}
          pending={pending}
          onSearch={onSearch}
        />
        <SelectType
          handleTagChange={handleTagChange}
          tag={tag}
          pending={pending}
        />
      </div>
      <CompanyDetails data={utils.graph.getCompanyDetails(company)} />
      {error ? (
        <Result status="404" title="404" subTitle={error} />
      ) : (
        <Results type={tag} filteredSp={filteredSp} />
      )}
      <div className="bottom-filters">
        <DateRange
          onSubmit={onSubmit}
          pending={pending}
          beginDate={beginDate}
          onFromHandler={onFromHandler}
          onToHandler={onToHandler}
        />
      </div>
    </main>
  );
}

export default App;
