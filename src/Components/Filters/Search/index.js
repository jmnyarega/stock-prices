import PropTypes from "prop-types";

// components
import { Select, Button, Form, Checkbox } from "antd";

// data
import companies from "../../../data/companies.json";

const SelectCompany = ({
  changed,
  pending,
  onSearch,
  companies: cos,
  selected,
  handleFutureChange,
  company
}) => {
  let cmp;
  if (cos?.length) {
    cmp = cos;
  } else {
    cmp = companies;
  }
  return (
    <Form onFinish={onSearch} className="search-filters">
      <Form.Item label="Future Trend">
        <Checkbox
          onChange={handleFutureChange}
          disabled={pending}
          checked={selected}
          className="search-filters__checkbox"
          name="future"
        />
      </Form.Item>
      <Select
        onChange={changed}
        disabled={pending}
        className="search-filters__input"
        value={company}
        placeholder="Select Company..."
        showSearch
        allowClear
      >
        {cmp
          .filter(
            (x) => x.ticker.toString() && !x.ticker.toString().indexOf(" ") >= 0
          )
          .map((x, i) => (
            <Select.Option key={i} value={x.ticker}>
              {x.longname}
            </Select.Option>
          ))}
      </Select>
      <Button
        className="search-filters__button"
        type="primary"
        loading={pending}
        onClick={onSearch}
      >
        Go!
      </Button>
    </Form>
  );
};

SelectCompany.prototype = {
  changed: PropTypes.func,
  pending: PropTypes.bool,
  onSearch: PropTypes.func,
  companies: PropTypes.array,
  handleFutureChange: PropTypes.function,
  checkFuture: PropTypes.bool,
};

export default SelectCompany;
