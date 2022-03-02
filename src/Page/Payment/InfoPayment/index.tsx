import React from "react";
import "./index.scss";

function InfoPayment() {
  return (
    <div className="InfoPayment-info">
      <ul>
        <li>
          <p>Đơn vị thụ hưởng:</p>
          <span>...</span>
        </li>
        <li>
          <p>Nội dung thanh toán:</p>
          <span>...</span>
        </li>
        <li>
          <p>Số tiền:</p>
          <span>... VNĐ</span>
        </li>
      </ul>
    </div>
  );
}

export default InfoPayment;
