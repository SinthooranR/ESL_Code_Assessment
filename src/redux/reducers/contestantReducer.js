const initialState = {
  contestants: [],
  isLoading: false,
};

const contestantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getContestants":
      return {
        ...state,
        contestants: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default contestantReducer;
