import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import icBack from "../../media/backList.png";
import icLogo from "../../media/logowatch.png";

export function SignUp() {

  const navigation = useNavigation();
  const [Name, setName] = useState({ value: "" });
  const [Email, setUserEmail] = useState({ value: "" });
  const [Password, setUserPassword] = useState({ value: "" });
  const [ReEnterPassword, setReEnterPassword] = useState({ value: "" });

  const register = (email, name, password) => 
    fetch("http://192.168.26.1/csdl/register.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, name, password }),
    }).then((res) => res.text());
  

  const onSuccess = () => {
    Alert.alert(
      "Notice",
      "Sign up successfully",
      [{ text: "OK", onPress: navigation.navigate("SIGN_IN") }],
      { cancelable: false }
    );
  };

  const onFail = () => {
    Alert.alert("Notice", "Email has exists", [{ text: "OK" }], {
      cancelable: false,
    });
  };
  const signUp = () => {
    if (Name === "") {
      Alert.alert("Please enter Name");
    } else if (Email === "") {
      Alert.alert("Please enter Email");
    } else if (Password === "") {
      Alert.alert("Please enter PassWord");
    } else if (ReEnterPassword === "") {
      Alert.alert("Please enter ReEnterPassWord");
    } else if (ReEnterPassword !== Password) {
      Alert.alert("Password not match");
    } else {
      register(Email, Name, Password).then((res) => {
        if (res === "THANH_CONG") return onSuccess();
        onFail();
        console.log(res);
      });
    }
  };
  const {
    row1,
    iconStyle,
    titleStyle,
    container,
    controlStyle,
    signInStyle,
    signUpStyle,
    inactiveStyle,
    activeStyle,
    bigButton,
    buttonText,
    inputStyle,
  } = styles;

  return (
    <View style={container}>
      <View style={row1}>
        <TouchableOpacity onPress={() => navigation.navigate("HOME_VIEW")}>
          <Image source={icBack} style={iconStyle} />
        </TouchableOpacity>
        <Text style={titleStyle}> Buy a Watch</Text>
        <Image source={icLogo} style={iconStyle} />
      </View>
      <View>
        <View>
          <TextInput
            style={inputStyle}
            onChangeText={(Name) => setName(Name)}
            placeholder="Enter your name "
          />
          <TextInput
            style={inputStyle}
            onChangeText={(Email) => setUserEmail(Email)}
            placeholder="Enter your email "
          />
          <TextInput
            style={inputStyle}
            onChangeText={(PassWord) => setUserPassword(PassWord)}
            placeholder="Enter your password "
            secureTextEntry
          />
          <TextInput
            style={inputStyle}
            onChangeText={(ReEnterPassword) =>
              setReEnterPassword(ReEnterPassword)
            }
            placeholder="Re-enter your password "
            secureTextEntry
          />
          <TouchableOpacity style={bigButton}>
            <Text style={buttonText} onPress={signUp}>
              SIGN UP NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={controlStyle}>
        <TouchableOpacity
          style={signInStyle}
          onPress={() => navigation.navigate("SIGN_IN")}
        >
          <Text style={activeStyle}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={signUpStyle}
          onPress={() => navigation.navigate("SIGN_UP")}
        >
          <Text styles={inactiveStyle}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3EBA77",
    padding: 20,
    justifyContent: "space-between",
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  titleStyle: { color: "#FFF", fontSize: 30 },
  iconStyle: { width: 30, height: 30 },
  controlStyle: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  inactiveStyle: {
    color: "#D7D7D7",
  },
  activeStyle: {
    color: "#3EBA77",
  },
  signInStyle: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 3,
  },
  signUpStyle: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 3,
  },
  inputStyle: {
    height: 50,
    backgroundColor: "#FFF",
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 30,
  },
  bigButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {},
});
