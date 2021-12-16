import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import classes from "../styles/MatchPanel.module.scss";

const MatchPanel = () => {
  const matchData = useSelector((state) => state.match.matchInfo);
  const startDate = moment(matchData?.timeline?.signUp?.begin).format(
    "Do MMMM YYYY"
  );
  return (
    <div className={classes.MatchPanel}>
      <h2>{matchData?.name?.full}</h2>
      <p>{startDate}</p>
    </div>
  );
};

export default MatchPanel;
