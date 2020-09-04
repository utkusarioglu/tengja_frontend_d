import { createSlice, 
    PayloadAction,
} from '@reduxjs/toolkit';
// import { RootState } from '../../app/store';

export interface Player {
    name: string;
    motto: string;
}

const initialState: Player = {
    name: '',
    motto: '',
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        createPlayer: (state, action) => {
            console.log("create player action\n", action)
            state = action.payload;
        },
        populatePlayer: (state, action) => {

        }
    },
    extraReducers: {
        'REDUX_WEBSOCKET::MESSAGE': (state, action: PayloadAction<any>) => {
            const message = JSON.parse(action.payload.message);
            if(message.player !== undefined) {
                state = message.player;
            }
            return state;
        }
    }
});
export const { createPlayer } = playerSlice.actions;
export default playerSlice.reducer;