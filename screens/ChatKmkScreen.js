import { View, Text, StyleSheet } from "react-native";

function ChatKmkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat KMK Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ChatKmkScreen;
