import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress }) {
  return (
    <Pressable style={({ pressed }) => (pressed ? styles.pressed : undefined)}>
      <Ionicons name="star" size={24} color="white" onPress={onPress} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.1,
  },
});
