import React, { Component } from 'react';
import { useNavigation } from "@react-navigation/native";

import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';

export function Search() {
  const navigation = useNavigation();
  return (
    <Navigator
      initialRoute={{ name: 'SEARCH_VIEW' }}
      renderScene={(route, navigator) => {
        switch (route.name) {
          case 'SEARCH_VIEW': return <SearchView navigator={navigator} />;
          default: return <ProductDetail navigator={navigator} product={route.product} />;
        }
      }}
    />
  );
}


export default Search;