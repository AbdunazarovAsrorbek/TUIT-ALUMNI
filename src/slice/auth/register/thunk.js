import { createAsyncThunk } from "@reduxjs/toolkit";
import { register as registerApi } from "../../../helper/helper";
import { toast } from "react-toastify";

export const registerList = createAsyncThunk("register/registerList", async (data) => {
    try {
        const response = registerApi(data);
        const res = await response;
        // console.log(res)
        toast.success("Ro‘yxatdan o‘tish muvaffaqiyatli amalga oshirildi", { autoClose: 2000 });
        return res;
    } catch (error) {
        // console.log(error);
        toast.error(error, { autoClose: 2000 });
        return error;
    }
});