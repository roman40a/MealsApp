import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useCallback, useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;

  const meal = MEALS.find((meal) => meal.id === id);
  const {
    duration,
    complexity,
    affordability,
    title,
    imageUrl,
    ingredients,
    steps,
  } = meal;

  const isFavorite = favoriteMealsCtx.ids.includes(id);

  const favoritePressHandler = useCallback((): void => {
    if (isFavorite) {
      favoriteMealsCtx.removeFavorite(id);
    } else {
      favoriteMealsCtx.addFavorite(id);
    }
  }, [
    isFavorite,
    favoriteMealsCtx.removeFavorite,
    favoriteMealsCtx.addFavorite,
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isFavorite ? "star" : "star-outline"}
          color="white"
          onPress={favoritePressHandler}
        />
      ),
    });
  }, [navigation, isFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
