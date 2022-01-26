import React from "react";
import { isNonEmptyArray } from "../../utils";
import eye from "../../assets/eye.svg";
import "./index.scss";

export interface PaginationProps {
  listHeader?: any;
  listBody?: any;
  handleDetail?: any;
  isDetail: boolean;
  isShowNon?: boolean;
}

function TableUI({
  listHeader,
  listBody,
  isDetail,
  handleDetail,
  isShowNon = false,
}: PaginationProps) {
  return (
    <table className="TableUI">
      <thead>
        <tr>
          {isNonEmptyArray(listHeader) &&
            listHeader.map((ele: any) => <td key={ele.key}>{ele.name}</td>)}
          {isDetail && <td className="center">Chi tiết</td>}
        </tr>
      </thead>
      <tbody>
        {!isNonEmptyArray(listBody) && (
          <tr>
            <td
              colSpan={isDetail ? listHeader.length + 1 : listHeader.length}
              style={{ textAlign: "center", color: "#ED2025" }}
            >
              Hiện tại không có khoản nào cần thanh toán.
            </td>
          </tr>
        )}
        {isNonEmptyArray(listBody) &&
          listBody.map((ele: any, index: number) => {
            return (
              <tr key={index}>
                {Object.keys(ele).map((k, i) => {
                  if (!ele[listHeader[i]?.key] && !isShowNon) return;
                  if (!ele[listHeader[i]?.key] && isShowNon) {
                    return <td key={ele[listHeader[i]?.key] + i}>-</td>;
                  }
                  return (
                    <td key={ele[listHeader[i]?.key] + i}>
                      {ele[listHeader[i]?.key]}
                    </td>
                  );
                })}
                {isDetail && (
                  <td
                    className="center TableUI-click"
                    onClick={() => handleDetail(ele?.CodeBill)}
                  >
                    <img src={eye} alt="" />
                  </td>
                )}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TableUI;
