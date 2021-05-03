import { render } from "@testing-library/react";

import CustomTooltip from ".././../../../Components/common/CustomTooltip";

describe("#CustomTooltip", () => {
  const data = {
    active: true,
    payload: [
      {
        payload: {
          high: 102,
          low: 98,
          open: 100,
          close: 101,
          volume: 500,
          dividend: 0,
          year: "2018",
        },
      },
    ],
    label: "12-12-2018",
    type: "high",
  };

  it("display `high`", () => {
    const { queryByText } = render(<CustomTooltip {...data} />);
    expect(queryByText(`High: ${data.payload[0].payload.high}`)).toBeTruthy();
  });

  it("display `low`", () => {
    data.type = "low";
    const { queryByText } = render(<CustomTooltip {...data} />);
    expect(queryByText(`Low: ${data.payload[0].payload.low}`)).toBeTruthy();
  });

  it("display `Open`", () => {
    data.type = "open";
    const { queryByText } = render(<CustomTooltip {...data} />);
    expect(queryByText(`Open: ${data.payload[0].payload.open}`)).toBeTruthy();
  });

  it("display `Close`", () => {
    data.type = "close";
    const { queryByText } = render(<CustomTooltip {...data} />);
    expect(queryByText(`Close: ${data.payload[0].payload.close}`)).toBeTruthy();
  });

  it("display `Volume`", () => {
    data.type = "volume";
    const { queryByText } = render(<CustomTooltip {...data} />);
    expect(
      queryByText(`Volume: ${data.payload[0].payload.volume}`)
    ).toBeTruthy();
  });

  it("display `Dividend`", () => {
    data.type = "dividend";
    const { queryByText } = render(<CustomTooltip {...data} />);
    expect(
      queryByText(`Ex-Dividend: ${data.payload[0].payload.dividend}`)
    ).toBeTruthy();
  });

  it("returns null", () => {
    data.type = "dividend";
    data.active = false;
    const { queryByText } = render(<CustomTooltip {...data} />);
    expect(
      queryByText(`Ex-Dividend: ${data.payload[0].payload.dividend}`)
    ).toBeFalsy();
  });
});
