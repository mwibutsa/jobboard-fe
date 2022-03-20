import * as actionTypes from "constants/actionTypes/jobs";

const initState = {
  data: null,
  error: null,
  loading: false,
};
const applicantsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_JOB_APPLICANTS_LOADING:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case actionTypes.GET_JOB_APPLICANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        success: true,
      };

    case actionTypes.GET_JOB_APPLICANTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default applicantsReducer;
