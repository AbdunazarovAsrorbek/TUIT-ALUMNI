import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    getProfile as getProfileApi,
    addProfile as addProfileApi,
    updateProfile as updateProfileApi,
    getCertificate as getCertificateApi,
} from "../../helper/helper";
import { toast } from "react-toastify";

export const getProfile = createAsyncThunk("Profile/getProfile", async () => {
    try {
        const response = await getProfileApi();
        console.log(response);
        
        return response;
    } catch (error) {
        return error;
    }
});

export const getCertificate = createAsyncThunk(
    "Profile/getCertificate",
    async (id, {rejectWithValue}) => {
        try {
            const response = await getCertificateApi(id);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Sertifikat yuklab bo'lmadi");
        }
    }
);

export const addProfile = createAsyncThunk("Profile/addProfile", async (category) => {
    try {
        const response = addProfileApi(category);
        const data = await response;
        return data;
    } catch (error) {
        return error;
    }
});

export const updateProfile = createAsyncThunk("Profile/update", async (dataArr) => {
    try {
        const response = updateProfileApi(dataArr);
        const data = await response;
        toast.success("Yangilanish muvofaqiyatli amalga oshirildi", { autoClose: 2000 });
        // console.log(data);
        return data;
    } catch (error) {
        toast.error("Yangilashda hatolik yuz berdi", { autoClose: 2000 });
        return error;
    }
});