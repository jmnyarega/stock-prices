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

export default AlertPopup;
