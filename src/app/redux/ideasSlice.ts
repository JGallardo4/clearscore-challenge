'use client'

import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

interface IdeasState {
  ideas: Array<IIdea>;
}

// const initialState: IdeasState = JSON.parse(
//   localStorage.getItem('ideas') || '{ideas: []}'
// );

const initialState: IdeasState = { ideas: [
  {
    id: 1, 
    title: "My first idea", 
    description: "This is the first idea", 
    lastUpdated: new Date()
  }] };

export const ideaSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    ideasReducer: (state, action) => {
      let id = action.payload.id;

      switch (action.type) {
        case 'idea/updateTitle':
          state.ideas[id].title = action.payload;
          break;
        case 'idea/updateDescription':
          state.ideas[id].description = action.payload;
          break;
        default:
          break;
      }

      state.ideas[id].lastUpdated = new Date();
    },
  },
});

export const { ideasReducer } = ideaSlice.actions;

export const selectIdeas = (state: RootState) => state.ideas;

export default ideaSlice.reducer;
