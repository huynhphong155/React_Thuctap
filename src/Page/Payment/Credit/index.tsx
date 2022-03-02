import React from "react";
import MASTERCARD from "../../../assets/MASTERCARD.svg";
import VISA from "../../../assets/VISA.svg";
import InfoPayment from "../InfoPayment";
import "./index.scss";

export interface CreditPaymentProps {
  listHeader?: any;
  listBody?: any;
  handleCheckKeyPayment?: any;
  handleDetail?: any;
  setKeyBank?: any;
  keyBank?: any;
}

const dataListBank = [
  {
    key: "VCB",
    img: VISA,
  },
  {
    key: "MAS",
    img: MASTERCARD,
  },
];

function CreditPayment({ setKeyBank, keyBank }: CreditPaymentProps) {
  console.log(keyBank);

  return (
    <>
      <InfoPayment />
      <div className="CreditPayment-des">
        <p>
          Mời chọn ngân hàng bằng cách chọn biểu tượng hoặc xem hướng dẫn thanh
          toán.
        </p>
      </div>
      <div className="CreditPayment-listBank">
        <ul>
          {dataListBank.map((ele) => {
            return (
              <li
                key={ele.key}
                onClick={() => setKeyBank(ele.key)}
                className={keyBank === ele.key ? "active" : ""}
              >
                <img src={ele.img} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default CreditPayment;
