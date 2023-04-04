import { Text, View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen() {
  const {
    params: { categoryId },
  } = useRoute();

  const displayedMeals = MEALS.filter(({ categoryIds }) =>
    categoryIds.includes(categoryId)
  );

  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen</Text>
      <Text>{categoryId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
