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
  Alert,
} from "react-native";
import back from "../../../../media/backList.png";
import "../../../../global";

export function Cart({ route }) {
  const { cartId } = route.params;
  const { cartName } = route.params;
  const { cartPrice } = route.params;
  const navigation = useNavigation();
  const DATA = [
    {
      id: cartId,
      name: cartName,
      price: cartPrice,
      quantity: 1,
    },
  ];
  global.total = cartPrice;
  const urli = "http://192.168.26.1/csdl/images/product/";
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
              <Image
                source={{ uri: `${urli}${item.id}.jpg` }}
                style={productImage}
              />
              <View style={[mainRight]}>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text style={txtName}>{item.name}</Text>
                </View>
                <View>
                  <Text style={txtPrice}>Price: {global.total} USD</Text>
                </View>
                <View style={productController}>
                  <TouchableOpacity
                    style={showDetailContainer}
                    onPress={() => navigation.navigate("PRODUCT_DETAIL")}
                  >
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <TouchableOpacity style={checkoutButton} onPress={() => checkOut()}>
          <Text style={checkoutTitle}>TOTAL {global.total} $ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const sendOrder = (idCustomer, total) => {
  fetch("http://192.168.26.1/csdl/sendorder.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ idCustomer, total }),
  }).then((res) => res.text());
};

const checkOut = () => {
  if (sendOrder(global.id, global.total) !== "No") {
    Alert.alert("Notice", "Buy successfully", [{ text: "OK" }], {
      cancelable: false,
    });
  } else {
    Alert.alert("Notice", "Buy failed", [{ text: "OK" }], {
      cancelable: false,
    });
  }
};
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
