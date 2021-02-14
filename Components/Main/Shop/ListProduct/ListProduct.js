import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import cate1 from "../../../../media/cate1.jpg";

export function ListProduct() {
  const navigation = useNavigation();
  const {
    container,
    header,
    wrapper,
    backStyle,
    titleStyle,
    productContainer,
    productInfo,
    productImage,
    lastRowInfo,
    txtName,
    txtPrice,
    txtMaterial,
    txtColor,
    txtShowDetail,
  } = styles;
  return (
    <View style={container}>
      <ScrollView style={wrapper}>
        <View style={header}>
          <TouchableOpacity onPress={() => navigation.navigate("HOME_VIEW")}>
            <Image
              source={cate1}
              style={backStyle}
            />
          </TouchableOpacity>
          <Text style={titleStyle}>Party Dress</Text>
          <View style={{ width: 30 }} />
        </View>

        <View style={productContainer}>
          <Image
            source={cate1}
            style={productImage}
          />
          <View style={productInfo}>
            <Text style={txtName}>Lace Sleeve Si</Text>
            <Text style={txtPrice}>117$</Text>
            <Text style={txtMaterial}>Material silk</Text>
            <View style={lastRowInfo}>
              <Text style={txtColor}>Color Red</Text>
              <View
                style={{
                  backgroundColor: "cyan",
                  height: 16,
                  width: 16,
                  borderRadius: 8,
                }}
              />
              <TouchableOpacity>
                <Text style={txtShowDetail}>SHOW DETAIL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={productContainer}>
          <Image
            source={cate1}
            style={productImage}
          />
          <View style={productInfo}>
            <Text style={txtName}>Lace Sleeve Si</Text>
            <Text style={txtPrice}>117$</Text>
            <Text style={txtMaterial}>Material silk</Text>
            <View style={lastRowInfo}>
              <Text style={txtColor}>Color Red</Text>
              <View
                style={{
                  backgroundColor: "cyan",
                  height: 16,
                  width: 16,
                  borderRadius: 8,
                }}
              />
              <TouchableOpacity>
                <Text style={txtShowDetail}>SHOW DETAIL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={productContainer}>
          <Image
            source={cate1}
            style={productImage}
          />
          <View style={productInfo}>
            <Text style={txtName}>Lace Sleeve Si</Text>
            <Text style={txtPrice}>117$</Text>
            <Text style={txtMaterial}>Material silk</Text>
            <View style={lastRowInfo}>
              <Text style={txtColor}>Color Red</Text>
              <View
                style={{
                  backgroundColor: "cyan",
                  height: 16,
                  width: 16,
                  borderRadius: 8,
                }}
              />
              <TouchableOpacity>
                <Text style={txtShowDetail}>SHOW DETAIL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={productContainer}>
          <Image
            source={cate1}
            style={productImage}
          />
          <View style={productInfo}>
            <Text style={txtName}>Lace Sleeve Si</Text>
            <Text style={txtPrice}>117$</Text>
            <Text style={txtMaterial}>Material silk</Text>
            <View style={lastRowInfo}>
              <Text style={txtColor}>Color Red</Text>
              <View
                style={{
                  backgroundColor: "cyan",
                  height: 16,
                  width: 16,
                  borderRadius: 8,
                }}
              />
              <TouchableOpacity>
                <Text style={txtShowDetail}>SHOW DETAIL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={productContainer}>
          <Image
            source={cate1}
            style={productImage}
          />
          <View style={productInfo}>
            <Text style={txtName}>Lace Sleeve Si</Text>
            <Text style={txtPrice}>117$</Text>
            <Text style={txtMaterial}>Material silk</Text>
            <View style={lastRowInfo}>
              <Text style={txtColor}>Color Red</Text>
              <View
                style={{
                  backgroundColor: "cyan",
                  height: 16,
                  width: 16,
                  borderRadius: 8,
                }}
              />
              <TouchableOpacity>
                <Text style={txtShowDetail}>SHOW DETAIL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={productContainer}>
          <Image
            source={cate1}
            style={productImage}
          />
          <View style={productInfo}>
            <Text style={txtName}>Lace Sleeve Si</Text>
            <Text style={txtPrice}>117$</Text>
            <Text style={txtMaterial}>Material silk</Text>
            <View style={lastRowInfo}>
              <Text style={txtColor}>Color Red</Text>
              <View
                style={{
                  backgroundColor: "cyan",
                  height: 16,
                  width: 16,
                  borderRadius: 8,
                }}
              />
              <TouchableOpacity>
                <Text style={txtShowDetail}>SHOW DETAIL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBD8",
  },
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  wrapper: {
    backgroundColor: "#fff",
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    margin: 10,
    paddingHorizontal: 10,
  },
  backStyle: {
    width: 30,
    height: 30,
  },
  productContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    borderTopColor: "#F0F0F0",
    borderBottomColor: "#FFF",
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    borderWidth: 1,
  },
  titleStyle: {
    color: "#B10D65",
    fontSize: 20,
  },
  productImage: {
    width: 90,
    height: (90 * 452) / 361,
  },
  productInfo: {
    justifyContent: "space-between",
    marginLeft: 15,
    flex: 1,
  },
  lastRowInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtName: {
    color: "#BCBCBC",
    fontSize: 20,
    fontWeight: "400",
  },
  txtPrice: {

    color: "#B10D65",
  },
  txtMaterial: {

  },
  txtColor: {

  },
  txtShowDetail: {

    color: "#B10D65",
    fontSize: 11,
  },
});
