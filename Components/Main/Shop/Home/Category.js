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
} from "react-native";


const { width } = Dimensions.get("window");
const url = "http://192.168.43.15/csdl/index.php";
const urli = "http://192.168.43.15/csdl/images/type/";
export function Category() {
  const navigation = useNavigation();
  const { wrapper, textStyle } = styles;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView style={wrapper}>
      <View style={{ justifyContent: "center", height: 50 }}>
        <Text style={textStyle}>LIST OF CATEGORY</Text>
      </View>
        <FlatList
          contentContainerStyle={{ margin: 4 }}
          data={data.type}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LIST_PRODUCT", {
                  itemId: item.id,
                });
              }}
            >
              <Image
                style={styles.imageStyle}
                source={{ uri: `${urli}${item.id}.jpg` }}
              />
              <Text>1</Text>
            </TouchableOpacity>
          )}
        />
    </SafeAreaView>
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
  cateTitle: {
    fontSize: 20,
    color: "#9A9A9A",
  },
});
