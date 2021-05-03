import PropTypes from "prop-types";
import { Select, Button } from "antd";
import companies from "../../../data/companies.json";

const SelectCompany = ({ changed, pending, onSearch }) => {
  return (
    <div className="search-filters">
      <Select
        onChange={changed}
        placeholder="Search to Select"
        optionFilterProp="children"
        loading={pending}
        className="search-filters__dropdown"
        showSearch
        allowClear
      >
        {companies
          .filter(
            (x) => x.ticker.toString() && !x.ticker.toString().indexOf(" ") >= 0
          )
          .map((x, i) => (
            <Select.Option key={i} value={x.ticker}>
              {x.longname}
            </Select.Option>
          ))}
      </Select>
      <Button type="primary" loading={pending} onClick={onSearch}>
        Go!
      </Button>
    </div>
  );
};

SelectCompany.prototype = {
  changed: PropTypes.func,
  pending: PropTypes.bool,
  onSearch: PropTypes.func,
};

export default SelectCompany;
