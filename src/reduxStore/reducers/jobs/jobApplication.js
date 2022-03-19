import * as actionTypes from "constants/actionTypes/jobs";

const initState = {
  success: false,
  data: null,
  error: null,
  loading: false,
};
const jobReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.SEND_JOB_APPLICATION_LOADING:
      return {
        ...state,
        loading: true,
        data: null,
        success: false,
        error: null,
      };
    case actionTypes.SEND_JOB_APPLICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };

    case actionTypes.SEND_JOB_APPLICATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
        success: false,
      };
    default:
      return state;
  }
};

export default jobReducer;
