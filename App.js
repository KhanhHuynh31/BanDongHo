import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { Authentication } from "./Components/Authentication/Authentication";
import { ChangeInfo } from "./Components/ChangeInfo/ChangeInfo";
import { Main } from "./Components/Main/Main";
import { OrderHistory } from "./Components/OrderHistory/OrderHistory";

StatusBar.setHidden(true);
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen
          name="Authentication"
          component={Authentication}
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
