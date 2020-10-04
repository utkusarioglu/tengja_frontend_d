import React from "react";
import { useRouteMatch, Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectGamesList } from "../features/gamesList/gamesListSlice";
import Header from "../components/common/Header";
import Button from "@material-ui/core/Button";

interface Params {
  gameId: string;
}

function GameLobbyRoute() {
  const match = useRouteMatch();
  // !TODO
  const { gameId } = match.params as Params;
  const gamesList = useSelector(selectGamesList);
  const gameDataCandidate = gamesList.items.filter(
    (item) => item.gameId === gameId
  );

  // !TODO this needs a notification to the user abut why the redirect has occured
  if (gameDataCandidate.length === 0) {
    return <Redirect to={match.path.split("/").slice(0, -2).join("/")} />;
  }

  const { gameName, playerCount, rules } = gameDataCandidate[0];
  const {
    timeLimit,
    winMode,
    tilePop,
    rowCount,
    colCount,
    streakLength,
    maxPlayerCount,
  } = rules;

  return (
    <>
      <Header pageName={gameName} />
      <p>
        Board: {rowCount} x {colCount}
      </p>
      <p>Streak: {streakLength}</p>
      <p>Win mode: {winMode}</p>
      <p>
        Player count: {playerCount} of {maxPlayerCount}
      </p>
      <p>Time limit: {timeLimit}</p>
      <p>Tile Pop: {tilePop ? "On" : "Off"}</p>
      <Link to={`/game/${Math.random().toString().slice(-5, -1)}`}>
        <Button>Start game</Button>
      </Link>
    </>
  );
}

export default GameLobbyRoute;
