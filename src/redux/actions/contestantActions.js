import url from "../axiosURL";

export const getContestants = () => {
  return (dispatch) => {
    url
      .get("/contestants")
      .then((res) =>
        dispatch({
          type: "getContestants",
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
};
