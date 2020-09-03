import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Player {
    
}

const initialState: Player = false;

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        createPlayer: (state, action) => {

        },
        populatePlayer: (state, action) => {

        }
    }
});

export default playerSlice.reducer;