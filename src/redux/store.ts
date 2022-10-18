import { configureStore } from '@reduxjs/toolkit'
import { testSlice } from './testSlice';

const rootReducer = {
    test : testSlice.reducer
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;

//config store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch