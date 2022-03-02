import React, { useEffect, useState } from "react";
import checkCircle from "../../assets/checkCircle.svg";
import Popup from "../../Components/Popup";
import TableUI from "../../Components/TableUI";
import RenderUI from "../../HOC/RenderUI";
import { isNonEmptyArray } from "../../utils";
import { ListPaymentOrder, OrderDetail } from "../../utils/schema";
import CreditPayment from "./Credit";
import FormOnePay from "./FormOnePay";
import FormRedit from "./FormRedit";
import "./index.scss";
import InfoPayment from "./InfoPayment";
import OnePay from "./OnePay";
import OTP from "./OTP";
import StepOne from "./StepOne";

const listHeader = [
  { name: "STT", key: "stt" },
  { name: "Mã khoản thu", key: "CodeBill" },
  { name: "Nội dung thu", key: "Des" },
  { name: "Số tiền (VNĐ)", key: "Price" },
];

const listHeaderPopup = [
  { name: "STT", key: "stt" },
  { name: "Mã", key: "CodeBill" },
  { name: "Nội dung khoản thu", key: "Collected" },
  { name: "Học kỳ", key: "Semester" },
  { name: "Số tiền(VNĐ)", key: "Price" },
];

function Payment() {
  const [data, setData] = useState<any>([]);
  const [oderDetail, setOrderDetail] = useState<any>([]);
  const [step, setStep] = useState<number>(1);
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false);
  const [isShowPopupOTP, setIsShowPopupOTP] = useState<boolean>(false);
  const [isShowSuccess, setIsShowSuccess] = useState<boolean>(false);
  const [key, setKey] = useState("");
  const [keyBank, setKeyBank] = useState<any>("");
  const [keyPayment, setKeyPayment] = useState<any>("Credit");

  useEffect(() => {
    setTimeout(() => {
      const listData: any =
        isNonEmptyArray(ListPaymentOrder.data) &&
        ListPaymentOrder.data.map((ele) => {
          return {
            ...ele,
            stt: ele.autoId,
          };
        });
      setData(listData);
    }, 500);
  }, []);

  useEffect(() => {
    if (!key) return;
    setIsShowPopup(true);
    setTimeout(() => {
      const listData: any =
        isNonEmptyArray(OrderDetail.data) &&
        OrderDetail.data.map((ele) => {
          const { Votes, CodeBill, Collected, Semester, Price } = ele;
          return {
            stt: ele.autoId,
            Votes,
            CodeBill,
            Collected,
            Semester,
            Price,
          };
        });
      setOrderDetail(listData);
    }, 500);
  }, [key]);

  const handleCheckKeyPayment = (e: any) => {
    setKeyPayment(e.target.value);
  };

  const handleClosePopup = () => {
    setKey("");
    setIsShowPopup(false);
    setIsShowPopupOTP(false);
    setIsShowSuccess(false);
  };

  const handleSuccessPopup = () => {
    setKey("");
    setIsShowPopupOTP(false);
    setIsShowSuccess(true);
  };

  const hanlePayment = () => {
    switch (step) {
      case 1:
        setStep(2);
        break;
      case 2:
        setStep(3);
        break;
      case 3:
        setIsShowPopup(true);
        setIsShowPopupOTP(true);
        break;
      default:
        break;
    }
  };

  return (
    <RenderUI>
      <div className="Payment">
        {step === 1 && (
          <>
            <h1 className="Payment-title">Thanh toán trực tuyến</h1>
            <h4 className="Payment-des">Thanh toán trực tuyến</h4>
          </>
        )}
        {step !== 1 && step !== 2 && <InfoPayment />}
        <div className="Payment-wrapper">
          <div>
            {step === 1 && (
              <StepOne
                listHeader={listHeader}
                listBody={data}
                handleCheckKeyPayment={handleCheckKeyPayment}
                handleDetail={setKey}
                keyPayment={keyPayment}
              />
            )}
            {step === 2 && keyPayment === "Credit" && (
              <CreditPayment keyBank={keyBank} setKeyBank={setKeyBank} />
            )}
            {step === 3 && keyPayment === "Credit" && (
              <FormRedit hanlePayment={hanlePayment} />
            )}
            {step === 2 && keyPayment === "Onepay" && (
              <OnePay keyBank={keyBank} setKeyBank={setKeyBank} />
            )}
            {step === 3 && keyPayment === "Onepay" && (
              <FormOnePay hanlePayment={hanlePayment} />
            )}
          </div>
          {step !== 3 && (
            <div className="Payment-submit">
              <button onClick={hanlePayment} disabled={!isNonEmptyArray(data)}>
                Thanh toán
              </button>
            </div>
          )}
        </div>
      </div>
      <Popup
        isShowPopup={isShowPopup}
        textSuccess={isShowPopupOTP && !isShowSuccess ? "Xác nhận" : ""}
        onSuccessHandler={handleSuccessPopup}
        handleClosePopup={handleClosePopup}
      >
        {!isShowPopupOTP && !isShowSuccess && (
          <TableUI
            listHeader={listHeaderPopup}
            listBody={oderDetail}
            isDetail={false}
          />
        )}
        {isShowPopupOTP && <OTP />}
        {isShowSuccess && (
          <div>
            <img src={checkCircle} alt="" /> <p>In phiếu thu thành công</p>
          </div>
        )}
      </Popup>
    </RenderUI>
  );
}

export default Payment;
