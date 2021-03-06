import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import back from "../../../../media/backList.png";

export function ListProduct({ route, navigation }) {
  const { itemId } = route.params;
  const { itemName } = route.params;
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
  const url = `http://192.168.26.1/csdl/product_type.php?id_type=${itemId}`;
  const urli = "http://192.168.26.1/csdl/images/product/";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <SafeAreaView style={container}>
      <View style={wrapper}>
        <View style={header}>
          <TouchableOpacity onPress={() => navigation.navigate("HOME_VIEW")}>
            <Image source={back} style={backStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}>
            {JSON.stringify(itemName)}
          </Text>
        </View>
        <FlatList
          contentContainerStyle={{ margin: 4 }}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={productContainer}>
              <Image
                source={{ uri: `${urli}${item.id}.jpg` }}
                style={productImage}
              />
              <View style={productInfo}>
                <Text style={txtName}>{item.name}</Text>
                <Text style={txtPrice}>{item.price} USD</Text>
                <Text style={txtMaterial}>{item.material}</Text>
                <View style={lastRowInfo}>
                  <Text style={txtColor}>{item.color}</Text>
                  <View
                    style={{
                      backgroundColor: "cyan",
                      height: 16,
                      width: 16,
                      borderRadius: 8,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("PRODUCT_DETAIL", {
                        itemId: item.id,
                        itemName: item.name,
                        itemPrice: item.price,
                        itemColor: item.color,
                        itemMaterial: item.material,
                        itemDescription: item.description,
                      })
                    }
                  >
                    <Text style={txtShowDetail}>SHOW DETAIL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
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
  txtMaterial: {},
  txtColor: {},
  txtShowDetail: {
    color: "#B10D65",
    fontSize: 11,
  },
});
