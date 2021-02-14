import React from "react";
import { ScrollView } from "react-native";
import { Collection } from "./Collection";
import { Category } from "./Category";
import { TopProduct } from "./TopProduct";

export function HomeView() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#DBDBD8" }}>
      <Collection />
      <Category />
      <TopProduct />
    </ScrollView>
  );
}
