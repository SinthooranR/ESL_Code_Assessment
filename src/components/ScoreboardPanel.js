import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import RoundPanel from "./RoundPanel";
import MatchPanel from "./MatchPanel";
import classes from "../styles/Scoreboard.module.scss";

const ScoreboardPanel = () => {
  const playerData = useSelector((state) => state.contestants.contestants);
  const resultData = useSelector((state) => state.results.results);
  const [sort, setSort] = useState({ value1: 1, value2: -1 });

  const roundResults = resultData.map((result) => {
    return {
      ...result,
      participants: playerData.map((player) => ({
        ...player,
        ...result.participants.find(({ id }) => id === player.id),
      })),
    };
  });

  return (
    <div className={classes.Scoreboard}>
      <MatchPanel />
      <div className={classes.Container}>
        <button
          onClick={() =>
            setSort({ value1: sort.value1 * -1, value2: sort.value2 * -1 })
          }
        >
          Date
        </button>
      </div>
      {roundResults &&
        roundResults.length > 0 &&
        roundResults
          .sort((a, b) => (a.beginAt > b.beginAt ? sort.value1 : sort.value2))
          .map((round) => (
            <Fragment key={round.id}>
              <RoundPanel {...round} />
            </Fragment>
          ))}
    </div>
  );
};

export default ScoreboardPanel;
