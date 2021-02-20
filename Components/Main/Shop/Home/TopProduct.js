import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const { width } = Dimensions.get("window");
const url = "http://192.168.1.15/api/index.php";
const urli = "http://192.168.1.15/api/images/product/";
export function TopProduct() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

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
        <FlatList
          contentContainerStyle={body}
          data={data.product}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={{ productContainer }}
              onPress={() => navigation.navigate("PRODUCT_DETAIL")}
            >
              <Image source={{ uri: `${urli}${item.id}.jpg` }} style={productImage} />
              <Text>{item.name}</Text>
              <Text>Giá: {item.price} 000 VNĐ</Text>
            </TouchableOpacity>
          )}
        />

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
