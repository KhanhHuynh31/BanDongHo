import React from "react";
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

export function OrderHistory() {
  const navigation = useNavigation();
  const {
    wrapper,
    header,
    headerTitle,
    backIconStyle,
    body,
    orderRow,
  } = styles;
  const DATA = [
    {
      id: "1",
      time: "25:25",
      status: "success",
      total: "700",
    },
    {
      id: "2",
      time: "62:25",
      status: "pending",
      total: "200",
    },
  ];
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
            data={DATA}
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
                  <Text style={{ color: "#C21C70" }}>{item.time}</Text>
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
                    {item.total}
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
