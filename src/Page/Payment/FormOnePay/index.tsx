import { FastField, Form, FormikProps, withFormik } from "formik";
import "./index.scss";
import IconOnePay from "../../../assets/icon-onepay.svg";
import LogoVCB from "../../../assets/LogoVCB.svg";
import UiInputField from "../../../Components/Input";

export interface FormOnePayProps {}

interface cardOnePayValue {
  Card: string;
  FullName: string;
  ExpirationDate: string;
  CVC: string;
}

interface MyFormOnePayProps {
  hanlePayment?: any;
}

export function FormOnePay({
  isSubmitting,
  values,
}: FormOnePayProps & FormikProps<cardOnePayValue>) {
  const { Card, FullName, ExpirationDate, CVC } = values;

  const checkDisable = !Card && !FullName && !ExpirationDate && !CVC;

  return (
    <Form className="FormOnePay">
      <div className="FormOnePay-icon">
        <img src={IconOnePay} alt="" />
      </div>
      <p>
        Quý khách vui lòng không tắt trình duyệt cho đến khi nhận được kết quả
        giao dịch trên website. Xin cảm ơn!
      </p>
      <div className="FormOnePay-wrapper">
        <div className="FormOnePay-logo">
          <img src={LogoVCB} alt="" />
          <p>Thanh toán trực tuyến</p>
        </div>
        <div className="mb-24">
          <FastField
            name="Card"
            placeholder="Nhập số thẻ"
            component={UiInputField}
            type="tel"
            isBorderRadius={false}
            autoComplete="cc-csc"
          />
        </div>
        <div className="mb-24">
          <FastField
            name="ExpirationDate"
            placeholder="MM/YY (ngày phát hành)"
            component={UiInputField}
            type="tel"
            isBorderRadius={false}
            autoComplete="cc-csc"
          />
        </div>
        <div className="mb-24">
          <FastField
            name="FullName"
            placeholder="Tên chủ thẻ (không dấu)"
            component={UiInputField}
            type="tel"
            isBorderRadius={false}
            autoComplete="cc-csc"
          />
        </div>
        <div className="Payment-submit">
          <button disabled={checkDisable || isSubmitting} type="submit">
            Submit
          </button>
        </div>
      </div>
    </Form>
  );
}

export const FormCardWrapper = withFormik<MyFormOnePayProps, cardOnePayValue>({
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
})(FormOnePay);

export default FormCardWrapper;
