import { View, Text, StyleSheet } from "react-native";
import React from "react";
// import QRCode from "react-native-qrcode-svg";

function DigitalTicketScreen() {
  const data = JSON.stringify({ screen: "Dashboard" });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital Ticket Screen</Text>
      <Text style={styles.title}>Scan this QR Code</Text>
      {/* <QRCode
        value={data}
        size={200}
        color="black"
        backgroundColor="white"
      /> */}
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

export default DigitalTicketScreen;
