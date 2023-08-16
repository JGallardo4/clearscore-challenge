import { configureStore } from '@reduxjs/toolkit';
import ideaReducer from '@/redux/reducers/ideaSlice';

const store = configureStore({
    reducer: {
        reducer: rootReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store