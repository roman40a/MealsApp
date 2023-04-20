import { FC, useContext, useMemo } from "react";
import { Text } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen: FC = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const meals = useMemo(() => {
    const { ids } = favoriteMealsCtx;

    return MEALS.filter((meal) => ids.includes(meal.id));
  }, [favoriteMealsCtx]);

  return <MealsList meals={meals} />;
};

export default FavoritesScreen;
