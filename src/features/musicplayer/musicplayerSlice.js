import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};
export const musicplayerSlice = createSlice({
  name: "musicplayer",
  initialState,
  reducers: {
    toggleShow: (state) => {
      state.show = !state.show;
    },
    
  },
});
export const { toggleShow,play } = musicplayerSlice.actions;

export default musicplayerSlice.reducer;
