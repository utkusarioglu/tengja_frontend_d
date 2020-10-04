import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IGame, IMoveSpecs } from "./game.types";
import {
  evaluateBoard,
  getMove,
  updateBoardLayout,
  updateMoves,
  getNextPlayer,
} from "./gameLogic";

const initialRowCount = 3;
const initialColCount = 3;

const initialState: IGame = {
  players: {
    active: [1, 2],
    initial: [1, 2],
  },
  playerSymbols: {
    0: "-",
    1: "X",
    2: "O",
  },
  spectators: [],
  moves: [
    {
      playerId: 0,
      playerAbandon: false,
      boardLayout: Array.from({ length: initialRowCount }, (_, k) =>
        Array.from({ length: initialColCount }, (_, __) => 0)
      ),
      gameOver: false,
      tilePop: false,
      moveSpecs: {
        row: 0,
        col: 0,
        time: 0,
      },
      highlightLayout: [],
    },
  ],
  rules: {
    /* initial rules define a tictactoe 
        game with no time limit */
    timeLimit: 0,
    winMode: "firstStreak",
    tilePop: false,
    rowCount: initialRowCount,
    colCount: initialColCount,
    streakLength: 3,
    maxPlayerCount: 2,
  },
  current: {
    playerId: 1,
    time: 0,
  },
  winnerId: 0,
  gameOver: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addMove: (state, action: PayloadAction<IMoveSpecs>) => {
      const lastMove = getMove(state.moves, "last");
      const moveSpecs = action.payload;
      const { playerId } = state.current;
      const updatedBoardLayout = updateBoardLayout(
        lastMove,
        moveSpecs,
        playerId
      );
      const { winnerId, gameOver } = evaluateBoard(
        updatedBoardLayout,
        state.rules
      );
      state.winnerId = winnerId;
      state.gameOver = gameOver;

      state.moves = updateMoves(
        state.moves,
        playerId,
        moveSpecs,
        gameOver,
        updatedBoardLayout
      );

      const nextPlayer = getNextPlayer(playerId, state.players.active);
      // console.log('next player', nextPlayer)
      state.current.playerId = nextPlayer;
    },
    startNewGame: (state, action: PayloadAction<IGame>) => {
      state = action.payload;
    },
  },
  extraReducers: {
    "REDUX_WEBSOCKET::MESSAGE": (_, action: PayloadAction<any>) => {
      console.log("ws.message @gameSlice", JSON.parse(action.payload.message));
    },
  },
});

export const selectBoardLayout = (state: RootState) =>
  getMove(state.game.moves, "last").boardLayout;
export const selectPlayerSymbols = (state: RootState) =>
  state.game.playerSymbols;
export const selectPlayers = (state: RootState) => state.game.players;
export const selectWinnerId = (state: RootState) => state.game.winnerId;
export const selectGameOver = (state: RootState) => state.game.gameOver;
export const selectCurrentPlayerId = (state: RootState) =>
  state.game.current.playerId;
export const selectRoundNo = (state: RootState) => state.game.moves.length;
export const selectRules = (state: RootState) => state.game.rules;

export const { addMove } = gameSlice.actions;

export default gameSlice.reducer;
