import url from "../axiosURL";

export const getResults = () => {
  return (dispatch) => {
    url
      .get("/results")
      .then((res) =>
        dispatch({
          type: "getResults",
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
};
