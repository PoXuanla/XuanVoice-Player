import { configureStore } from "@reduxjs/toolkit";
import musicplayerReducer from "./features/musicplayer/musicplayerSlice";

export const store = configureStore({
  reducer: {
    musicplayer: musicplayerReducer,
  },
});
