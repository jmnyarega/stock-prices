import { DatePicker, Button, Form } from "antd";
import moment from "moment";

function disabledDate(current) {
  return current && current > moment("2018-03-27", "YYYY-MM-DD");
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
      <Form
        onFinish={onSubmit}
        initialValues={{
          from: moment(beginDate || new Date(), "YYYY-MM-DD"),
          to: moment(beginDate || new Date(), "YYYY-MM-DD"),
        }}
      >
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
            disabledDate={disabledDate}
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
            disabledDate={disabledDate}
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

export default DateRange;
