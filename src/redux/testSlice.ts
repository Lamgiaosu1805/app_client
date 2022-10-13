import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const testSlice = createSlice({
    name: "test",
    initialState: {
        text: ""
    },
    reducers: {
        textChange: (state, action: PayloadAction<string>) => {
            //mutation update truc tiep state
            state.text = action.payload;
        } // Tạo 1 action 
    }
});