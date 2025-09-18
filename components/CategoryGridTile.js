import { View, Text, Pressable, StyleSheet } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View>
      <Pressable>
        <View style={{ backgroundColor: color }}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  hehe: {
    backgroundColor: "red",
  },
});
