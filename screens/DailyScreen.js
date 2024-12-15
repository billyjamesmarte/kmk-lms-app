import { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

// Notifications
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

function DailyScreen() {
  useEffect(() => {
    // Request permission for notifications
    async function requestPermissions() {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        await Notifications.requestPermissionsAsync();
      }
    }
    requestPermissions();
  }, []);

  // Function to trigger a local notification
  async function scheduleNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "KMK LMS: Word of the Day! 📅",
        body: "'Golgi apparatus' works with the rough endoplasmic reticulum (rER) to modify the basic proteins to create specialized proteins.",
        data: { userData: "Golgi apparatus" },
      },
      trigger: { seconds: 2 },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Notification</Text>
      <TouchableOpacity style={styles.button} onPress={scheduleNotification}>
        <Text style={styles.buttonText}>Show Local Notification</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: Colors.primary500,
    width: "70%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DailyScreen;
