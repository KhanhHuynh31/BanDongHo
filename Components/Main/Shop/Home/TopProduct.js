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
import product1 from "../../../../media/cate1.jpg";

const { width } = Dimensions.get("window");
<<<<<<< Updated upstream
=======
const url = "http://172.16.2.56/csdl/index.php";
const urli = "http://172.16.2.56/csdl/images/product/";
>>>>>>> Stashed changes
export function TopProduct() {
  const navigation = useNavigation();
  const {
    container,
    titleContainer,
    title,
    body,
    productContainer,
    productImage,
  } = styles;
  return (
    <View style={container}>
      <View style={titleContainer}>
        <Text style={title}>TOP PRODUCT</Text>
      </View>
      <View style={body}>
        <View style={productContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PRODUCT_DETAIL")}
          >
            <Image source={product1} style={productImage} />
            <Text>PRODUCT NAME 1</Text>
            <Text>PRODUCT PRICE 1</Text>
          </TouchableOpacity>
        </View>
        <View style={productContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PRODUCT_DETAIL")}
          >
            <Image source={product1} style={productImage} />
            <Text>PRODUCT NAME 2</Text>
            <Text>PRODUCT PRICE 2</Text>
          </TouchableOpacity>
        </View>
        <View style={productContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PRODUCT_DETAIL")}
          >
            <Image source={product1} style={productImage} />
            <Text>PRODUCT NAME 3</Text>
            <Text>PRODUCT PRICE 3</Text>
          </TouchableOpacity>
        </View>
        <View style={productContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PRODUCT_DETAIL")}
          >
            <Image source={product1} style={productImage} />
            <Text>PRODUCT NAME 4</Text>
            <Text>PRODUCT PRICE 4</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const productWidth = (width - 60) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  titleContainer: {
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
  },
  title: {
    color: "#D3D3CF",
    fontSize: 20,
  },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    paddingBottom: 10,
  },
  productContainer: {
    width: productWidth,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  productImage: {
    width: productWidth,
    height: productImageHeight,
  },
  produceName: {
    marginVertical: 5,
    paddingLeft: 10,
    color: "#D3D3CF",
    fontWeight: "500",
  },
  producePrice: {
    marginBottom: 5,
    paddingLeft: 10,
    color: "#662F90",
  },
});
