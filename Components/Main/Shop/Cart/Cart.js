import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import back from "../../../../media/backList.png";
import cate1 from "../../../../media/cate1.jpg";

const DATA = [
  {
    id: "1",
    name: "dong ho deo tay nam Apple",
    price: "100 USD",
    quantity: "1",
    color: "black",
  },
  {
    id: "2",
    name: "dong ho deo tay nam Apple 2",
    price: "150 USD",
    quantity: "1",
    color: "black",
  },
  {
    id: "31",
    name: "dong ho deo tay nam Apple 3",
    price: "170 USD",
    quantity: "2",
    color: "red",
  },
];
export function Cart() {
  const navigation = useNavigation();
  const {
    checkoutButton,
    checkoutTitle,
    container,
    wrapper,
    productStyle,
    mainRight,
    productController,
    txtName,
    txtPrice,
    productImage,
    numberOfProduct,
    showDetailContainer,
    backStyle,
    titleStyle,
    txtShowDetail,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={wrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("HOME_VIEW")}>
          <View style={{ flexDirection: "row" }}>
            <Image source={back} style={backStyle} />
            <Text style={titleStyle}>Go back</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          contentContainerStyle={{ margin: 4 }}
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={productStyle}>
              <Image source={cate1} style={productImage} />
              <View style={[mainRight]}>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text style={txtName}>{item.name}</Text>
                  <TouchableOpacity>
                    <Text style={{ color: "#969696" }}>X</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={txtPrice}>Gia: {item.price}</Text>
                </View>
                <View style={productController}>
                  <View style={numberOfProduct}>
                    <TouchableOpacity>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{item.quantity}</Text>
                    <TouchableOpacity>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={showDetailContainer}>
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <TouchableOpacity style={checkoutButton}>
          <Text style={checkoutTitle}>TOTAL 0.0$ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const { width } = Dimensions.get("window");
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBD8",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#DFDFDF",
  },
  backStyle: {
    width: 30,
    height: 30,
  },
  titleStyle: {
    color: "#B10D65",
    fontSize: 20,
    textAlign: "left",
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: "#2ABB9C",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutTitle: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  productStyle: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: "center",
  },
  mainRight: {
    flex: 3,
    justifyContent: "space-between",
  },
  productController: {
    flexDirection: "row",
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  txtName: {
    paddingLeft: 20,
    color: "#A7A7A7",
    fontSize: 20,
    fontWeight: "400",
  },
  txtPrice: {
    paddingLeft: 20,
    color: "#C21C70",
    fontSize: 20,
    fontWeight: "400",
  },
  txtShowDetail: {
    color: "#C21C70",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
