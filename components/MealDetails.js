import { Text, View, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability, textStyle }) {
  return (
    <View style={styles.details}>
      <Text style={(styles.detailItem, textStyle)}>{duration}m</Text>
      <Text style={(styles.detailItem, textStyle)}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={(styles.detailItem, textStyle)}>{affordability}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
