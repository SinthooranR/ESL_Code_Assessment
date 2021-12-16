const initialState = {
  matchInfo: {},
  isLoading: false,
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getMatchInfo":
      return {
        ...state,
        matchInfo: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default matchReducer;
