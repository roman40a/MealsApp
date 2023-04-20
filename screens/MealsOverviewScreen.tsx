import { useRoute, useNavigation } from "@react-navigation/native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen() {
  const {
    params: { categoryId },
  } = useRoute();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    const category = CATEGORIES.find(({ id }) => id === categoryId);

    navigation.setOptions({ title: category.title });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter(({ categoryIds }) =>
    categoryIds.includes(categoryId)
  );

  return <MealsList meals={displayedMeals} />;
}

export default MealsOverviewScreen;
