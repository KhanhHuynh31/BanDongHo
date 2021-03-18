import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import cate1 from "../../../../media/cate1.jpg";
import cate2 from "../../../../media/cate2.jpg";
import cate3 from "../../../../media/cate3.jpg";

const { width } = Dimensions.get("window");
<<<<<<< Updated upstream
=======
const url = "http://192.168.56.1/csdl/index.php";
const urli = "http://192.168.56.1/csdl/images/type/";
>>>>>>> Stashed changes
export function Category() {
  const navigation = useNavigation();
  const { wrapper, textStyle, imageStyle } = styles;
  return (
    <View style={wrapper}>
      <View style={{ justifyContent: "center", height: 50 }}>
        <Text style={textStyle}>LIST OF CATEGORY</Text>
      </View>
      <View style={{ justifyContent: "flex-end", flex: 4 }}>
          <TouchableOpacity onPress={() => navigation.navigate("LIST_PRODUCT")}>
            <Image source={cate1} style={imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("LIST_PRODUCT")}>
            <Image source={cate2} style={imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("LIST_PRODUCT")}>
            <Image source={cate3} style={imageStyle} />
          </TouchableOpacity>
      </View>
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
    justifyContent: "space-between",
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
