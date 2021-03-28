import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "./Home/Home";
import { Cart } from "./Cart/Cart";
import { Contact } from "./Contact/Contact";
import { Search } from "./Search/Search";
import { Header } from "./Header";
import "../../../global";

const Tab = createBottomTabNavigator();
export function Shop() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "cart-outline" : "cart-outline";
            } else if (route.name === "Contact") {
              iconName = focused ? "call-outline" : "call-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search-outline" : "search-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{ tabBarBadge: global.numCart }}
          initialParams={{ cartId: "0" }}
        />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </View>
  );
}
