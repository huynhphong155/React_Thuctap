import React, { ReactNode } from "react";
import "./index.scss";
import cancel from "../../assets/cancel.svg";

export interface PopupUIProps {
  children: ReactNode;
  handleClosePopup?: any;
  isShowPopup: boolean;
  textSuccess?: string;
  textCancel?: string;
  onSuccessHandler?: any;
  onCancelHandler?: any;
}

function Popup({
  children,
  handleClosePopup,
  isShowPopup = false,
  textSuccess,
  textCancel,
  onSuccessHandler,
  onCancelHandler,
}: PopupUIProps) {
  return (
    <>
      {isShowPopup && (
        <div className="dialog-container">
          <div className="dialog-wrapper">
            <div className="mt-15">
              {children}
              {textCancel && (
                <button className="button-cancel" onClick={onCancelHandler}>
                  {textCancel}
                </button>
              )}
              {textSuccess && (
                <button className="button-success" onClick={onSuccessHandler}>
                  {textSuccess}
                </button>
              )}
            </div>
            <div className="dialog-close" onClick={handleClosePopup}>
              <img src={cancel} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
