import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen({ navigation }) {
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal) => {
    return favouriteMealIds.includes(meal.id);
  });

  if (favouriteMeals.length === 0 || !favouriteMeals) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourites yet!</Text>
      </View>
    );
  }
  return <MealsList items={favouriteMeals} navigation={navigation} />;
}

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
  },
});
