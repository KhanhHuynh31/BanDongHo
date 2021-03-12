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
import { createStackNavigator } from "@react-navigation/stack";
import icBack from "../../media/backList.png";
import icLogo from "../../media/cate1.jpg";

const Stack = createStackNavigator();

const signUp = () => {
  const navigation = useNavigation();
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
        <TouchableOpacity>
          <Image source={icBack} style={iconStyle} />
        </TouchableOpacity>
        <Text style={titleStyle}> Wearing a Dress</Text>
        <Image source={icLogo} style={iconStyle} />
      </View>
      <View>
        <View>
          <TextInput style={inputStyle} placeholder="Enter your name " />
          <TextInput style={inputStyle} placeholder="Enter your email " />
          <TextInput style={inputStyle} placeholder="Enter your password " />
          <TextInput style={inputStyle} placeholder="Re-enter your password " />
          <TouchableOpacity style={bigButton}>
            <Text style={buttonText}>SIGN UP NOW</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={controlStyle}>
        <TouchableOpacity
          style={signInStyle}
          onPress={() => navigation.navigate("signIn")}
        >
          <Text style={activeStyle}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={signUpStyle}
          onPress={() => navigation.navigate("signUp")}
        >
          <Text styles={inactiveStyle}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const signIn = () => {
  const navigation = useNavigation();
  const [email, setUserEmail] = useState({ value: "" });
  const [password, setUserPassword] = useState({ value: "" });
  const SignIn = () => {
    if (email === "" || password === "") {
      Alert.alert("Ten dang nhap khong duoc rong");
    } else if (email === "admin" && password === "admin") {
      Alert.alert("Dang nhap thanh cong");
    } else {
      Alert.alert("Sai ten dang nhap");
    }
  };
  const {
    row1,
    iconStyle,
    titleStyle,
    container,
    controlStyle,
    signUpStyle,
    signInStyle,
    activeStyle,
    bigButton,
    buttonText,
    inputStyle,
  } = styles;
  return (
    <View style={container}>
      <View style={row1}>
        <TouchableOpacity>
          <Image source={icBack} style={iconStyle} />
        </TouchableOpacity>
        <Text style={titleStyle}> Wearing a Dress</Text>
        <Image source={icLogo} style={iconStyle} />
      </View>
      <View>
        <View>
          <TextInput
            style={inputStyle}
            // eslint-disable-next-line no-undef
            onChangeText={(userEmail) => setUserEmail(userEmail)}
            // eslint-disable-next-line react/jsx-closing-bracket-location
            placeholder="Enter your email "
          />
          <TextInput
            style={inputStyle}
            // eslint-disable-next-line no-undef
            onChangeText={(userPassword) => setUserPassword(userPassword)}
            placeholder="Enter your password "
          />
          <TouchableOpacity style={bigButton}>
            <Text style={buttonText} onPress={SignIn}>
              SIGN IN NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={controlStyle}>
        <TouchableOpacity
          style={signInStyle}
          onPress={() => navigation.navigate("signIn")}
        >
          <Text style={activeStyle}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={signUpStyle}
          onPress={() => navigation.navigate("signUp")}
        >
          <Text style={activeStyle}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export function Authentication() {
  return (
    <Stack.Navigator initialRouteName="signIn">
      <Stack.Screen name="signIn" component={signIn} />
      <Stack.Screen name="signUp" component={signUp} />
    </Stack.Navigator>
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
