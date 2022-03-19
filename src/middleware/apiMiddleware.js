import { API_REQUEST } from "constants/apiActions";
import axiosInstance from "utils/customAxios";
import handleAxiosError from "utils/handleAxiosError";

const apiMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  async ({ type, payload }) => {
    if (type !== API_REQUEST) {
      return next({ type, payload });
    }
    const { onStart, onSuccess, onFailure } = payload;

    if (typeof onStart === "function") {
      await onStart()(dispatch);
    }

    try {
      const { data } = await axiosInstance.request({
        method: payload.method,
        data: payload.data,
        url: payload.url,
        params: payload.params,
        headers: payload.headers || {},
      });

      if (typeof onSuccess === "function") {
        await onSuccess(data)(dispatch);
      }
    } catch (error) {
      const err = handleAxiosError(error);
      if (typeof onFailure === "function") {
        await onFailure(err)(dispatch);
      }
    }

    return getState();
  };

export default apiMiddleware;
