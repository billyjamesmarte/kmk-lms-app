import { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/colors";

function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  // call this function when the clicks the sign in button
  function loginAccount() {
    navigation.replace("Menu");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/360-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Log In To Your Account</Text>
      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={username}
          onChangeText={setUsername}
        />
        <Icon name="envelope" style={styles.icon} />
      </View>
      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Icon name={secureText ? "eye-slash" : "eye"} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => loginAccount()}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Forgot Your 
        <Text style={styles.linkText}> Password</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 20,
    color: "#2C3E50",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#F5F5F5",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  icon: {
    marginLeft: 10,
    fontSize: 17,
    color: "#ccc",
  },
  button: {
    backgroundColor: Colors.primary500,
    width: "100%",
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
  footerText: {
    fontSize: 14,
    color: "#333",
    marginTop: 10,
  },
  linkText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default LoginScreen;
