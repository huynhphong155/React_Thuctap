import { FastField, Form, FormikProps, withFormik } from "formik";
import "./index.scss";
import UiInputField from "../../../Components/Input";

export interface FormCreditProps {}

interface cardCreditValue {
  Card: string;
  FullName: string;
  ExpirationDate: string;
  CVC: string;
}

interface MyFormProps {
  hanlePayment?: any;
}

export function FormCredit({
  isSubmitting,
  values,
}: FormCreditProps & FormikProps<cardCreditValue>) {
  const { Card, FullName, ExpirationDate, CVC } = values;

  const checkDisable = !Card && !FullName && !ExpirationDate && !CVC;

  return (
    <Form className="FormCredit">
      <p style={{ textAlign: "center", color: "#ED2025" }}>
        Quý khách vui lòng không tắt trình duyệt cho đến khi nhận được kết quả
        giao dịch trên website. Xin cảm ơn!
      </p>
      <h3>Vui lòng nhập các thông tin dưới đây:</h3>
      <div className="FormCredit-wrapper">
        <div className="FormCredit-left">
          <div className="mb-24">
            <FastField
              name="Bank"
              label="Tên ngân hàng:"
              component={UiInputField}
              type="tel"
              isBorderRadius={false}
              autoComplete="cc-csc"
            />
          </div>
          <div className="mb-24">
            <FastField
              name="Address"
              label="Chi nhánh:"
              component={UiInputField}
              type="tel"
              isBorderRadius={false}
              autoComplete="cc-csc"
            />
          </div>
          <div className="mb-24">
            <FastField
              name="Card"
              label="Số thẻ:"
              component={UiInputField}
              type="tel"
              isBorderRadius={false}
              autoComplete="cc-csc"
            />
          </div>
          <div className="mb-24">
            <FastField
              name="Name Card"
              label="Tên in trên thẻ:"
              component={UiInputField}
              type="tel"
              isBorderRadius={false}
              autoComplete="cc-csc"
            />
          </div>
        </div>
        <div className="FormCredit-right">
          <div className="mb-24">
            <FastField
              name="SĐT"
              label="SĐT Chủ Thẻ:"
              component={UiInputField}
              type="tel"
              isBorderRadius={false}
              autoComplete="cc-csc"
            />
          </div>

          <div className="mb-24">
            <FastField
              name="CMND"
              label="Số CMND:"
              component={UiInputField}
              type="tel"
              isBorderRadius={false}
              autoComplete="cc-csc"
            />
          </div>

          <div className="mb-24">
            <FastField
              name="Date"
              label="Ngày phát hành:"
              component={UiInputField}
              type="tel"
              isBorderRadius={false}
              autoComplete="cc-csc"
            />
          </div>
        </div>
      </div>
      <div className="Payment-submit">
        <button disabled={checkDisable || isSubmitting} type="submit">
          Submit
        </button>
      </div>
    </Form>
  );
}

export const FormCardWrapper = withFormik<MyFormProps, cardCreditValue>({
  mapPropsToValues: () => ({
    Card: "",
    FullName: "",
    ExpirationDate: "",
    CVC: "",
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    const { hanlePayment } = props;
    setTimeout(() => {
      hanlePayment();
      setSubmitting(false);
    }, 1000);
  },
})(FormCredit);

export default FormCardWrapper;
