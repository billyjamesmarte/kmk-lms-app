import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Colors from "../constants/colors";
import { useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";

function ChatKmkScreen() {
  const [inputMessage, setInputMessage] = useState("");
  const [startChatKmk, setStartChatKmk] = useState(false);

  function chatKmkHandler() {
    setStartChatKmk(true);
  }

  function sendMessageHandler() {
    console.log(inputMessage);
    setInputMessage("");
  }

  return (
    <View style={styles.container}>
      <View
        style={[styles.chatKmkContainer, !startChatKmk && { display: "none" }]}
      >
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.chatContainer}>
            <View style={styles.chatTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={styles.chatText}>Hello World!</Text>
            </View>
            <View style={styles.chatTextContainer}>
              <Text style={[styles.chatText, styles.chatTextNoIcon]}>
                How can I assist you today?
              </Text>
            </View>
            <View style={styles.userTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={[styles.chatText, styles.userText]}>
                I would like to inquire about the prices of board plans.
              </Text>
            </View>
            <View style={styles.chatTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={[styles.chatText, styles.chatButton]}>Boards One</Text>
              <Text style={[styles.chatText, styles.chatButton]}>Boards Two</Text>
              <Text style={[styles.chatText, styles.chatButton]}>Boards Three</Text>
            </View>
            <View style={styles.userTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={[styles.chatText, styles.userText]}>Boards</Text>
            </View>
            <View style={styles.chatTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={styles.chatText}>
                Can't find what you're looking for. Please select{"\n"}from the
                options.
              </Text>
            </View>
            <View style={styles.userTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={[styles.chatText, styles.userText]}>Boards One</Text>
            </View>
            <View style={styles.chatTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={styles.chatText}>Boards One price is $1,975.00</Text>
            </View>
            <View style={styles.chatTextContainer}>
              <Text style={[styles.chatText, styles.chatTextNoIcon]}>
                Did you find what you're looking for?
              </Text>
            </View>
            <View style={styles.userTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={[styles.chatText, styles.userText]}>Yes</Text>
            </View>
            <View style={styles.chatTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={styles.chatText}>
                Great! If you have any concerns, ChatKMK is{"\n"}here to help.
              </Text>
            </View>
            <View style={styles.userTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={[styles.chatText, styles.userText]}>
                I would like to request a plan extension.
              </Text>
            </View>
            <View style={styles.chatTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={styles.chatText}>
                First, lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lastly, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </Text>
            </View>
            <View style={styles.chatTextContainer}>
              <Text style={[styles.chatText, styles.chatTextNoIcon]}>
                Did you find what you're looking for?
              </Text>
            </View>
            <View style={styles.userTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={[styles.chatText, styles.userText]}>No</Text>
            </View>
            <View style={styles.chatTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={styles.chatText}>
                Support <Text style={styles.link}>Ticket#12345</Text> has been
                created.{"\n"}Please wait 1-2 business days for a{"\n"}response.
              </Text>
            </View>
            <View style={styles.chatTextContainer}>
              <Text style={[styles.chatText, styles.chatTextNoIcon]}>
                Please add any additional information to the ticket.
              </Text>
            </View>
            <View style={styles.userTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={[styles.chatText, styles.userText]}>
                My plan is ipsum dolor sit amet, consectetur.
              </Text>
            </View>
            <View style={styles.chatTextContainer}>
              <Icon name="user-circle" style={styles.chatIcon} />
              <Text style={styles.chatText}>
                Support <Text style={styles.link}>Ticket#12345</Text> has been
                updated.
              </Text>
            </View>
            <View style={styles.chatTextContainer}>
              <Text style={[styles.chatText, styles.chatTextNoIcon]}>
                Anything else I can help you with?
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.inputMessageContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message to ChatKMK"
              value={inputMessage}
              onChangeText={setInputMessage}
            />
            <TouchableOpacity onPress={() => sendMessageHandler()}>
              <Icon
                name="paper-plane"
                style={[styles.chatIcon, styles.sendMessage]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={[styles.letsChatContainer, startChatKmk && { display: "none" }]}
      >
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
  },
  letsChatContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.light500,
  },
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
  chatContainer: {
    width: "100%",
    paddingBottom: 20,
  },
  chatKmkContainer: {
    padding: 20,
  },
  chatTextContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    flexWrap: "wrap",
  },
  chatIcon: {
    fontSize: 25,
    color: Colors.dark500,
  },
  chatText: {
    fontSize: 15,
    color: Colors.dark500,
    marginLeft: 10,
    backgroundColor: Colors.secondary300,
    padding: 10,
    borderRadius: 10,
  },
  chatTextNoIcon: {
    marginLeft: 35,
  },
  userTextContainer: {
    marginTop: 15,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  userText: {
    color: Colors.light500,
    backgroundColor: "#0375ff",
    marginRight: 10,
    // width: "85%",
  },
  link: {
    color: Colors.primary500,
    fontWeight: "bold",
  },
  inputMessageContainer: {},
  inputContainer: {
    color: Colors.dark500,
    borderColor: Colors.dark100,
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  input: {
    color: Colors.dark500,
    borderColor: Colors.dark100,
    width: "85%",
  },
  scrollViewContainer: {
    height: "92%",
    marginBottom: 10,
  },
  sendMessage: {
    marginRight: 10,
  },
  chatButton: {
    backgroundColor: Colors.dark400,
    color: Colors.light500,
  }
});

export default ChatKmkScreen;
