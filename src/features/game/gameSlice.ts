import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IGame, IMove} from './game.types';
import { evaluateBoard, getMove, updateBoardLayout, updateMoves, getNextPlayer } from './gameLogic';

const initialState: IGame = {
    players: {
        active: [],
        initial: []
    },
    spectators: [],
    moves: [],
    rules: {
        /* initial rules define a tictactoe 
        game with 60 second time limit */
        timeLimit: 60,
        winMode: 'firstStreak',
        tilePop: false,
        rowCount: 3,
        colCount: 3,
        streakLength: 3,
        maxPlayerCount: 2,
    },
    current: {
        playerId: 1,
        time: 0,
    },
    winnerId: 0,
    gameOver: false,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        addMove: (state, action: 
            PayloadAction<IMove>
            ) => {
                const lastMove = getMove(state.moves, 'last');
                const { moveSpecs } = action.payload;
                const { playerId } = state.current;
                const updatedBoardLayout = updateBoardLayout(
                    lastMove, 
                    moveSpecs, 
                    playerId,
                );
                const { winnerId, gameOver } = evaluateBoard(
                    updatedBoardLayout, state.rules,);
                state.winnerId = winnerId
                state.gameOver = gameOver;

                state.moves = updateMoves(
                    state.moves, 
                    playerId, 
                    moveSpecs, 
                    gameOver, 
                    updatedBoardLayout
                );

                state.current.playerId = getNextPlayer(
                    playerId, 
                    state.players.active
                );

        },
    }
});




export const selectPlayers = (state: RootState) => state.game.players;

export default gameSlice.reducer;