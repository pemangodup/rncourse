import { useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";

import MealList from "../components/MealList/MealList";
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

  return <MealList items={displayedMeals} />;
}

export default MealsOverViewScreen;
