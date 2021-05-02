const CompanyDetails = ({ data }) => {
  return (
    <div className="company-details">
      <p className="company__name">
        Name: <span>{data?.longname || "-"}</span>
      </p>
      <p className="company__status">
        Status: <span>{data?.status || "-"}</span>
      </p>
      <p className="company__country">
        Country: <span>{data?.country || "-"}</span>
      </p>
    </div>
  );
};

export default CompanyDetails;
