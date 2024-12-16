import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/colors";
import { useState } from "react";

function ChatKmkScreen() {
  const [startChatKmk, setStartChatKmk] = useState(false);

  function chatKmkHandler() {
    setStartChatKmk(true);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.chatKmkContainer, !startChatKmk && { display: "none" }]}>
        <Text>ChatKMK TADA !!!</Text>
      </View>
      <View style={[styles.letsChatContainer, startChatKmk && { display: "none" }]}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/kmk-360-logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Welcome, Billy!</Text>
          <Text style={styles.subTitle}>
            Let us know your concern, and ChatKMK will help you.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => chatKmkHandler()}
          >
            <Text style={styles.buttonText}>Let's Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  letsChatContainer: {},
  title: {
    fontSize: 40,
    fontWeight: "900",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 17,
  },
  logo: {
    width: 320,
    height: 50,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 200,
  },
  chatButton: {
    padding: 10,
  },
  button: {
    backgroundColor: Colors.dark500,
    width: "100%",
    padding: 8,
    paddingHorizontal: 120,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 19,
    letterSpacing: 1,
  },
});

export default ChatKmkScreen;
