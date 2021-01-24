import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, font, size } from "../../constants/Temas";

const SearchOrDownload = () => {
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity style={styles.searchTouchable}>
        <Text>Search</Text>
      </TouchableOpacity>
      <Text style={styles.imageText}>Image</Text>
      <TouchableOpacity style={styles.downloadTouchable}>
        <Text>Download</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueTouchable}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchOrDownload;

const styles = StyleSheet.create({
  searchTouchable: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.colorDeBordeInicial,
    marginBottom: 20,
    paddingHorizontal: 40,
    paddingVertical: 2.5,
  },

  searchText: {
    fontSize: size.letrasPequeñas,
    fontFamily: font.letrasPequeñas,
  },

  imageText: {
    borderRadius: 10,
    borderWidth: 1,
    height: "50%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "80%",
  },

  downloadTouchable: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.colorDeBordeInicial,
    marginBottom: 20,
    paddingHorizontal: 30,
    paddingVertical: 2.5,
  },

  downloadText: {
    fontSize: size.letrasPequeñas,
    fontFamily: font.letrasPequeñas,
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

  viewContainer: {
    alignItems: "center",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: 23,
  },
});
