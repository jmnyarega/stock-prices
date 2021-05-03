import { render } from "@testing-library/react";

import NavBar from "../../../Components/Nav";

describe("#NavBar", () => {
  it("renders correctly", () => {
    const obj = render(<NavBar />);
    expect(obj.queryByText("Stock")).toBeTruthy();
    expect(obj.queryByText("Exchange")).toBeTruthy();
  });
});
