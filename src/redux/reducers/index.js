import { combineReducers } from "redux";
import matchReducer from "./matchReducer";
import contestantReducer from "./contestantReducer";
import resultReducer from "./resultReducer";

const reducers = combineReducers({
  match: matchReducer,
  contestants: contestantReducer,
  results: resultReducer,
});

export default reducers;
