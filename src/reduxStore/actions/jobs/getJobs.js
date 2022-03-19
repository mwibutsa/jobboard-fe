import * as actionTypes from "constants/actionTypes/jobs";
import apiAction from "utils/apiAction";
const getJobs = () => (dispatch) => {
  dispatch(
    apiAction({
      url: "/jobs/all",
      onStart: () => (dispatch) =>
        dispatch({ type: actionTypes.GET_JOBS_LOADING }),
      onSuccess:
        ({ data }) =>
        (dispatch) => {
          dispatch({ type: actionTypes.GET_JOBS_SUCCESS, payload: data });
        },
      onFailure: (error) => (dispatch) => {
        dispatch({ type: actionTypes.GET_JOBS_SUCCESS, payload: error });
      },
    })
  );
};

export default getJobs;
