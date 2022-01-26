import React, { useState } from "react";
import iconOnePay from "../../../assets/icon-onepay.svg";
import VCB from "../../../assets/VCB.svg";
import VIB from "../../../assets/VIB.svg";
import TECH from "../../../assets/TECH.svg";
import VP from "../../../assets/VP.svg";
import MB from "../../../assets/MB.svg";
import ACB from "../../../assets/ACB.svg";
import TP from "../../../assets/TP.svg";
import "./index.scss";
import InfoPayment from "../InfoPayment";

export interface OnePayProps {
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
    img: VCB,
  },
  {
    key: "VIB",
    img: VIB,
  },
  {
    key: "TECH",
    img: TECH,
  },
  {
    key: "VP",
    img: VP,
  },
  {
    key: "MB",
    img: MB,
  },
  {
    key: "ACB",
    img: ACB,
  },
  {
    key: "TP",
    img: TP,
  },
];

function OnePay({ setKeyBank, keyBank }: OnePayProps) {
  return (
    <>
      <div className="OnePay-icon">
        <img src={iconOnePay} alt="" />
      </div>
      <InfoPayment />
      <div className="OnePay-des">
        <p>
          Mời chọn ngân hàng bằng cách chọn biểu tượng hoặc xem hướng dẫn thanh
          toán.
        </p>
      </div>
      <div className="OnePay-listBank">
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

export default OnePay;
