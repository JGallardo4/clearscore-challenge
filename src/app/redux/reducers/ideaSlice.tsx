import { createSlice } from '@reduxjs/toolkit';

const ideaSlice = createSlice({
    name: 'idea',
    initialState: {
        id: null,
        title: null,
        description: null,
        lastUpdated: new Date(),
    },
    reducers: {
        SET_TITLE: (state, action) => {
            state.title = action.payload            
        },
        SET_DESCRIPTION: (state, action) => {
            state.description = action.payload
        },
        UPDATE_LAST_UPDATED: (state, action) => {
            state.lastUpdated = new Date()
        },
    }
})

export const { SET_TITLE, SET_DESCRIPTION } = ideaSlice.actions;
export default ideaSlice.reducer;