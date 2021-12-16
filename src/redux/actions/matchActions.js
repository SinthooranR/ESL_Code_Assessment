import url from "../axiosURL";

export const getMatchInfo = () => {
  return (dispatch) => {
    url
      .get("")
      .then((res) =>
        dispatch({
          type: "getMatchInfo",
          payload: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
};
