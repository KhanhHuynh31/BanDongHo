import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import MapView from "react-native-maps";

import phoneIcon from "../../../../media/cate1.jpg";
import mailIcon from "../../../../media/cate2.jpg";
import messageIcon from "../../../../media/cate3.jpg";
import locationIcon from "../../../../media/watch.png";

export function Contact() {
  const {
    mapContainer,
    wrapper,
    infoContainer,
    rowInfoContainer,
    imageStyle,
    infoText,
  } = styles;
  return (
    <View style={wrapper}>
      <View style={mapContainer}>
        <MapView
          style={{ width: width - 20, height: 250 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Watch Shop"
            description="Shop Dong Ho TDMU"
          />
        </MapView>
      </View>
      <View style={infoContainer}>
        <View style={rowInfoContainer}>
          <Image source={locationIcon} style={imageStyle} />
          <Text style={infoText}>
            {" "}
            Số 6 Trần Văn Ơn, Phú Hòa, Phú Lợi, Bình Dương
          </Text>
        </View>
        <View style={rowInfoContainer}>
          <Image source={phoneIcon} style={imageStyle} />
          <Text style={infoText}> (+84) 986478392</Text>
        </View>
        <View style={rowInfoContainer}>
          <Image source={mailIcon} style={imageStyle} />
          <Text style={infoText}> react@nhom1.com</Text>
        </View>
        <View style={rowInfoContainer}>
          <Image source={messageIcon} style={imageStyle} />
          <Text style={infoText}> (+84) 546738923</Text>
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#F6F6F6" },
  mapStyle: {
    width: width - 40,
    height: 230,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  infoContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: "#FFF",
    margin: 10,
    marginTop: 0,
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  rowInfoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#D6D6D6",
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  infoText: {
    color: "#AE005E",
    fontWeight: "500",
  },
});
