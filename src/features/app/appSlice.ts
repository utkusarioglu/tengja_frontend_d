import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface App {
    isConnected: boolean;
    subscriptions: string[],
}

const initialState: App = {
    isConnected: false,
    subscriptions: [],
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        includeSubscription: (state, action: PayloadAction<string>) => {
            if(!state.subscriptions.includes(action.payload)) {
                state.subscriptions.push(action.payload)
            }
        },
        removeSubscription: (state, action: PayloadAction<string>) => {
            state.subscriptions = state.subscriptions
                .filter((v) => v === action.payload)
        },
        clearSubscriptions: (state) => {
            state.subscriptions = []
        }
    },
    extraReducers: {
        'REDUX_WEBSOCKET::OPEN': (state, action: PayloadAction<any>) => {
            state.isConnected = true;
            process.env.NODE_ENV === 'development' &&
                console.log('Websocket OPEN')
            // console.log("connect state: \n", state, action);
        },
        'REDUX_WEBSOCKET::CLOSED': (state, action: PayloadAction<any>) => {
            state.isConnected = false;
            process.env.NODE_ENV === 'development' && 
                console.log('Websocket closed, trying to OPEN')
            // store.dispatch(connect(WEBSOCKET_URL));
        },
        'REDUX_WEBSOCKET::MESSAGE': (_, action: PayloadAction<any>) => {
            console.log("ws.message", JSON.parse(action.payload.message));
        }
    }
})

export const { includeSubscription, removeSubscription, clearSubscriptions } = appSlice.actions;

export const selectIsConnected = (state: RootState) => state.app.isConnected;
export const selectSubscriptions = (state: RootState) => state.app.subscriptions;

export default appSlice.reducer;