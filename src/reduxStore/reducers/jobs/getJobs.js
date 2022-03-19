import * as actionTypes from "constants/actionTypes/jobs";
const initState = {
  loading: false,
  error: null,
  data: [],
};

const jobReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_JOBS_LOADING:
      return {
        ...state,
        loading: true,
        data: [],
        error: null,
      };
    case actionTypes.GET_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case actionTypes.GET_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
