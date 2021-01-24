import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import MapView from "react-native-maps";

import { colors, font, size } from "../../constants/Temas";

const ToDirection = ({ navigation }) => {
  const handleToSearchOrDownload = () => {
    navigation.push("SearchOrDownload", navigation);
  };

  return (
    <View style={styles.viewContainer}>
      <TextInput style={styles.notesInput} placeholder="Additional Notes" />
      <TextInput style={styles.addressInput} placeholder="Address" />
      <TextInput style={styles.regionInput} placeholder="Region" />
      <TextInput style={styles.cityInput} placeholder="City" />
      <MapView
        style={styles.mapText}
        initialRegion={{
          latitude: 4.6997102,
          longitude: -74.091749,
          latitudeDelta: 0.2,
          longitudeDelta: 0.3,
        }}
      />
      {/* <Text style={styles.mapText}>Map</Text> */}
      <TouchableOpacity
        style={styles.continueTouchable}
        onPress={() => handleToSearchOrDownload()}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDirection;

const styles = StyleSheet.create({
  addressInput: {
    borderWidth: 1,
    height: "6%",
    textAlign: "center",
    width: "80%",
  },

  cityInput: {
    borderWidth: 1,
    height: "6%",
    textAlign: "center",
    width: "80%",
  },

  continueTouchable: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.colorDeBordeInicial,
    marginBottom: 20,
    paddingHorizontal: 40,
    paddingVertical: 5,
  },

  continueText: {
    fontSize: size.letrasPequeñas,
    fontFamily: font.letrasPequeñas,
  },

  notesInput: {
    borderWidth: 1,
    height: "6%",
    textAlign: "center",
    width: "80%",
  },

  mapText: {
    borderWidth: 1,
    borderRadius: 10,
    height: "55%",
    width: "80%",
  },

  regionInput: {
    borderWidth: 1,
    height: "6%",
    textAlign: "center",
    width: "80%",
  },

  viewContainer: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: 23,
  },
});
