import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const testSlice = createSlice({
    name: "test",
    initialState: {
        value: 0
    },
    reducers: {
        textChange: (state, action: PayloadAction<number>) => {
            //mutation update truc tiep state
            state.value += action.payload;
        } // Tạo 1 action 
    }
});