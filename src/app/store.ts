import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reduxWebsocket from '@giantmachines/redux-websocket';
import { WEBSOCKET_OPTIONS } from './websocket';
import playerReducer from '../features/player/playerSlice';
import gameListReducer from '../features/gamesList/gamesListSlice';
import appReducer from '../features/app/appSlice';
import gameReducer from '../features/game/gameSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    player: playerReducer,
    gameList: gameListReducer,
    game: gameReducer,
  },
  middleware: [
    reduxWebsocket(WEBSOCKET_OPTIONS),
  ]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
