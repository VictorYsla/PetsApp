import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { letra, tamaño } from "../../constants/Temas";
import MapView from "react-native-maps";

const SolidarityMap = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewTitle}>
        <Text style={styles.solidaryText}>Solidarity Map</Text>
        <TouchableOpacity style={styles.bellTouchable}>
          <Icon style={styles.bellIcon} name="bell" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchTouchable}>
          <Icon style={styles.searchIcon} name="search" size={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.legentText}>Legend</Text>
      <View style={styles.viewLegend}>
        <MapView
          style={styles.pointsText}
          initialRegion={{
            latitude: 4.6997102,
            longitude: -74.091749,
            latitudeDelta: 0.2,
            longitudeDelta: 0.3,
          }}
        />
      </View>
    </View>
  );
};

export default SolidarityMap;

const styles = StyleSheet.create({
  bellTouchable: {
    marginRight: 5,
    marginTop: 5,
  },

  bellIcon: {
    textAlign: "center",
    textAlignVertical: "center",
  },

  legentText: {
    borderRadius: 10,
    borderWidth: 1,
    textAlign: "center",
    width: "85%",
  },

  pointsText: {
    borderWidth: 1,
    borderRadius: 10,
    height: "100%",
    width: "100%",
  },

  solidaryText: {
    // borderWidth: 1,
    fontFamily: letra.titulo,
    fontSize: tamaño.titulo,
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "80%",
  },

  searchTouchable: {
    marginRight: 5,
    marginTop: 5,
  },

  searchIcon: {
    textAlign: "center",
    textAlignVertical: "center",
  },

  viewLegend: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    height: "80%",
    justifyContent: "center",
    width: "90%",
  },

  viewTitle: {
    // borderWidth: 1,
    flexDirection: "row",
    width: "95%",
  },

  viewContainer: {
    alignItems: "center",
    flex: 1,
    paddingTop: 23,
  },
});
