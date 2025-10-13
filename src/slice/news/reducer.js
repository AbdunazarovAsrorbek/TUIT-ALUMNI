import { createSlice } from "@reduxjs/toolkit";

import {getNews, getNewsById, getNewsForSidebar} from "./thunk";

export const initialState = {
    news: [],
    newsById: {},
    newsForSidebar: [],
    errors: {}
};

const NewsSlice = createSlice({
    name: 'News',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getNews.fulfilled, (state, action) => {
            state.news = action.payload;
        });
        builder.addCase(getNews.rejected, (state, action) => {
            state.error = action.payload || null;
        });

        builder.addCase(getNewsForSidebar.fulfilled, (state, action) => {
            state.newsForSidebar = action.payload;
        });
        builder.addCase(getNewsForSidebar.rejected, (state, action) => {
            state.error = action.payload || null;
        });

        builder.addCase(getNewsById.fulfilled, (state, action) => {
            state.newsById = action.payload;
        });
        builder.addCase(getNewsById.rejected, (state, action) => {
            state.error = action.payload || null;
        });
    }
});

export default NewsSlice.reducer;