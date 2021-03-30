<<<<<<< Updated upstream
import React, { Component } from 'react';
import { useNavigation } from "@react-navigation/native";

import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';

export function Search() {
  const navigator = useNavigation();
  return (
    <Navigator
      initialRoute={{ name: 'SEARCH_VIEW' }}
      renderScene={(route, navigator) => {
        switch (route.name) {
          case 'SEARCH_VIEW': return <SearchView navigator={navigator} />;
          default: return <ProductDetail navigator={navigator} product={route.product} />;
        }
      }}
    />
  );
}


export default Search;
=======
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
  SafeAreaView,
  LogBox,
} from "react-native";
import "../../../global.js";

const { width } = Dimensions.get("window");
const urli = "http://192.168.0.14/csdl/images/product/";

export function Search() {
  const url = `http://192.168.0.14/csdl/search.php?searchText=${global.searchText}`;
  const [data, setData] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const refresh = (searchResult) => {
    setData(searchResult)
  }
  global.refreshSearchData = (searchResult) => refresh(searchResult);

  const {
    container,
    titleContainer,
    title,
    productContainer,
    productImage,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={titleContainer}>
        <Text style={title}>SEARCH RESULT</Text>
      </View>
      <FlatList
        contentContainerStyle={{ margin: 4 }}
        numColumns={2}
        data={data.product}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ productContainer }}
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
              <Image
                source={{ uri: `${urli}${item.id}.jpg` }}
                style={productImage}
              />
              <Text>{item.name}</Text>
              <Text>Price: {item.price} USD</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
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
>>>>>>> Stashed changes
