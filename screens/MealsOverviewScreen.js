import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";

import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverViewScreen({ route, navigation }) {
  // Can also use useRoute hooks to get the parameter
  // const route = useRoute();
  // const catId = route.params.categoryId;
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
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
