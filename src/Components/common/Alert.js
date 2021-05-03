import PropTypes from "prop-types";
import { Alert } from "antd";

const AlertPopup = ({ error, message, type }) => {
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

AlertPopup.prototype = {
  error: PropTypes.obj,
  message: PropTypes.string,
  type: PropTypes.string,
};

export default AlertPopup;
