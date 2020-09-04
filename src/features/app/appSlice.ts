import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface App {
    isConnected: boolean;
}

const initialState: App = {
    isConnected: false,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // setIsConnected: (state, action: PayloadAction<boolean>) => {
        //     // console.log("app state", state)
        //     state.isConnected = action.payload;
        // },
    },
    extraReducers: {
        'REDUX_WEBSOCKET::CONNECT': (state, action: PayloadAction<any>) => {
            state.isConnected = true;
            console.log("connect state: \n", state, action);
        },
        // 'REDUX_WEBSOCKET::MESSAGE': (state, action: PayloadAction<any>) => {
        //     console.log("app responding to websocket", state, action);
        // }
    }
})

// export const { setIsConnected } = appSlice.actions;

export default appSlice.reducer;

export const selectIsConnected = (state: RootState) => state.app.isConnected;