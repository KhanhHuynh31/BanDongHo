<<<<<<< Updated upstream
import React from "react";
=======
import React, { useEffect, useState } from "react";

>>>>>>> Stashed changes
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper/src";
import cate1 from "../../../../media/cate1.jpg";
import cate2 from "../../../../media/cate2.jpg";
import cate3 from "../../../../media/cate3.jpg";

const { width } = Dimensions.get("window");
<<<<<<< Updated upstream
=======
const url = "http://192.168.0.14/csdl/index.php";
const urli = "http://192.168.0.14/csdl/images/type/";
>>>>>>> Stashed changes
export function Category() {
  const navigation = useNavigation();
  const { wrapper, textStyle, imageStyle } = styles;
  return (
    <View style={wrapper}>
      <View style={{ justifyContent: "center", height: 50 }}>
        <Text style={textStyle}>LIST OF CATEGORY</Text>
      </View>
<<<<<<< Updated upstream
      <View style={{ justifyContent: "flex-end", flex: 4 }}>
        <Swiper showsPagination width={imageWidth} height={imageHeight}>
          <TouchableOpacity onPress={() => navigation.navigate("LIST_PRODUCT")}>
            <Image source={cate1} style={imageStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("LIST_PRODUCT")}>
            <Image source={cate2} style={imageStyle} />
=======
      <FlatList
        horizontal={true}
        autoplay
        autoplayDelay={10}
        autoplayLoop
        showPagination
        data={data.type}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LIST_PRODUCT", {
                itemId: item.id,
                itemName: item.name,
              });
            }}
          >
            <Image
              style={styles.imageStyle}
              source={{ uri: `${urli}${item.id}.jpg` }}
            />
            <Text>{item.name}</Text>
>>>>>>> Stashed changes
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("LIST_PRODUCT")}>
            <Image source={cate3} style={imageStyle} />
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
});
