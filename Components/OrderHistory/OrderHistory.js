import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import back from "../../media/backList.png";
import "../../global";

export function OrderHistory() {
  const navigation = useNavigation();
  const url = `http://192.168.26.1/csdl/order_history.php?id_customer=${global.id}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  });
  const {
    wrapper,
    header,
    headerTitle,
    backIconStyle,
    body,
    orderRow,
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={header}>
        <View />
        <Text style={headerTitle}>Order History</Text>
        <TouchableOpacity onPress={() => navigation.navigate("HOME_VIEW")}>
          <Image source={back} style={backIconStyle} />
        </TouchableOpacity>
      </View>
      <View style={body}>
        <ScrollView>
          <FlatList
            contentContainerStyle={{ margin: 4 }}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={orderRow}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                    Order id:
                  </Text>
                  <Text style={{ color: "#2ABB9C" }}>{item.id}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                    OrderTime:
                  </Text>
                  <Text style={{ color: "#C21C70" }}>{item.date_order}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                    Status:
                  </Text>
                  <Text style={{ color: "#2ABB9C" }}>{item.status}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                    Total:
                  </Text>
                  <Text style={{ color: "#C21C70", fontWeight: "bold" }}>
                    {item.total} $
                  </Text>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  header: {
    flex: 1,
    backgroundColor: "#2ABB9C",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  headerTitle: { color: "#fff", fontSize: 20 },
  backIconStyle: { width: 30, height: 30 },
  body: { flex: 10, backgroundColor: "#F6F6F6" },
  orderRow: {
    height: width / 3,
    backgroundColor: "#FFF",
    margin: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#DFDFDF",
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: "space-around",
  },
});
