import { View, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";

import DashboardScreen from "../screens/DashboardScreen";
import DailyScreen from "../screens/DailyScreen";
import ChatKmkScreen from "../screens/ChatKmkScreen";
import DigitalTextbooksScreen from "../screens/DigitalTextbooksScreen";
import DigitalTicketScreen from "../screens/DigitalTicketScreen";

import IconButton from "../components/ui/IconButton";
import Colors from "../constants/colors";
import QRCodeScannerScreen from "../screens/QRCodeScannerScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      {/* Logo at the top */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/kmk-logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function notificationHandler() {
  console.log("Notification Handler");
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.dark400,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        // sceneContainerStyle: { backgroundColor: "#f5f5f5" },
        drawerContentStyle: { backgroundColor: "#f5f5f5" },
        drawerActiveTintColor: "#1f65ff",
        drawerInactiveTintColor: "#333",
        // drawerActiveBackgroundColor: "#ccc",
        headerRight: () => (
          <IconButton
            onPress={notificationHandler}
            icon="notifications"
            color="white"
            size={24}
            style={{ marginRight: 10 }}
          />
        ),
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: "Dashboard",
          drawerIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Daily"
        component={DailyScreen}
        options={{
          title: "Daily",
          drawerIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
            // bell-o
          ),
        }}
      />
      <Drawer.Screen
        name="DigitalTickets"
        component={DigitalTicketScreen}
        options={{
          title: "Digital Ticket",
          drawerIcon: ({ color, size }) => (
            <Icon name="ticket" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="DigitalTextbooks"
        component={DigitalTextbooksScreen}
        options={{
          title: "Digital Textbooks",
          drawerIcon: ({ color, size }) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="QRCodeScanner"
        component={QRCodeScannerScreen}
        options={{
          title: "QR Code Scanner",
          drawerIcon: ({ color, size }) => (
            <Icon name="qrcode" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="ChatKmk"
        component={ChatKmkScreen}
        options={{
          title: "Chat KMK",
          drawerIcon: ({ color, size }) => (
            <Icon name="comment" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  logo: {
    width: 190,
    height: 48,
    borderRadius: 4,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#1f65ff",
  },
});