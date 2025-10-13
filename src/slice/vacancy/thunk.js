import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getVacancy as getVacancyApi, getVacancyById as getVacancyByIdApi
} from "../../helper/helper";

export const getVacancy = createAsyncThunk("Vacancy/getVacancy", async (data) => {
    try {
        const response = await getVacancyApi(data);
        // console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
});


export const getVacancyForSidebar = createAsyncThunk("Vacancy/getVacancyForSidebar", async (data) => {
    try {
        const response = await getVacancyApi(data);
        // console.log("thunk getVacancyForSidebar", response);
        return response;
    } catch (error) {
        return error;
    }
});


export const getVacancyById = createAsyncThunk("Vacancy/getVacancyById", async (id) => {
    try {
        const response = await getVacancyByIdApi(id);
        // console.log("thunk getVacancyById", response);
        return response;
    } catch (error) {
        return error;
    }
});
