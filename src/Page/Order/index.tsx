import React, { useEffect, useState } from "react";
import Pagination from "../../Components/Paginations/Paginations";
import Popup from "../../Components/Popup";
import TableUI from "../../Components/TableUI";
import RenderUI from "../../HOC/RenderUI";
import { isNonEmptyArray } from "../../utils";
import { ListOrder, OrderDetail } from "../../utils/schema";
import "./index.scss";
import detail from "../../assets/detail.svg";
import checkCircle from "../../assets/checkCircle.svg";

const listHeader = [
  { name: "STT", key: "stt" },
  { name: "Số phiếu", key: "Votes" },
  { name: "Mã hóa đơn", key: "CodeBill" },
  { name: "Ngày thu", key: "AutumnDay" },
  { name: "Nội dung thu", key: "Collected" },
  { name: "Số tiền", key: "Price" },
  { name: "Đơn vị thu", key: "UnitOfRevenue" },
];

const listHeaderPopup = [
  { name: "STT", key: "stt" },
  { name: "Mã", key: "CodeBill" },
  { name: "Nội dung khoản thu", key: "Collected" },
  { name: "Học kỳ", key: "Semester" },
  { name: "Số tiền(VNĐ)", key: "Price" },
];

function Order() {
  const [data, setData] = useState([]);
  const [oderDetail, setOrderDetail] = useState([]);
  const [total, setTotal] = useState<any>(0);
  const [key, setKey] = useState("");
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false);
  const [isShowImage, setIsShowImage] = useState<boolean>(false);
  const [isShowPrinting, setIsShowPrinting] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      const listData: any =
        isNonEmptyArray(ListOrder.data) &&
        ListOrder.data.map((ele) => {
          const {
            Votes,
            CodeBill,
            AutumnDay,
            Collected,
            Price,
            UnitOfRevenue,
          } = ele;
          return {
            stt: ele.autoId,
            Votes,
            CodeBill,
            AutumnDay,
            Collected,
            Price,
            UnitOfRevenue,
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
      setTotal(OrderDetail.total);
      setOrderDetail(listData);
    }, 500);
  }, [key]);

  const handleClosePopup = () => {
    setKey("");
    setIsShowPopup(false);
    setIsShowImage(false);
    setIsShowPrinting(false);
  };

  const onSuccessHandler = () => {
    if (isShowImage) {
      setIsShowImage(false);
      setIsShowPrinting(true);
      return;
    }
    setKey("");
    setIsShowImage(true);
  };

  return (
    <RenderUI>
      <div className="order">
        <h1 className="order-title">Phiếu thu tổng hợp</h1>
        <div className="order-wrapper">
          <TableUI
            listHeader={listHeader}
            listBody={data}
            handleDetail={setKey}
            isDetail
          />
          <Pagination />
        </div>
      </div>
      <Popup
        isShowPopup={isShowPopup}
        handleClosePopup={handleClosePopup}
        onSuccessHandler={onSuccessHandler}
        onCancelHandler={handleClosePopup}
        textSuccess={
          isShowImage ? "In phiếu thu" : isShowPrinting ? "" : "Xem phiếu thu"
        }
        textCancel={isShowImage ? "Hủy" : ""}
      >
        {!isShowImage && !isShowPrinting && (
          <>
            <TableUI
              listHeader={listHeaderPopup}
              listBody={oderDetail}
              isDetail={false}
            />
            <div className="order-total">
              <h4>Tổng thanh toán:</h4>
              <h3>{total}</h3>
            </div>
          </>
        )}
        {isShowImage && (
          <div>
            <img style={{ maxWidth: "600px" }} src={detail} alt="" />
          </div>
        )}
        {isShowPrinting && (
          <div>
            <img src={checkCircle} alt="" /> <p>In phiếu thu thành công</p>
          </div>
        )}
      </Popup>
    </RenderUI>
  );
}

export default Order;
