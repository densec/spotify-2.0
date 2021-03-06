import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPlayTrack: {},
  playing: false,
  searchTerm: "",
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setCurrentTrack: (state, action) => {
      state.currentPlayTrack = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setCurrentTrack, setPlaying, setSearchTerm } = songSlice.actions;

export const selectCurrentPlayTrack = (state) => state.song.currentPlayTrack;
export const selectPlaying = (state) => state.song.playing;
export const selectSearchTerm = (state) => state.song.searchTerm;

export default songSlice.reducer;
