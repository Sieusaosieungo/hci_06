import * as Types from "../../constants/ActionTypes";

const initialState = {};

const taskDetail = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_TASK_DETAIL:
      return { ...action.payload };

    case Types.DELETE_TASK:
      return { ...action.payload };
    default:
      return state;
  }
};

export default taskDetail;
