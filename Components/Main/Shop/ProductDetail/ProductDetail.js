import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import back from "../../../../media/backList.png";
import cart from "../../../../media/cart.png";
import "../../../../global";

export function ProductDetail({ route }) {
  const navigation = useNavigation();
  const { itemId } = route.params;
  const { itemName } = route.params;
  const { itemPrice } = route.params;
  const { itemColor } = route.params;
  const { itemMaterial } = route.params;
  const { itemDescription } = route.params;
  const {
    wrapper,
    cardStyle,
    header,
    footer,
    backStyle,
    imageContainer,
    cartStyle,
    textBlack,
    textSmoke,
    textMain,
    titleContainer,
    descContainer,
    productImageStyle,
    descStyle,
    txtMaterial,
    txtColor,
  } = styles;

  const sendCart = (IdKhachHang, IdSanPham, TenSanPham, DonGia, MauSac, ChatLieu, MoTa) =>
    fetch("http://192.168.26.1/csdl/insert_cart.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ IdKhachHang, IdSanPham, TenSanPham, DonGia, MauSac, ChatLieu, MoTa }),
    }).then((res) => res.text());

  const urli = "http://192.168.26.1/csdl/images/product/";
  const onSuccess = () => {
    Alert.alert(
      "Notice",
      "Add cart successfully",
      [{ text: "OK" }],
      { cancelable: false }
    );
    global.numcart = "1";
    navigation.navigate("Cart");
  };

  const onFail = () => {
    Alert.alert("Notice", "Add cart error", [{ text: "OK" }], {
      cancelable: false,
    });
  };
  const checkLogin = () => {
    if (global.isSignIn === 0) {
      Alert.alert("Notice", "You must SignIn to buy", [{ text: "OK" }], {
        cancelable: false,
      });
      navigation.navigate("AUTHENTICATION");
    } else {
      sendCart(global.id, itemId, itemName, itemPrice, itemColor, itemMaterial, itemDescription)
        .then((res) => {
          console.log(res);
          if (res === "THANH_CONG") return onSuccess();
          onFail();
        });
    }
  };

  return (
    <View style={wrapper}>
      <ScrollView style={wrapper}>
        <View style={cardStyle}>
          <View style={header}>
            <TouchableOpacity onPress={() => navigation.navigate("HOME_VIEW")}>
              <Image style={backStyle} source={back} />
            </TouchableOpacity>
            <TouchableOpacity onPress={checkLogin}>
              <Image style={cartStyle} source={cart} />
            </TouchableOpacity>
          </View>
          <View style={imageContainer}>
            <ScrollView
              style={{
                flexDirection: "row",
                padding: 10,
                height: swiperHeight,
              }}
              horizontal
            >
              <Image
                source={{ uri: `${urli}${itemId}.jpg` }}
                style={productImageStyle}
              />
              <Image
                source={{ uri: `${urli}${itemId}_1.jpg` }}
                style={productImageStyle}
              />
            </ScrollView>
          </View>
          <View style={footer}>
            <View style={titleContainer}>
              <Text style={textMain}>
                <Text style={textBlack}>{JSON.stringify(itemName)}</Text>
                <Text style={textSmoke}>
                  {"\n"} Price: {JSON.stringify(itemPrice)} USD
                </Text>
              </Text>
            </View>
            <View style={descContainer}>
              <Text style={descStyle}>{JSON.stringify(itemDescription)}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 15,
                }}
              >
                <Text style={txtMaterial}>
                  Material: {JSON.stringify(itemMaterial)}{" "}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={txtColor}>
                    Color: {JSON.stringify(itemColor)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const { width } = Dimensions.get("window");
// eslint-disable-next-line no-mixed-operators
const swiperWidth = width / 1.8 - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#D6D6D6",
  },
  cardStyle: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  cartStyle: {
    width: 25,
    height: 25,
  },
  backStyle: {
    width: 25,
    height: 25,
  },
  productStyle: {
    width: width / 2,
    height: width / 2,
  },
  footer: {
    flex: 6,
  },
  imageContainer: {
    flex: 6,
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  textMain: {
    paddingLeft: 20,
    marginVertical: 10,
  },
  textBlack: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3F3F46",
  },
  textSmoke: {
    fontSize: 20,
    color: "#9A9A9A",
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: "#F6F6F6",
    marginHorizontal: 20,
    paddingBottom: 5,
  },
  descContainer: {
    margin: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  descStyle: {
    color: "#AFAFAF",
  },
  linkStyle: {
    color: "#7D59C8",
  },
  productImageStyle: {
    width: swiperWidth,
    height: swiperHeight,
    marginHorizontal: 5,
  },
  mainRight: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingLeft: 20,
  },
  txtColor: {
    color: "#C21C70",
    fontSize: 15,
    fontWeight: "400",
  },
  txtMaterial: {
    color: "#C21C70",
    fontSize: 15,
    fontWeight: "400",
  },
});
