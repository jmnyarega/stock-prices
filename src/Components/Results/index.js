import { Tabs } from "antd";
import Graph from "./Graph";
import ResultsTable from "./Table";

const Result = ({ type, filteredSp }) => {
  return (
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

export default Result;
