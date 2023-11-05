import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
}


const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleState: (state, action) => {
      return state;
    },
    open: (state, action) => {
      state.toggle = !state.toggle;
    }
  }
})

export const { toggleState, open } = toggleSlice.actions;
export default toggleSlice.reducer;