import PropTypes from "prop-types";

const CompanyDetails = ({ data, checkFuture, company }) => {
  return (
    <div className="company-details">
      {checkFuture && company ? (
        <p className="future__trend">Future Trends of {company.longname}</p>
      ) : (
        <>
          <p className="company__name">
            Name: <span>{data?.longname || "-"}</span>
          </p>
          <p className="company__status">
            Status: <span>{data?.status || "-"}</span>
          </p>
          <p className="company__country">
            Country: <span>{data?.country || "-"}</span>
          </p>
        </>
      )}
    </div>
  );
};

CompanyDetails.prototype = {
  data: PropTypes.object,
  company: PropTypes.string,
};

export default CompanyDetails;
