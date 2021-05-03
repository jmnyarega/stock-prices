import PropTypes from "prop-types";

import SelectCompany from "./Search";
import SelectTag from "./Tag";

const TopFilters = ({
  changed,
  pending,
  onSearch,
  handleTagChange,
  tag,
  handleFutureChange,
  checkFuture,
  companies,
  company
}) => {
  return (
    <div className="top-filters">
      <SelectCompany
        changed={changed}
        pending={pending}
        onSearch={onSearch}
        companies={companies}
        handleFutureChange={handleFutureChange}
        selected={checkFuture}
        company={company}
      />
      <SelectTag
        handleTagChange={handleTagChange}
        tag={tag}
        pending={pending}
      />
    </div>
  );
};

TopFilters.propTypes = {
  changed: PropTypes.func,
  pending: PropTypes.bool,
  onSearch: PropTypes.func,
  handleTagChange: PropTypes.func,
  tag: PropTypes.string,
  handleFutureChange: PropTypes.func,
  checkFuture: PropTypes.bool,
  companies: PropTypes.array,
};

export default TopFilters;
