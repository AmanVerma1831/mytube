import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        searchVideos: []
    },
    reducers: {
        setSearchVideos: (state, action) => {
            state.searchVideos = action.payload;
        }
    }
});

export const { setSearchVideos } = videoSlice.actions;

export default videoSlice.reducer;