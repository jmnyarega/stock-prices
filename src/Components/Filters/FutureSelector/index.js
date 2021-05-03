import PropTypes from "prop-types";
import { Checkbox } from "antd";

const FutureSelector = ({ handleFutureChange, selected, pending }) => {
  return (
    <div className="search-filters__future">
      <Checkbox
        onChange={handleFutureChange}
        disabled={pending}
        checked={selected}
      >
        Future Trends
      </Checkbox>
    </div>
  );
};

FutureSelector.prototype = {
  handleFutureChange: PropTypes.func,
  selected: PropTypes.bool,
  pending: PropTypes.bool,
};

export default FutureSelector;
