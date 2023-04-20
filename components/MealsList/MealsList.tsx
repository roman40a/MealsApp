import { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "./MealItem";
import Meal from "../../models/meal";

type TMealsListProps = {
  meals: Meal[];
};
const MealsList: FC<TMealsListProps> = ({ meals }) => {
  function renderMealItem({
    item: { title, imageUrl, duration, complexity, affordability, id },
  }) {
    const mealItemProps = {
      id,
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
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
