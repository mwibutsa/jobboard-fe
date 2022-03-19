const handleAxiosError = (error) => {
  try {
    if (error.response) {
      return error.response.data;
    }
    return {
      message: error.message,
    };
  } catch (e) {
    return {
      message: "Network error",
    };
  }
};

export default handleAxiosError;
