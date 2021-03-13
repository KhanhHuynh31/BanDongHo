import React from "react";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Image, SafeAreaView, Text } from "react-native";
import { Menu } from "./Menu";
import { Shop } from "./Shop/Shop";
import { Authentication } from "../Authentication/Authentication";

import user from "../../media/user.png";

const Drawer = createDrawerNavigator();
export function Main() {
  return (
    <Drawer.Navigator
      initialRouteName="Order History"
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
      <Drawer.Screen name="Order History" component={Shop} />
      <Drawer.Screen name="Change Info" component={Menu} />
      <Drawer.Screen name="Sign out" component={Authentication} />
    </Drawer.Navigator>
  );
}
