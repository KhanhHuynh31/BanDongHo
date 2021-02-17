import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import bannerWatch from "../../../../media/bannerWatch.jpg";

const { width } = Dimensions.get("window");
export function Collection() {
  const navigation = useNavigation();
  const { wrapper, textStyle, imageStyle } = styles;
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={wrapper}>
      <View style={{ height: 50, justifyContent: "center" }}>
        <Text style={textStyle}>{data.title}</Text>
      </View>
      <TouchableOpacity
        style={{ flex: 4, justifyContent: "flex-end" }}
        onPress={() => navigation.navigate("LIST_PRODUCT")}
      >
        <Image
          source={bannerWatch}
          style={imageStyle}
        />
      </TouchableOpacity>
    </View>
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
