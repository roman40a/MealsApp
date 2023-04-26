import { createSlice } from "@reduxjs/toolkit";
import { CaseReducer } from "@reduxjs/toolkit/src/createReducer";
import { PayloadAction } from "@reduxjs/toolkit/src/createAction";

export type TFavoritesState = { ids: string[] };
type TFavoritePayload = { id: string };
export type TFavoriteSliceCase = {
  addFavorite: CaseReducer<TFavoritesState, PayloadAction<TFavoritePayload>>;
  removeFavorite: CaseReducer<TFavoritesState, PayloadAction<TFavoritePayload>>;
};
const favoritesSlice = createSlice<TFavoritesState, TFavoriteSliceCase>({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
