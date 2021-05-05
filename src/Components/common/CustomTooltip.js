import PropTypes from "prop-types";

const CustomTooltip = ({ active, payload, label, type }) => {
  if (active && payload) {
    return (
      <div className="custom-tooltip">
        <p className="label custom-tooltip__date">{`${label}`}</p>
        {type === "high" && (
          <p className="label">{`High: ${payload[0]?.payload[type]}`}</p>
        )}
        {type === "low" && (
          <p className="label">{`Low:  ${payload[0]?.payload[type]}`}</p>
        )}
        {type === "open" && (
          <p className="label">{`Open: ${payload[0]?.payload[type]}`}</p>
        )}
        {type === "close" && (
          <p className="label">{`Close: ${payload[0]?.payload[type]}`}</p>
        )}
        {type === "volume" && (
          <p className="label">{`Volume: ${payload[0]?.payload[type]}`}</p>
        )}
        {type === "dividend" && (
          <p className="label">{`Ex-Dividend: ${payload[0]?.payload[type]}`}</p>
        )}
      </div>
    );
  }
  return null;
};

CustomTooltip.prototype = {
  active: PropTypes.bool,
  payload: PropTypes.object,
  label: PropTypes.string,
};

export default CustomTooltip;
