import { render } from "@testing-library/react";

import CompanyDetails from "../../../Components/CompanyDetails";

describe("#CompanyDetails", () => {
  const props = {
    data: {
      longname: "company-a",
      status: "active",
      country: "Ghana",
    },
    checkFuture: false,
    company: {
      longname: "company-a",
    },
  };

  it("renders correctly", () => {
    const { queryByText } = render(<CompanyDetails {...props} />);
    expect(queryByText("company-a")).toBeTruthy();
    expect(queryByText("active")).toBeTruthy();
    expect(queryByText("Ghana")).toBeTruthy();
  });

  it("checkFuture true", () => {
    const obj = render(<CompanyDetails {...props} checkFuture />);
    expect(obj.queryByText(`Future Trends of ${props.company.longname}`)).toBeTruthy();
  });
});
