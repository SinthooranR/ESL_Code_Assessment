import { useEffect } from "react";
import "./App.css";
import ScoreboardPanel from "./components/ScoreboardPanel";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./redux/actions/index";

function App() {
  const dispatch = useDispatch();

  // I use this to call actions directly with the use of dispatch
  const { getMatchInfo, getContestants, getResults } = bindActionCreators(
    actionCreators,
    dispatch
  );
  useEffect(() => {
    getMatchInfo();
    getContestants();
    getResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <ScoreboardPanel />
    </div>
  );
}

export default App;
