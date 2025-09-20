import { View, Text } from "react-native";

function MealItem({ id, title }) {
  return (
    <View>
      <Text key={id}>{title}</Text>
    </View>
  );
}

export default MealItem;
