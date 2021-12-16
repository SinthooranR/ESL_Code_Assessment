const initialState = {
  results: [],
  isLoading: false,
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getResults":
      return {
        ...state,
        results: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default resultReducer;
