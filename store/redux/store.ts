import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer, {
  TFavoritesState,
  TFavoriteSliceCase,
} from "./favorites";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

export const store = configureStore<RootState>({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});

export type RootState = {
  favoriteMeals: TFavoritesState;
};
export type AppDispatch = Dispatch<TFavoriteSliceCase>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
