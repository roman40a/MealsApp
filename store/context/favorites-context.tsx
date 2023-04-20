import { createContext, FC, useCallback, useMemo, useState } from "react";

type TFavoritesContext = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};
export const FavoritesContext = createContext<TFavoritesContext>({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider: FC = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const addFavorite = useCallback((id: string): void => {
    setFavoriteMealIds((prevIds) => [...prevIds, id]);
  }, []);
  const removeFavorite = useCallback((id: string): void => {
    setFavoriteMealIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
  }, []);

  const value: TFavoritesContext = useMemo(
    () => ({
      ids: favoriteMealIds,
      addFavorite,
      removeFavorite,
    }),
    [favoriteMealIds, addFavorite, removeFavorite]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
