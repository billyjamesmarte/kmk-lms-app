import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/colors";

import EventDetail from "../components/DigitalTickets/EventDetail";
import EventDate from "../components/DigitalTickets/EventDate";
// import QRCode from "react-native-qrcode-svg";

function DigitalTicketScreen() {
  const data = JSON.stringify({ screen: "Dashboard" });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Billy 🎉</Text>
      <View style={styles.eventContainer}>
        <Text style={[styles.eventTitle, styles.textWhite]}>
          December KMK Live Day One
        </Text>
        <View style={styles.eventDateContainer}>
          <EventDate
            icon="calendar"
            value="Start: December 11, 2024 08:00AM CST"
          />
          <EventDate
            icon="calendar"
            value="End: December 13, 2024 11:00AM CST"
          />
        </View>
        <View style={styles.eventDivider}></View>
        <View style={styles.userDetails}>
          <EventDetail icon="user" label="Name" value="Billy James Marte" />
          <EventDetail icon="building-o" label="School" value="Oklahoma" />
          <EventDetail
            icon="map-marker"
            label="Event Location"
            value="1001 North Grand Avenue, Tahlequah, Oklahoma 74464"
          />
          <EventDetail
            icon="user-md"
            label="Instructor"
            value="Engineering Team"
          />
        </View>
      </View>
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
    marginTop: 20,
    marginBottom: 20,
  },
  eventContainer: {
    backgroundColor: Colors.dark500,
    width: "90%",
    height: "70%",
    borderRadius: 10,
    padding: 15,
  },
  eventTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  textWhite: {
    color: Colors.light500,
  },
  eventDateContainer: {
    marginTop: 10,
  },
  eventIcon: {
    fontSize: 17,
    paddingRight: "10px",
  },
  userDetails: {
    marginTop: 2,
  },
  eventDivider: {
    backgroundColor: Colors.light500,
    height: 1,
    marginTop: 20,
    marginBottom: 10,
    borderStyle: "dotted",
    borderRadius: 10,
    borderWidth: 5,
  },
});

export default DigitalTicketScreen;
