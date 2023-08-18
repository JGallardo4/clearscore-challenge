import { configureStore } from '@reduxjs/toolkit';
import ideasReducer from '@/redux/ideasSlice';

const store = configureStore({
    reducer: {
        ideas: ideasReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
