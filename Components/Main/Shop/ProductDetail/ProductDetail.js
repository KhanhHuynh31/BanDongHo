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
} from "react-native";
import back from "../../../../media/backList.png";
import cart from "../../../../media/cart.png";
import cate1 from "../../../../media/cate1.jpg";
import cate1n1 from "../../../../media/cate1n1.jpg";

export function ProductDetail() {
  const navigation = useNavigation();
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
    textHighlight,
    textMain,
    titleContainer,
    descContainer,
    productImageStyle,
    descStyle,
    txtMaterial,
    txtColor,
  } = styles;
  return (
    <View style={wrapper}>
      <ScrollView style={wrapper}>
        <View style={cardStyle}>
          <View style={header}>
            <TouchableOpacity onPress={() => navigation.navigate("HOME_VIEW")}>
              <Image style={backStyle} source={back} />
            </TouchableOpacity>
            <TouchableOpacity>
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
              <Image source={cate1} style={productImageStyle} />
              <Image source={cate1n1} style={productImageStyle} />
            </ScrollView>
          </View>
          <View style={footer}>
            <View style={titleContainer}>
              <Text style={textMain}>
                <Text style={textBlack}>Apple Watch S6 LTE</Text>
                <Text style={textHighlight}> / </Text>
                <Text style={textSmoke}>5.000.000 VNĐ</Text>
              </Text>
            </View>
            <View style={descContainer}>
              <Text style={descStyle}>
                Apple Watch S6 LTE 40mm viền nhôm dây cao su sở hữu màn hình
                1.57 inch. Dây đeo được làm từ chất liệu cao su dẻo dai. Mặt
                kính cường lực Ion-X strengthened glass. Các đường nét được
                thiết kế tinh xảo làm nên sự đẳng cấp của Apple Watch.
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 15,
                }}
              >
                <Text style={txtMaterial}>Material </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={txtColor}>Color</Text>
                  <View
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 15,
                      marginLeft: 10,
                      borderWidth: 1,
                      borderColor: "#C21C70",
                    }}
                  />
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
const swiperWidth = (width / 1.8) - 30;
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
  textHighlight: {
    fontSize: 20,
    color: "#7D59C8",
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

export default ProductDetail;
