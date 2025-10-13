import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getMediaCategory as getMediaCategoryApi,
    getMedia as getMediaApi,
    //  getMediaById as getMediaByIdApi
} from "../../helper/helper";


export const getMediaCategory = createAsyncThunk("Media/getMediaCategory", async () => {
    try {
        const response = await getMediaCategoryApi();
        console.log("getMediaCategoryApi",response);
        return response;
    } catch (error) {
        throw error;
    }
});


export const getMedia = createAsyncThunk("Media/getMedia", async ({ data, categoryId }) => {
    try {
        const response = await getMediaApi(data, categoryId);
        console.log("mmmmmmmmmmmmmmmmmmmmm",response);
        return response;
    } catch (error) {
        throw error;
    }
});


export const getMediaForSidebar = createAsyncThunk("Media/getMediaForSidebar", async (data) => {
    try {
        const response = await getMediaApi(data);
        console.log("thunk getMediaForSidebar", response);
        return response;
    } catch (error) {
        return error;
    }
});


// export const getMediaById = createAsyncThunk("Media/getMediaById", async (id) => {
//     try {
//         const response = await getMediaByIdApi(id);
//         console.log("thunk getMediaById", response);
//         return response;
//     } catch (error) {
//         return error;
//     }
// });
