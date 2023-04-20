import { FC, useContext, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen: FC = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const meals = useMemo(() => {
    const { ids } = favoriteMealsCtx;

    return MEALS.filter((meal) => ids.includes(meal.id));
  }, [favoriteMealsCtx]);

  if (meals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite yet.</Text>
      </View>
    );
  }

  return <MealsList meals={meals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
