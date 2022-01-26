/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import iconDropDown from "../../assets/icon-drop-down.svg";
import { paginationWithDots } from "../../utils";
import "./index.scss";

export interface PaginationProps {
  paging?: any;
  onSubmit?: any;
}

const Pagination = React.memo((props: PaginationProps) => {
  const {
    paging = {
      pageCount: 3,
      pageNo: 1,
      pageSize: 5,
    },
    onSubmit = () => {},
  } = props;

  const [state, setState] = useState({ paging });

  async function goTo(pageNum: any, e: any) {
    e.preventDefault();

    // eslint-disable-next-line no-useless-return
    if (pageNum < 1 || pageNum > state.paging.pageCount) return;

    setState({
      paging: {
        ...state.paging,
        pageNo: Number(pageNum),
      },
    });
    onSubmit(Number(pageNum), state?.paging?.pageSize);
  }

  const renderListPaginations = paginationWithDots(
    state?.paging?.pageNo,
    state?.paging.pageCount
  )?.map((item: any) => {
    return (
      <li
        key={item}
        onClick={(e) => goTo(item, e)}
        className={
          item === "..." || state.paging.pageNo === item ? "disabled" : ""
        }
      >
        <a href="/" className={state.paging.pageNo === item ? "is-active" : ""}>
          {item}
        </a>
      </li>
    );
  });

  const enablePreBegin = state?.paging?.pageNo > 1;
  const enableNextLast = state?.paging?.pageNo < state?.paging?.pageCount;

  return (
    <>
      <div className="paginations">
        <div className="paginations__pages">
          <div className="paginations__info">
            Hiển thị <span>{paging.pageSize}</span> hàng trong mỗi trang
          </div>
          <div className="pages">
            <ul>
              <li
                className={`btn-prev ${!enablePreBegin ? "disabled" : ""}`}
                onClick={(e) => goTo(state.paging.pageNo - 1, e)}
              >
                <img src={iconDropDown} alt="Previous" />
              </li>
              {renderListPaginations}
              <li
                className={`btn-next ${!enableNextLast ? "disabled" : ""}`}
                onClick={(e) => goTo(state.paging?.pageNo + 1, e)}
              >
                <img src={iconDropDown} alt="Next" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});

export default Pagination;
