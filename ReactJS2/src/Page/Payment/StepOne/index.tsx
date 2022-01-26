import React from "react";
import TableUI from "../../../Components/TableUI";
import { isNonEmptyArray } from "../../../utils";

export interface StepOneProps {
  listHeader?: any;
  listBody?: any;
  handleCheckKeyPayment?: any;
  handleDetail?: any;
  keyPayment?: any;
}

function StepOne({
  listHeader,
  listBody,
  handleCheckKeyPayment,
  handleDetail,
  keyPayment,
}: StepOneProps) {
  return (
    <>
      <div className="Payment-top">
        <h3>Chọn hình thức thanh toán:</h3>
        <div className="Payment-top__wrapper">
          <div>
            <input
              type="radio"
              name="Payment"
              id="Credit"
              value="Credit"
              disabled={!isNonEmptyArray(listBody)}
              onChange={handleCheckKeyPayment}
              defaultChecked={keyPayment === "Credit"}
            />
            <label htmlFor="Credit">Credit / Debit</label>
          </div>
          <div>
            <input
              type="radio"
              name="Payment"
              id="Onepay"
              value="Onepay"
              disabled={!isNonEmptyArray(listBody)}
              onChange={handleCheckKeyPayment}
              defaultChecked={keyPayment === "Onepay"}
            />
            <label htmlFor="Onepay">Onepay</label>
          </div>
        </div>
      </div>
      <TableUI
        listHeader={listHeader}
        listBody={listBody}
        handleDetail={handleDetail}
        isDetail
      />
    </>
  );
}

export default StepOne;
