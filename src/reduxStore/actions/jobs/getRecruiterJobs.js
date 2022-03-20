import * as actionTypes from "constants/actionTypes/jobs";
import apiAction from "utils/apiAction";
const getRecruiterJobs = () => (dispatch) => {
  dispatch(
    apiAction({
      url: "/jobs/recruiter-jobs",
      onStart: () => (dispatch) =>
        dispatch({ type: actionTypes.GET_RECRUITER_JOBS_LOADING }),
      onSuccess:
        ({ data }) =>
        (dispatch) => {
          dispatch({
            type: actionTypes.GET_RECRUITER_JOBS_SUCCESS,
            payload: data,
          });
        },
      onFailure: (error) => (dispatch) => {
        dispatch({
          type: actionTypes.GET_RECRUITER_JOBS_SUCCESS,
          payload: error,
        });
      },
    })
  );
};

export default getRecruiterJobs;
