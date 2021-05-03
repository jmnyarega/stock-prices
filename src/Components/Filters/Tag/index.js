import { Radio } from "antd";

const Tag = ({ handleTagChange, tag, pending }) => {
  return (
    <Radio.Group
      onChange={handleTagChange}
      value={tag}
      className="search-filters__type-select"
      disabled={pending}
    >
      <Radio.Button value="open"> open </Radio.Button>
      <Radio.Button value="low">low</Radio.Button>
      <Radio.Button value="high">high</Radio.Button>
      <Radio.Button value="close">close</Radio.Button>
      <Radio.Button value="volume"> volume </Radio.Button>
      <Radio.Button value="dividend"> Ex-Dividend </Radio.Button>
    </Radio.Group>
  );
};

export default Tag;
