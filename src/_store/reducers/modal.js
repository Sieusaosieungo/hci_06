import React from "react";
import * as Types from "../../constants/ActionTypes";

const initialState = {
  title: "Modal",
  visible: false,
  okText: "OK",
  onOk: () => {},
  cancelText: "Cancel",
  onCancel: () => {},
  Component: <div></div>
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_MODAL:
      return { ...state, visible: true, ...action.payload };
    case Types.HIDE_MODAL:
      return { ...state, visible: false, ...action.payload };
    default:
      return state;
  }
};

export default modal;
