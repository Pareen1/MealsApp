import { View, Text, StyleSheet } from "react-native";

function Subtitle({ subtitle }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#848496",
    borderBottomWidth: 2,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
