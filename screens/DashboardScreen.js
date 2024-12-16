import { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  BackHandler,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function DashboardScreen() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Ops!", "Are you sure you want to exit?", [
        { text: "Cancel", style: "cancel" },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true; // Prevent default behavior
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Welcome to the Dashboard</Text>
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
  subtitle: {
    fontSize: 18,
    color: "#333333",
  },
});

export default DashboardScreen;
