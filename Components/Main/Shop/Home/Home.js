import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeView } from "./HomeView";
import { ListProduct } from "../ListProduct/ListProduct";
import { ProductDetail } from "../ProductDetail/ProductDetail";

const Stack = createStackNavigator();
export function Home() {
  return (
    <Stack.Navigator initialRouteName="HOME_VIEW">
      <Stack.Screen
        name="HOME_VIEW"
        component={HomeView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LIST_PRODUCT"
        component={ListProduct}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PRODUCT_DETAIL"
        component={ProductDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
