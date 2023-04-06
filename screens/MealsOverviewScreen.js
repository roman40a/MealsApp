import { View, FlatList, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

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

  function renderMealItem({
    item: { title, imageUrl, duration, complexity, affordability },
  }) {
    const mealItemProps = {
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
