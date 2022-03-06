import React from "react";
import "./index.scss";

function InfoPayment() {
  return (
    <div className="InfoPayment-info">
      <ul>
        <li>
          <p>Đơn vị thụ hưởng:</p>
          <span>CLOUD CAMPUS</span>
        </li>
        <li>
          <p>Nội dung thanh toán:</p>
          <span>Thanh toán tiền học phí học kỳ 1</span>
        </li>
        <li>
          <p>Số tiền:</p>
          <span>8.650.000 VNĐ</span>
        </li>
      </ul>
    </div>
  );
}

export default InfoPayment;
