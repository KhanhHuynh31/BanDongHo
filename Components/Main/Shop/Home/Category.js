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
import Swiper from "react-native-swiper/src";

const { width } = Dimensions.get("window");
const url = "http://192.168.1.15/api/images/product/";

export function Category() {
  const navigation = useNavigation();
  const { wrapper, textStyle } = styles;
  return (
    <View style={wrapper}>
      <View style={{ justifyContent: "center", height: 50 }}>
        <Text style={textStyle}>LIST OF CATEGORY</Text>
      </View>
      <View style={{ justifyContent: "flex-end", flex: 4 }}>
        <Swiper showsPagination width={imageWidth} height={imageHeight}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LIST_PRODUCT", {
                itemId: 1,
              });
            }}
          >
            <Image
              style={styles.imageStyle}
              source={{
                uri: `${url}54.jpg`,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LIST_PRODUCT", {
                itemId: 2,
              });
            }}
          >
            <Image
              style={styles.imageStyle}
              source={{
                uri: `${url}55.jpg`,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LIST_PRODUCT", {
                itemId: 3,
              });
            }}
          >
            <Image
              style={styles.imageStyle}
              source={{
                uri: `${url}56.jpg`,
              }}
            />
          </TouchableOpacity>
        </Swiper>
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
  cateTitle: {
    fontSize: 20,
    color: "#9A9A9A",
  },
});
