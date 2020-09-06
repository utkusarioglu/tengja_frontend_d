import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGamesList } from './gamesList.types';
import { RootState } from '../../app/store';


const initialState: IGamesList = {
    items: [],
}

const gameListSlice = createSlice({
    name: 'gameList',
    initialState,
    reducers: {},
    extraReducers: {
        'REDUX_WEBSOCKET::MESSAGE': (state, action: PayloadAction<any>) => {
            const message = JSON.parse(action.payload.message);
            if(message.gamesList !== undefined) {
                state.items = message.gamesList.items;
            }
            return state;
        }
    }
})

export const selectGamesList = (state: RootState) => state.gameList

export default gameListSlice.reducer;