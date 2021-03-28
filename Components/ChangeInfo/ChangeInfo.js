import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import icBack from "../../media/backList.png";
import "../../global.js";

export function ChangeInfo() {
  const navigation = useNavigation();
  const [Name, setName] = useState({ value: "" });
  const [Address, setAddress] = useState({ value: "" });
  const [Phone, setUserPhone] = useState({ value: "" });

  const changeInfo = (email, name, address, phone) =>
    fetch("http://192.168.26.1/csdl/change_info.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, name, address, phone }),
    }).then((res) => res.text());
  const onSuccess = () => {
    Alert.alert("Notice", "Change success", [{ text: "OK" }], {
      cancelable: false,
    });
    navigation.navigate("HOME_VIEW");
  };

  const onFail = () => {
    Alert.alert("Notice", "Change failed", [{ text: "OK" }], {
      cancelable: false,
    });
  };
  const checkInfo = () => {
    if (Name === "") {
      Alert.alert("Please enter Name");
    } else if (Address === "") {
      Alert.alert("Please enter PassWord");
    } else if (Phone === "") {
      Alert.alert("Please enter ReEnterPassWord");
    } else {
      changeInfo(global.email, Name, Address, Phone).then((res) => {
        if (res !== "No") return onSuccess();
        onFail();
      });
    }
  };
  const {
    wrapper,
    header,
    headerTitle,
    backIconStyle,
    body,
    signInContainer,
    signInTextStyle,
    textInput,
  } = styles;
  return (
    <View style={wrapper}>
      <View style={header}>
        <View />
        <Text style={headerTitle}>User Information</Text>
        <TouchableOpacity onPress={() => navigation.navigate("HOME_VIEW")}>
          <Image source={icBack} style={backIconStyle} />
        </TouchableOpacity>
      </View>
      <View style={body}>
        <TextInput
          style={textInput}
          placeholder="Enter your name"
          autoCapitalize="none"
          defaultValue={global.name}
          onChangeText={(Name) => setName(Name)}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={textInput}
          placeholder="Enter your address"
          autoCapitalize="none"
          defaultValue={global.address}
          onChangeText={(Address) => setAddress(Address)}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={textInput}
          placeholder="Enter your phone number"
          autoCapitalize="none"
          defaultValue={global.phone}
          onChangeText={(Phone) => setUserPhone(Phone)}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={signInContainer} onPress={checkInfo}>
          <Text style={signInTextStyle}>CHANGE YOUR INFORMATION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  header: {
    flex: 1,
    backgroundColor: "#2ABB9C",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  headerTitle: { color: "#fff", fontSize: 20 },
  backIconStyle: { width: 30, height: 30 },
  body: { flex: 10, backgroundColor: "#F6F6F6", justifyContent: "center" },
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: "#2ABB9C",
    borderWidth: 1,
  },
  signInTextStyle: {
    color: "#FFF",
    fontWeight: "600",
    paddingHorizontal: 20,
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: "#2ABB9C",
    borderRadius: 20,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  signInStyle: {
    flex: 3,
    marginTop: 50,
  },
});
