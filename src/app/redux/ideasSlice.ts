import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

// Define a type for the slice state
interface IdeasState {
  ideas: Array<IIdea>;
}

// Define the initial state using that type
const initialState: IdeasState = JSON.parse(
  localStorage.getItem('ideas') || '{ideas: []}'
);

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
