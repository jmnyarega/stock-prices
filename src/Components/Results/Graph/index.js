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

import CustomTooltip from "../../common/CustomTooltip";

const Graph = ({ type, filteredSp }) => {
  return (
    <div className="graph">
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={filteredSp}>
          <Line
            type="monotone"
            dataKey="open"
            dot={null}
            stroke="black"
            hide={type !== "open"}
          />
          <Line
            type="monotone"
            dataKey="low"
            dot={null}
            stroke="red"
            hide={type !== "low"}
          />
          <Line
            type="monotone"
            dataKey="high"
            dot={null}
            stroke="green"
            hide={type !== "high"}
          />
          <Line
            type="monotone"
            dataKey="volume"
            dot={null}
            stroke="#FFBF00"
            hide={type !== "volume"}
          />
          <Line
            type="monotone"
            dataKey="close"
            dot={null}
            stroke="blue"
            hide={type !== "close"}
          />
          <Line
            type="monotone"
            dataKey="dividend"
            dot={null}
            fontSize={20}
            stroke="#665D1E"
            hide={type !== "dividend"}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="date"  style={{ fontSize: "12px" }} />
          <YAxis allowDataOverflow />
          <Legend />
          <Tooltip content={<CustomTooltip type={type} />} />
          <Brush dataKey="date" height={25} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
