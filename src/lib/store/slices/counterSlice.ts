import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// define interface for state
interface CounterState {
    value: number;
    isLoading: boolean;
}

// State init
const initialState: CounterState = {
    value: 0,
    isLoading: false,
}

// Create slice with createSlice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // Action creator and reducers is make auto
        increment: (state) => {
            state.value += 1; //Imer allow "mutate" state
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        reset : (state) => {
            state.value = 0;
        }
    }
})

// Export action and redux
export const { increment, decrement, incrementByAmount, setLoading, reset } = counterSlice.actions;
export default counterSlice.reducer;
