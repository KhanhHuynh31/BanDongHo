import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { Category } from "./Category";
import { TopProduct } from "./TopProduct";

export function HomeView() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DBDBD8" }}>
      <ScrollView>
        <Category />
        <TopProduct />
      </ScrollView>
    </SafeAreaView>
  );
}
