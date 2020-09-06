import { store } from './store';
import { connect } from '@giantmachines/redux-websocket';

export interface IWebsocketOptions {
  // Defaults to 'REDUX_WEBSOCKET'. Use this option to set a custom action type
  // prefix. This is useful when you're creating multiple instances of the
  // middleware, and need to handle actions dispatched by each middleware instance separately.
  prefix?: string,
  // Defaults to 2000. Amount of time to wait between reconnection attempts.
  reconnectInterval?: number,
  // Defaults to false. If set to true, will attempt to reconnect when conn is closed without error event
  // e.g. when server closes connection
  reconnectOnClose?: boolean,
  // Callback when the WebSocket connection is open. Useful for when you
  // need a reference to the WebSocket instance.
  onOpen?: (socket: WebSocket) => void,
  // Custom function to serialize your payload before sending. Defaults to JSON.stringify
  // but you could use this function to send any format you like, including binary
  serializer?: (payload: any) => string | ArrayBuffer | ArrayBufferView | Blob
}

export const WEBSOCKET_OPTIONS: IWebsocketOptions = {
  reconnectInterval: 1000,
  reconnectOnClose: true,
}

export function initiateWebsocketConnection(): void {
  /**
   * Websocket connection initiation
   */
  const WEBSOCKET_URL = `ws://${window.location.hostname}:4000/ws`
  store.dispatch(connect(WEBSOCKET_URL));
}