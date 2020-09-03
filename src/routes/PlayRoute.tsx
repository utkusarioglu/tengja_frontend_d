import React from "react";
import {
  Switch,
  Route,
  // Link,
  useRouteMatch,
  // useParams,
  Redirect,
} from "react-router-dom";

// import Header from '../components/Header';

import PlayerCreateRoute from './PlayerCreateRoute';
import GamesListRoute from './GamesListRoute';
import GameLobbyRoute from './GameLobbyRoute';

function PlayRoute() {
    const match = useRouteMatch();
    const playerProfile = {
      name: "John Doe",
      motto: "I win",
      symbol: "X",
      color: "#FF0000",
    }
    // const playerProfile = false;

    return (
      <div>
        {(playerProfile) 
          ? <Redirect
              to={{
                pathname: `${match.path}/games-list`,
                // state: { from: location }
              }}
            />
          : <Redirect
              to={{
                pathname: `${match.path}/player-create`,
                // state: { from: location }
              }}
            />
        }
  
        <Switch>
          <Route path={`${match.path}/player-create`}>
            <PlayerCreateRoute />
          </Route>
          <Route path={`${match.path}/games-list`}>
            <GamesListRoute />
          </Route>
          <Route path={`${match.path}/game-lobby`}>
            <GameLobbyRoute />
          </Route>
        </Switch>
      </div>
    );
  }

  export default PlayRoute;