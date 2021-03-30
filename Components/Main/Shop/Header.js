import React from "react";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput } from "react-native-gesture-handler";
import "../../../global"
import search from "../../../api/searchProduct";

const { height } = Dimensions.get("window");
export function Header() {
  const navigation = useNavigation();
  const onSubmitSearch = () => {
    search(searchText)
      .then(arrProduct => global.refreshSearchData(arrProduct))
      .catch(err => console.log(err));

  };
  const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
  return (
    <View style={wrapper}>
      <View style={row1}>
        <Icon
          style={[{ color: "white", marginLeft: 8 }]}
          size={24}
          name={"menu"}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
        <Text style={titleStyle}>Buy a Watch</Text>
        <Image source={require("../../../media/watch.png")} style={iconStyle} />
      </View>
      <TextInput
        style={textInput}
        placeholder="What do you want to buy?"
        underlineColorAndroid="transparent"
        onChangeText={text => global.searchText = text}
        onSubmitEditing={onSubmitSearch}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    height: height / 8,
    backgroundColor: "#34B089",
    padding: 10,
    justifyContent: "space-around",
  },
  row1: { flexDirection: "row", justifyContent: "space-between" },
  textInput: {
    height: height / 23,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    paddingVertical: 0,
  },
  titleStyle: { color: "#FFF", fontSize: 20 },
  iconStyle: { width: 34, height: 34 },
});
