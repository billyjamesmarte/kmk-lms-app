import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import Icon from "react-native-vector-icons/FontAwesome";

function EventDate({ icon, value }) {
  return (
    <View style={styles.eventDate}>
      <Text>
        <Icon name={icon} style={[styles.eventIcon, styles.textWhite]} />
        <Text style={[styles.eventDetail, styles.textWhite]}>
          &nbsp;&nbsp;{value}
        </Text>
      </Text>
    </View>
  );
}

export default EventDate;

const styles = StyleSheet.create({
  eventDetail: {
    fontSize: 16,
    marginRight: "10px",
  },
  eventDate: {
    backgroundColor: Colors.dark400,
    padding: 13,
    borderRadius: 7,
    marginVertical: 5,
  },
  textWhite: {
    color: Colors.light500,
  },
  eventIcon: {
    fontSize: 17,
    paddingRight: "10px",
  },
});
