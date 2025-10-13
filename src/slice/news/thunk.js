import { createAsyncThunk } from "@reduxjs/toolkit";
import {getNews as getNewsApi, getNewsById as getNewsByIdApi} from "../../helper/helper";

export const getNews = createAsyncThunk("News/getNews", async (data) => {
    try {
        const response = await getNewsApi(data);
        return response;
    } catch (error) {
        return error;
    }
});

export const getNewsForSidebar = createAsyncThunk("News/getNewForSidebar", async (data) => {
    try {
        const response = await getNewsApi(data);
        return response.data;
    } catch (error) {
        return error;
    }
});


export const getNewsById = createAsyncThunk("News/getNewsById", async (id) => {
    try {
        const response = await getNewsByIdApi(id);
        return response.data;
    } catch (error) {
        return error;
    }
});



