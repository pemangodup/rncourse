import { View, FlatList, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";

import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

function MealsOverViewScreen({ route }) {
  // Can also use useRoute hooks to get the parameter
  // const route = useRoute();
  // const catId = route.params.categoryId;
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem id={itemData.item.id} title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={renderMealItem}
      />
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
