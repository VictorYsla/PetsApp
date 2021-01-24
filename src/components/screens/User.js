import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colores, letra, tamaño } from "../../constants/Temas";

const User = ({ navigation }) => {
  const handleToUS = () => {
    navigation.push("Us", navigation);
  };

  const handleToSaved = () => {
    navigation.push("Saved", navigation);
  };

  const handleToSolidarityMap = () => {
    navigation.push("SolidarityMap", navigation);
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.topView}>
        <Text style={styles.firstNameText}>Pet's first name</Text>
        <Text style={styles.photoText}>Photo</Text>
        <Text style={styles.fullNameText}>Full Name</Text>
      </View>
      <View style={styles.mediumView}>
        <TouchableOpacity style={styles.principalTouchable}>
          <Text style={styles.principalText}>Principal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.savedTouchable}
          onPress={() => handleToSaved()}
        >
          <Text style={styles.savedText}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.postsTouchable}
          onPress={() => handleToSaved()}
        >
          <Text style={styles.postsText}>My Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.usTouchable}
          onPress={() => handleToUS()}
        >
          <Text style={styles.usText}>US</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mapTouchable}
          onPress={() => handleToSolidarityMap()}
        >
          <Text style={styles.mapText}>Solidarity Map</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signOffTouchable}>
        <Text style={styles.signOffText}>Sign Off</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  signOffTouchable: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colores.bordesSolidos,
    marginBottom: 20,
    paddingHorizontal: 40,
    paddingVertical: 5,
  },

  signOffText: {
    fontFamily: letra.texto,
    fontSize: tamaño.botones,
  },

  firstNameText: {
    // borderWidth: 1,
    fontSize: tamaño.botones,
    fontFamily: letra.titulo,
    height: "15%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "100%",
  },

  fullNameText: {
    // borderWidth: 1,
    fontSize: tamaño.botones,
    fontFamily: letra.titulo,
    height: "15%",
    textAlign: "center",
    width: "100%",
  },

  mapTouchable: {
    // borderWidth: 1,
    width: 250,
  },

  mapText: {
    fontSize: tamaño.botones,
    fontFamily: letra.texto,
  },

  mediumView: {
    alignItems: "center",
    borderWidth: 1,
    height: "25%",
    justifyContent: "space-around",
    width: "80%",
  },

  principalTouchable: {
    // borderWidth: 1,
    width: 250,
  },

  principalText: {
    // borderWidth: 1,
    fontSize: tamaño.botones,
    fontFamily: letra.texto,
  },

  photoText: {
    borderWidth: 1,
    borderRadius: 75,
    height: 150,
    textAlignVertical: "center",
    textAlign: "center",
    width: 150,
  },

  postsTouchable: {
    // borderWidth: 1,
    width: 250,
  },

  postsText: {
    // borderWidth: 1,
    fontSize: tamaño.botones,
    fontFamily: letra.texto,
  },

  topView: {
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "space-around",
    width: "80%",
  },

  usTouchable: {
    // borderWidth: 1,
    width: 250,
  },

  usText: {
    fontSize: tamaño.botones,
    fontFamily: letra.texto,
  },

  savedTouchable: {
    // borderWidth: 1,
    width: 250,
  },

  savedText: {
    fontSize: tamaño.botones,
    fontFamily: letra.texto,
  },

  viewContainer: {
    alignItems: "center",
    flex: 1,
    paddingTop: 23,
    justifyContent: "space-around",
  },
});
