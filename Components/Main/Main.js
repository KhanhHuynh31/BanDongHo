import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Menu } from "./Menu";
import { Shop } from "./Shop/Shop";

const Drawer = createDrawerNavigator();
export function Main() {
  return (
    <Drawer.Navigator initialRouteName="SHOP">
      <Drawer.Screen name="MENU" component={Menu} />
      <Drawer.Screen name="SHOP" component={Shop} />
    </Drawer.Navigator>
  );
}
