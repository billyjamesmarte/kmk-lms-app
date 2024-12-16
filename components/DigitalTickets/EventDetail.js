import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";

function EventDetail({ icon, label, value }) {
  return (
    <View style={styles.userDetail}>
      <View style={styles.userDetailIcon}>
        <Icon
          name={icon}
          style={[styles.eventIcon, styles.textWhite, { fontSize: 27 }]}
        />
      </View>
      <View style={{ marginLeft: 24 }}>
        <Text style={[styles.eventLabel, styles.textWhite]}>{label}</Text>
        <Text style={[styles.eventValue, styles.textWhite]}>{value}</Text>
      </View>
    </View>
  );
}

export default EventDetail;

const styles = StyleSheet.create({
  userDetail: {
    marginTop: 17,
    flexDirection: "row",
    alignItems: "center",
    verticalAlign: "middle",
  },
  userDetailIcon: {
    marginLeft: 8,
    height: 33,
    width: 33,
    backgroundColor: Colors.light500,
    borderRadius: 15,
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  textWhite: {
    color: Colors.light500,
  },
  eventIcon: {
    fontSize: 17,
    paddingRight: "10px",
  },
  eventLabel: {
    fontSize: 18,
    fontWeight: "900",
    marginRight: "10px",
  },
  eventValue: {
    fontSize: 18,
    marginRight: "10px",
  },
});
