import { useState, useEffect } from "react";
import Axios from "axios";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";

import comp from "./data/companies.json";

const format = (d, value = "high") =>
  d.data?.map((x) => {
    const obj = { name: moment(x[0]).format("DD MMM"), year: moment(x[0]).format("YYYY") };
    if (value === "high") {
      obj.high = x[2];
    }
    if (value === "low") {
      obj.low = x[3];
    }
    if (value === "close") {
      obj.close = x[4];
    }
    return obj;
  });

const calculateDomain = (data) => {
  const high = data.data?.map((x) => x[2]);
  const low = data.data?.map((x) => x[3]);
  const close = data.data?.map((x) => x[4]);
  const domains = {};
  if (low && close && high) {
    domains.low = [Math.min(...low), Math.max(...low)];
    domains.high = [Math.min(...high), Math.max(...high)];
    domains.close = [Math.min(...close), Math.max(...close)];
  }
  return domains;
};

function App() {
  // my state
  const [companies] = useState(comp);
  const [stockPrices, setStockPrices] = useState([]);
  const [filteredSp, setFilteredSp] = useState([]);
  const [domains, setDomains] = useState();
  const [label, setLabel] = useState("high");

  const getStockPrice = (event) => {
    Axios.get(
      `${process.env.REACT_APP_STOCK_API_URL}/${event.target.value}/data.json?limit=100&api_key=${process.env.REACT_APP_STOCK_API_SECRET}`
    )
      .then((res) => {
        setStockPrices(res.data?.dataset_data);
        setDomains(calculateDomain(res.data?.dataset_data));
      })
      .catch((err) => console.log(err));
  };

  const changeLabel = (value) => {
    setLabel(value);
  };

  useEffect(() => {
    if (stockPrices?.data?.length) {
      setFilteredSp(format(stockPrices, label));
    }
  }, [stockPrices, label]);

  return (
    <main>
      <div className="search-filters">
        <select className="search-filters__dropdown" onChange={getStockPrice}>
          <option>Select Company</option>
          {companies.map((x, i) => (
            <option key={i} value={x.ticker}>
              {x.longname}
            </option>
          ))}
        </select>
      </div>
      <button onClick={() => changeLabel("high")}> high </button>
      <button onClick={() => changeLabel("close")}> close </button>
      <button onClick={() => changeLabel("low")}> low </button>
      <div className="results">
        <div className="graph">
          <ResponsiveContainer width="100%" height={500}>
            <LineChart
              width={500}
              height={500}
              data={filteredSp}
              margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
            >
              <Line type="monotone" dataKey="year" dot={null} stroke="maroon" />
              <Line type="monotone" dataKey="high" dot={null} stroke="green" />
              <Line type="monotone" dataKey="low" dot={null} stroke="red" />
              <Line type="monotone" dataKey="close" dot={null} stroke="blue" />
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <XAxis dataKey="name" style={{ fontSize: "12px" }} />
              <YAxis domain={domains && domains[label]} allowDataOverflow />
              <Legend />
              <Tooltip />
              <Brush
                dataKey="name"
                height={30}
                onDragOver={(e) => console.log(e)}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="table">
          table
        </div>
        <div className="date-range">
          <div className="from">
            <input type="date" />
          </div>
          <div className="to">
            <input type="date" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
