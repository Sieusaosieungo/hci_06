import * as Types from './../constants/ActionTypes';

export const showModal = (payload) => {
  return {
    type: Types.SHOW_MODAL,
    payload
  };
};

export const hideModal = (payload) => {
  return {
    type: Types.HIDE_MODAL,
    payload
  };
};
export const actSetTaskDetail = (payload) => {
  return {
    type: Types.SET_TASK_DETAIL,
    payload
  };
};

export const updateState = (payload) => {
  return {
    type: Types.UPDATE_STATE,
    payload
  };
};
