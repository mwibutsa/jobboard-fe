import * as apiActionTypes from "constants/apiActions";

const apiAction = (payload) => {
  return {
    type: apiActionTypes.API_REQUEST,
    payload,
  };
};

export default apiAction;
