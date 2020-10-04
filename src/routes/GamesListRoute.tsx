import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { send } from "@giantmachines/redux-websocket";

import Header from "../components/common/Header";
import GamesList from "../components/gamesList/GamesList";
import { selectGamesList } from "../features/gamesList/gamesListSlice";
import {
  selectSubscriptions,
  includeSubscription,
} from "../features/app/appSlice";
import { selectIsConnected } from "../features/app/appSlice";

function GamesListRoute() {
  const dispatch = useDispatch();
  const subscription = "gamesList";
  const isConnected = useSelector(selectIsConnected);

  // !HACK you need a real websocket request pooling mechanism
  const dispatchSubscription = (subscription: string) => {
    dispatch(
      send({
        subscribe: [subscription],
      })
    );
    dispatch(includeSubscription(subscription));
  };
  if (!useSelector(selectSubscriptions).includes(subscription)) {
    if (isConnected) {
      dispatchSubscription(subscription);
    } else {
      setTimeout(() => {
        dispatchSubscription(subscription);
      }, 1000);
    }
  }

  const gamesList = useSelector(selectGamesList);

  return (
    <>
      <Header pageName="Games" />
      <GamesList gamesList={gamesList} />
    </>
  );
}

export default GamesListRoute;
