
import { createSlice } from "@reduxjs/toolkit";

import {
    getMediaCategory,
    getMedia,
    // getMediaById,
    getMediaForSidebar
} from "./thunk";

export const initialState = {
    mediaList: [],
    mediaCategoryList: [],
    mediaById: {},
    mediaForSidebar: [],
    error: {}
};

const MediaSlice = createSlice({
    name: 'MediaSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getMediaCategory.fulfilled, (state, action) => {
            // console.log("getMediaCategory", action.payload);
            state.mediaCategoryList  = action.payload;
        });
        builder.addCase(getMediaCategory.rejected, (state, action) => {
            state.error = action.error || "Unknown error";
        });


        builder.addCase(getMedia.fulfilled, (state, action) => {
            // console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmm", action.payload);
            state.mediaList = action.payload;
        });
        builder.addCase(getMedia.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });


        builder.addCase(getMediaForSidebar.fulfilled, (state, action) => {
            // console.log("reducer getMediaForSidebar", action.payload);
            state.mediaForSidebar = action.payload;
        });
        builder.addCase(getMediaForSidebar.rejected, (state, action) => {
            state.error = action.payload || null;
        });

        // builder.addCase(getMediaById.fulfilled, (state, action) => {
            // console.log("reducer getMediaById",action.payload);
        //     state.mediaById = action.payload;
        // });
        // builder.addCase(getMediaById.rejected, (state, action) => {
        //     state.error = action.payload || null;
        // });

    }
});

export default MediaSlice.reducer;