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

export default TopFilters;
