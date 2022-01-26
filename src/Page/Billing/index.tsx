import React, { useEffect, useRef, useState } from "react";
import iconSearch from "../../assets/search.svg";
import Pagination from "../../Components/Paginations/Paginations";
import TableUI from "../../Components/TableUI";
import RenderUI from "../../HOC/RenderUI";
import { isNonEmptyArray } from "../../utils";
import { ListBilling } from "../../utils/schema";
import "./index.scss";

const listHeader = [
  { name: "Mã", key: "ReceiptCode" },
  { name: "Tên khoản thu", key: "Name" },
  { name: "tín chỉ", key: "NumberOfCredits" },
  { name: "Trạng thái đăng ký", key: "StatusRegistration" },
  { name: "Số tiền (VNĐ)", key: "Amount" },
  { name: "Đã nộp (VNĐ)", key: "Submitted" },
  { name: "Khấu trừ", key: "Deduct" },
  { name: "Công nợ (VNĐ)", key: "Debts" },
  { name: "Trạng thái nộp", key: "status" },
];

function Billing() {
  const [defaultData, setDefaultData] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const typingTimeoutRef = useRef<any>();

  const statusSuccess = <button className="statusSuccess">Đã nộp</button>;
  const statusFail = <button className="statusFail">Chưa nộp</button>;

  useEffect(() => {
    setTimeout(() => {
      const listData: any =
        isNonEmptyArray(ListBilling.data) &&
        ListBilling.data.map((ele) => {
          return {
            ...ele,
            status: ele?.status ? statusSuccess : statusFail,
          };
        });
      setDefaultData(listData);
      setData(listData);
    }, 500);
  }, []);

  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      if (!value) setData(defaultData);
      if (value) {
        const result = defaultData.filter(
          (ele: any) => ele.Name.indexOf(value) > -1
        );
        setData(result);
      }
    }, 500);
  };

  return (
    <RenderUI>
      <div className="Billing">
        <h1 className="Billing-title">Tra cứu công nợ</h1>
        <h4 className="Billing-des">Công nợ của bạn</h4>
        <div className="Billing-wrapper">
          <div>
            <div className="Billing-top">
              <h3>Lê Thanh Phương - MSSV: HS123456</h3>
              <div className="Billing-search">
                <img src={iconSearch} alt="" />
                <input
                  type="text"
                  placeholder="Nhập tên hoặc mã khoản thu"
                  onChange={handleSearch}
                />
              </div>
            </div>
            <TableUI
              listHeader={listHeader}
              listBody={data}
              isDetail={false}
              isShowNon
            />
          </div>
          <Pagination />
        </div>
      </div>
    </RenderUI>
  );
}

export default Billing;
