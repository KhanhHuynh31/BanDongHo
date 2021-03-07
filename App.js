import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Authentication } from "./Components/Authentication/Authentication";
import { ChangeInfo } from "./Components/ChangeInfo/ChangeInfo";
import { Main } from "./Components/Main/Main";
import { OrderHistory } from "./Components/OrderHistory/OrderHistory";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AUTHENTICATION">
        <Stack.Screen
          name="MAIN"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="CHANGE_INFO" component={ChangeInfo} />
        <Stack.Screen name="AUTHENTICATION" component={Authentication} />
        <Stack.Screen name="ORDER_HISTORY" component={OrderHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}