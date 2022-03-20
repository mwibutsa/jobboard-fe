import * as actionTypes from "constants/actionTypes/jobs";
import apiAction from "utils/apiAction";
const jobApplication = (requestData) => (dispatch) => {
  dispatch(
    apiAction({
      url: "/job-applications/apply-for-job",
      data: requestData,
      method: "POST",
      headers: {
        "Content-type": "multipart/form-data",
      },

      onStart: () => (dispatch) =>
        dispatch({ type: actionTypes.SEND_JOB_APPLICATION_LOADING }),
      onSuccess:
        ({ data }) =>
        (dispatch) => {
          dispatch({
            type: actionTypes.SEND_JOB_APPLICATION_SUCCESS,
            payload: data,
          });
        },
      onFailure: (error) => (dispatch) => {
        dispatch({
          type: actionTypes.SEND_JOB_APPLICATION_FAILURE,
          payload: error,
        });
      },
    })
  );
};

export default jobApplication;
