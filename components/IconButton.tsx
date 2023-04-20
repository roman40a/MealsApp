import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress, icon, color }) {
  return (
    <Pressable style={({ pressed }) => (pressed ? styles.pressed : undefined)}>
      <Ionicons name={icon} size={24} color={color} onPress={onPress} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.1,
  },
});
