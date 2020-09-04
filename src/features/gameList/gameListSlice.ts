import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameList {
    gamesList: GameListing[]
}

export interface GameListing {
    name: string;
}

const initialState: GameList = {
    gamesList: [],
}

const gameListSlice = createSlice({
    name: 'gameList',
    initialState,
    reducers: {},
    extraReducers: {
        'REDUX_WEBSOCKET::MESSAGE': (state, action: PayloadAction<any>) => {
            const message = JSON.parse(action.payload.message);
            if(message.gamesList !== undefined) {
                state = message.gamesList;
            }
            return state;
        }
    }
})


export default gameListSlice.reducer;