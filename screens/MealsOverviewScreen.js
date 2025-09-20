import { View, Text, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";

function MealsOverViewScreen({ route }) {
  // Can also use useRoute hooks to get the parameter
  // const route = useRoute();
  // const catId = route.params.categoryId;
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Over View {catId}</Text>
    </View>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
