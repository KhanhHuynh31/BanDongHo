import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import bannerWatch from "../../../../media/bannerWatch.jpg";

const { width } = Dimensions.get("window");
export function Collection() {
  const navigation = useNavigation();
  const { wrapper, textStyle, imageStyle } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={{ height: 50, justifyContent: "center" }}>
        <Text style={textStyle}>COLLECTION</Text>
      </View>
      <TouchableOpacity
        style={{ flex: 4, justifyContent: "flex-end" }}
        onPress={() => {
          navigation.navigate("LIST_PRODUCT", {
            itemId: 4,
          });
        }}
      >
        <Image source={bannerWatch} style={imageStyle} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
const styles = StyleSheet.create({
  wrapper: {
    width: width - 20,
    backgroundColor: "#FFF",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 20,
    color: "#AFAEAF",
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
  },
});
