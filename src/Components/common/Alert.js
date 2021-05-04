import PropTypes from "prop-types";
import { Alert } from "antd";

const AlertBadge = ({ error, message, type }) => {
  return error || message ? (
    <Alert
      message={error || message}
      className="alert"
      type={type}
      closable
      showIcon
    />
  ) : null;
};

AlertBadge.prototype = {
  error: PropTypes.obj,
  message: PropTypes.string,
  type: PropTypes.string,
};

export default AlertBadge;
