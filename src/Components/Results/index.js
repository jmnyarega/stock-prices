import PropTypes from "prop-types";
import { Tabs, Result } from "antd";
import Graph from "./Graph";
import ResultsTable from "./Table";

const Results = ({ type, filteredSp, error }) => {
  return error ? (
    <Result status="404" title="No Results Found" subTitle={error} />
  ) : (
    <div className="results">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Graph" key="1">
          <Graph type={type} filteredSp={filteredSp} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Table" key="2">
          <ResultsTable data={filteredSp} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

Results.prototype = {
  type: PropTypes.string,
  filteredSp: PropTypes.object,
  error: PropTypes.string,
};

export default Results;
