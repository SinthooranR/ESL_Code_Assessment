import React from "react";
import moment from "moment";
import classes from "../styles/RoundPanel.module.scss";

const RoundPanel = ({ beginAt, participants }) => {
  const filteredPlayers = participants.filter((p) => p.points);
  let getMaxValues = filteredPlayers.reduce(
    (previous, current) =>
      (previous = previous > current.points[0] ? previous : current.points[0]),
    0
  );

  const convertedTime = moment(beginAt).format("h:mmA");

  return (
    <div className={classes.RoundPanel}>
      <p className={classes.Time}>{convertedTime}</p>
      {filteredPlayers &&
        filteredPlayers
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((player) => (
            <div
              className={
                player?.points[0] === getMaxValues
                  ? classes.WinnerPanel
                  : classes.AttemptPanel
              }
              key={player.id}
            >
              <p>{player?.name}</p> <p>{player?.points[0]}</p>
            </div>
          ))}
    </div>
  );
};

export default RoundPanel;
