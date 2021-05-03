import PropTypes from "prop-types";
import { Table } from "antd";

const columns = [
  {
    title: "Date",
    className: "text-0-8",
    render: (d) => `${d.date} ${d.year}`,
  },
  {
    title: "Open",
    dataIndex: "open",
    key: "open",
    className: "text-0-8",
  },
  {
    title: "Low",
    dataIndex: "low",
    key: "low",
  },
  {
    title: "High",
    dataIndex: "high",
    key: "low",
  },

  {
    title: "Dividend",
    dataIndex: "dividend",
    key: "dividend",
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "Volume",
    dataIndex: "volume",
    key: "volume",
  },
];

const ResultsTable = ({ data }) => {
  return (
    <div className="table">
      <Table
        dataSource={data}
        size="small"
        columns={columns}
        rowKey={(d) => `${d.date} ${d.year}`}
        bordered
      />
    </div>
  );
};

ResultsTable.prototype = { data: PropTypes.obj };

export default ResultsTable;
