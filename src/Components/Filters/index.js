import PropTypes from 'prop-types';

import SelectCompany from "./Search";
import SelectTag from "./Tag";

const TopFilters = ({ changed, pending, onSearch, handleTagChange, tag }) => {
  return (
    <div className="top-filters">
      <SelectCompany changed={changed} pending={pending} onSearch={onSearch} />
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
};

export default TopFilters;
