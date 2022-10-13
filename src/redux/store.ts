import { configureStore } from '@reduxjs/toolkit'
import { testSlice } from '../components/test/testSlice';

const rootReducer = {
    test : testSlice.reducer
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;