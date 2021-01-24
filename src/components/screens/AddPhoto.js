import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, font, size } from "../../constants/Temas";

const AddPhoto = ({ navigation }) => {
  const handleToTypePet = () => {
    navigation.push("ToTypePet", navigation);
  };

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.firstImageText}>Image</Text>
      <TouchableOpacity style={styles.imageTouchable}>
        <Text style={styles.uploadText}>Upload Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.photoTouchable}>
        <Text style={styles.photoText}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.continueTouchable}
        onPress={() => handleToTypePet()}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPhoto;

const styles = StyleSheet.create({
  continueText: {
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

  imageTouchable: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
  },

  firstImageText: {
    borderWidth: 1,
    borderRadius: 10,
    height: "40%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "70%",
  },

  photoTouchable: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
  },

  photoText: {
    // borderWidth: 1,
    fontSize: size.letrasPequeñas,
    fontFamily: font.letrasPequeñas,
  },

  uploadText: {
    // borderWidth: 1,

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
