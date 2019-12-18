import { UPDATE_STATE } from '../../constants/ActionTypes';

const initialState = {
  lstReport: [
    {
      _id: 1,
      codeReport: 1,
      name: 'Báo cáo đảm bảo chất lượng thuốc nén',
      finishDate: new Date(),
      censor: 'Trần Trung Huỳnh',
      // codeCensor: "KT_01",
      worker: 'Phạm Đại Tài',
      // codeWorker: "KT_02",
      department: 'Đảm bảo chất lượng',
      completed: '85%'
    }
  ]
};

const global = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_STATE:
      state = { ...state, ...payload };
      return state;
    default:
      return state;
  }
};

export default global;
