import { render } from "@testing-library/react";

import CompanyDetails from "../../../Components/CompanyDetails";

describe("#CompanyDetails", () => {
  const data = {
    longname: "company-a",
    status: "active",
    country: "Ghana",
  };

  it("renders correctly", () => {
    const { queryByText } = render(<CompanyDetails data={data} />);
    expect(queryByText("company-a")).toBeTruthy();
    expect(queryByText("active")).toBeTruthy();
    expect(queryByText("Ghana")).toBeTruthy();
  });
});
