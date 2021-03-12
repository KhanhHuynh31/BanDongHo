/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
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
//signUp
const signUp = () => {
  const navigation = useNavigation();
  const [Name, setName] = useState({ value: "" });
  const [Email, setUserEmail] = useState({ value: "" });
  const [Password, setUserPassword] = useState({ value: "" });
  const [ReEnterPassword, setReEnterPassword] = useState({ value: "" });
  const SignUp = () => {
    const { Name } = useState({ value: "" });
    const { Email } = useState({ value: "" });
    const { PassWord } = useState({ value: "" });  
    const { ReEnterPassword } = useState({ value: "" });
    const [load, setLoading] = useState(true);
    // eslint-disable-next-line max-len
    if (Name === "") {
      alert("Please enter Name");
    } else if (Email === "") {
      alert("Please enter Email");
    } else if (Password === "") {
      alert("Please enter PassWord");
    } else if (ReEnterPassword === "") {
      alert("Please enter ReEnterPassWord");
    } else {
      const URL = "http://192.168.1.3/authen/SignUp.php";
      const headers = {
          Accept: "application/json",
          "Content-Type": "application.jon",
      };
      const Data = {
        Name, 
        Email,
        PassWord,
        ReEnterPassword,
      };

      fetch(URL, 
        {
          method: "POST",
          headers,
          body: JSON.stringify(Data) 
        })
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].Message);
        })
        .catch((error) => {
          alert(`error: ${error}`);
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
    <View style={container} >
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
            onChangeText={(ReEnterPassword) => setReEnterPassword(ReEnterPassword)} 
            placeholder="Re-enter your password " 
            secureTextEntry
          />
          <TouchableOpacity style={bigButton}>
            <Text style={buttonText} onPress={SignUp}>SIGN UP NOW</Text>
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

//signIn
const signIn = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState({ value: "" });
  const [PassWord, setPassWord] = useState({ value: "" });
  const SignIn = () => {
    const { Email } = useState({ value: "" });
    const { PassWord } = useState({ value: "" });  
    if (Email === "" || PassWord === "") {
      alert("Please enter Email and PassWord");
    } else {
      const URL = "http://192.168.1.3/authen/SignIn.php";
      const headers = {
          Accept: "application/json",
          "Content-Type": "application.jon",
      };
      const Data = {
        Email,
        PassWord,
      };

      fetch(URL, 
        {
          method: "POST",
          headers,
          body: JSON.stringify(Data) 
        })
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].Message);
        })
        .catch((error) => {
          alert(`error: ${error}`);
        });
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
    <View style={container} >
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
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholder="Enter your email "
          />
          <TextInput
            style={inputStyle}
            placeholder="Enter your password"
            onChangeText={(userPassWord) => setPassWord(userPassWord)}
            secureTextEntry
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
const SignUp = () => {
    const { Name } = useState({ value: "" });
    const { Email } = useState({ value: "" });
    const { PassWord } = useState({ value: "" });  
    const { ReEnterPassword } = useState({ value: "" });
    // eslint-disable-next-line max-len
    if (Name === "" || Email === "" || PassWord === "" || ReEnterPassword === "") {
      alert("Please enter Email and PassWord");
    } else {
      const URL = "http://192.168.1.3/authen/SignUp.php";
      const headers = {
          Accept: "application/json",
          "Content-Type": "application.jon",
      };
      const Data = {
        Name, 
        Email,
        PassWord,
        ReEnterPassword,
      };

      fetch(URL, 
        {
          method: "POST",
          headers,
          body: JSON.stringify(Data) 
        })
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].Message);
        })
        .catch((error) => {
          alert(`error: ${error}`);
        });
    }
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
