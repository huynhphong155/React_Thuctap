import React, { useEffect, useState } from "react";
import "./index.scss";

function OTP() {
  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    if (!countDown) return;
    setTimeout(() => {
      setCountDown((pre: any) => pre - 1);
    }, 1000);
    return () => clearTimeout();
  }, [countDown]);

  return (
    <div className="OTP">
      <h4>Nhập mã OTP</h4>
      <p>
        Vui lòng nhập mã OTP được gửi về tin nhắn SMS trên thiết bị di động{" "}
      </p>
      <p>
        (Mã OTP gồm 6 chữ số. Hiệu lực trong vòng <span>{countDown}s</span>)
      </p>
      <input type="text" />
    </div>
  );
}

export default OTP;
