import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxWebsocket from '@giantmachines/redux-websocket';
import playerReducer from '../features/player/playerSlice';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    // counter: counterReducer,
  },
  middleware: [
    reduxWebsocket(),
  ]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
