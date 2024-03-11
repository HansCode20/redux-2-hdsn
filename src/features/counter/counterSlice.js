import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increase: (state, action) => {
      state.counter += action.payload;
    },
    decrease: (state, action) => {
      state.counter -= action.payload;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

export const { increase, decrease, reset } = counterSlice.actions;

export default counterSlice.reducer;
