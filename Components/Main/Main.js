import React from "react";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Image, SafeAreaView, Text } from "react-native";
import { ChangeInfo } from "../ChangeInfo/ChangeInfo";
import { Shop } from "./Shop/Shop";
import { Authentication } from "../Authentication/Authentication";

import user from "../../media/user.png";
import { OrderHistory } from "../OrderHistory/OrderHistory";

const Drawer = createDrawerNavigator();
export function Main() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              height: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={user}
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                marginVertical: 20,
              }}
            />
            <Text style={{}}>Nguyen Van A</Text>
          </View>
          <DrawerItemList {...props} />
        </SafeAreaView>
      )}
    >
      <Drawer.Screen name="Home" component={Shop} />
      <Drawer.Screen name="Order History" component={OrderHistory} />
      <Drawer.Screen name="Change Info" component={ChangeInfo} />
      <Drawer.Screen name="Sign out" component={Authentication} />
    </Drawer.Navigator>
  );
}
