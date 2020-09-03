import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { connect, send } from '@giantmachines/redux-websocket';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

const WEBSOCKET_URL = `ws://localhost:4000/ws`
store.dispatch(connect(WEBSOCKET_URL));
setTimeout(() => {
  console.log(`now sending websocket message to ${WEBSOCKET_URL}`)
  store.dispatch(send("yellow hellow"));
}, 2000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
