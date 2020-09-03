import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import WelcomeRoute from './routes/WelcomeRoute';
import PlayRoute from './routes/PlayRoute';
import WatchRoute from './routes/WatchRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/play">
          <PlayRoute />
        </Route>
        <Route path="/watch">
          <WatchRoute />
        </Route>
        <Route path="/">
          <WelcomeRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
