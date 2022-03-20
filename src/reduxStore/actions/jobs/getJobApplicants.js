import * as actionTypes from "constants/actionTypes/jobs";
import apiAction from "utils/apiAction";
const getJobApplicants = (jobId) => (dispatch) => {
  dispatch(
    apiAction({
      url: `/jobs/${jobId}/applications`,
      onStart: () => (dispatch) =>
        dispatch({ type: actionTypes.GET_JOB_APPLICANTS_LOADING }),
      onSuccess:
        ({ data }) =>
        (dispatch) => {
          dispatch({
            type: actionTypes.GET_JOB_APPLICANTS_SUCCESS,
            payload: data,
          });
        },
      onFailure: (error) => (dispatch) => {
        dispatch({
          type: actionTypes.GET_JOB_APPLICANTS_FAILURE,
          payload: error,
        });
      },
    })
  );
};

export default getJobApplicants;
