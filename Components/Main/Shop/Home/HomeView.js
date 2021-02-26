import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { Collection } from "./Collection";
import { Category } from "./Category";
import { TopProduct } from "./TopProduct";

export function HomeView() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DBDBD8" }}>
      <ScrollView>
        <Collection />
        <Category />
        <TopProduct />
      </ScrollView>
    </SafeAreaView>
  );
}
