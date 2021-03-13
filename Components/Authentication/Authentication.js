import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "./SingIn";
import { SignUp } from "./SignUp";

const Stack = createStackNavigator();
export function Authentication() {
  return (
    <Stack.Navigator initialRouteName="SIGN_IN">
      <Stack.Screen
        name="SIGN_IN"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SIGN_UP"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
