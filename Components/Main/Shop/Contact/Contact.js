import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import MapView from "react-native-maps";

import phoneIcon from "../../../../media/phone.png";
import mailIcon from "../../../../media/email.png";
import messageIcon from "../../../../media/facebook.png";
import locationIcon from "../../../../media/map.png";

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
            latitude: 10.980780873413792,
            longitude: 106.6744477007058,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 10.980780873413792, longitude: 106.6744477007058 }}
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
          <Text style={infoText}> facebook.com/react_native_team1</Text>
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
