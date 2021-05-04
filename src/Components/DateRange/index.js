import PropTypes from "prop-types";
import { DatePicker, Button, Form } from "antd";
import moment from "moment";

function disabledDate(current, date) {
  if (date) {
    return current && current > moment(date, "YYYY-MM-DD");
  }
}

const DateRange = ({
  pending,
  onSubmit,
  onFromHandler,
  onToHandler,
  beginDate,
}) => {
  return (
    <div className="date-range">
      <Form onFinish={onSubmit}>
        <Form.Item
          label="From"
          name="from"
          rules={[
            { required: true, message: "Date is required." },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || moment(getFieldValue("to")) >= moment(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "start date should be less than end date."
                );
              },
            }),
          ]}
        >
          <DatePicker
            size="small"
            disabledDate={(_) => disabledDate(_, beginDate)}
            onChange={onFromHandler}
          />
        </Form.Item>
        <Form.Item
          label="To"
          name="to"
          rules={[{ required: true, message: "Date is required." }]}
        >
          <DatePicker
            size="small"
            disabledDate={(_) => disabledDate(_, beginDate)}
            onChange={onToHandler}
          />
        </Form.Item>
        <Form.Item>
          <Button
            size="small"
            type="primary"
            htmlType="submit"
            loading={pending}
          >
            Go
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

DateRange.prototype = {
  pending: PropTypes.bool,
  onSubmit: PropTypes.func,
  onFromHandler: PropTypes.func,
  onToHandler: PropTypes.func,
  beginDate: PropTypes.string,
}

export default DateRange;
