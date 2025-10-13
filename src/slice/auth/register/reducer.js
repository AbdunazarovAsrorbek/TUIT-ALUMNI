import {createSlice} from "@reduxjs/toolkit";
import {registerList} from "./thunk";

export const initialState = {
    Register: [],
    errors: {}
};

const BrandSlice = createSlice({
    name: 'Register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerList.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.Register.unshift(action.payload);
        });
        builder.addCase(registerList.rejected, (state, action) => {
            state.error = action.payload.error || null;
        });
    }
});

export default BrandSlice.reducer;