import React from "react";
import { View, Text, Button, Image } from "react-native";
import user from "../../media/user.png";

export function Menu({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={user}
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          marginVertical: 30,
        }}
      />
      <Text>Menu Screen</Text>
      <Button
        title="Open AUTHENTICATION"
        onPress={() => navigation.navigate("AUTHENTICATION")}
      />
    </View>
  );
}
