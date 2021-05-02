  const CustomTooltip = ({ active, payload, label, type }) => {
    if (active && payload) {
      return (
        <div className="custom-tooltip">
          <p className="label custom-tooltip__date">{`${label} ${payload[0].payload["year"]}`}</p>
          {type === "high" && (
            <p className="label">{`High: ${payload[0].payload["high"]}`}</p>
          )}
          {type === "low" && (
            <p className="label">{`Low:  ${payload[0].payload["low"]}`}</p>
          )}
          {type === "open" && (
            <p className="label">{`Open: ${payload[0].payload["open"]}`}</p>
          )}
          {type === "close" && (
            <p className="label">{`Close: ${payload[0].payload["close"]}`}</p>
          )}
          {type === "volume" && (
            <p className="label">{`Volume: ${payload[0].payload["volume"]}`}</p>
          )}
          {type === "dividend" && (
            <p className="label">{`Ex-Dividend: ${payload[0].payload["dividend"]}`}</p>
          )}
        </div>
      );
    }
    return null;
  };

  export default CustomTooltip;
