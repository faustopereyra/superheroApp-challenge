import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Superhero, getAllSuperheroes } from "./superheroAPI";

interface SuperheroState {
  superheroes: Superhero[];
  status: "idle" | "loading" | "failed";
}

const initialState: SuperheroState = {
  superheroes: [],
  status: "idle",
};

// Async thunk for fetching all superheroes
export const fetchAllSuperheroes = createAsyncThunk(
  "superHero/fetchSuperHeros",
  async () => {
    const response = await getAllSuperheroes();
    return response;
  }
);

// Superhero slice
export const superheroSlice = createSlice({
  name: "superhero",
  initialState,
  reducers: {
    clearSuperheroes: (state) => {
      state.superheroes = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSuperheroes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllSuperheroes.fulfilled, (state, action) => {
        state.status = "idle";
        state.superheroes = action.payload;
      })
      .addCase(fetchAllSuperheroes.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { clearSuperheroes } = superheroSlice.actions;

export default superheroSlice.reducer;
