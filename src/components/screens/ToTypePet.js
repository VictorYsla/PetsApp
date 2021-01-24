import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, size, font } from "../../constants/Temas";
import { validacion1, validacion2 } from "../../constants/validaciones";

const ToTypePet = ({ navigation }) => {
  const [checkList, setCheckList] = useState(false);
  const [checkList2, setCheckList2] = useState(false);
  const [checkList3, setCheckList3] = useState(false);

  const handlToDirection = () => {
    navigation.push("ToDirection", navigation);
  };

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.titleTypeText}>Type</Text>
      <View style={styles.viewOptionsContainer}>
        <TouchableOpacity
          style={styles.optionTouchable}
          onPress={() => validacion1(checkList, setCheckList)}
        >
          <Icon
            name="square"
            style={styles.iconCheckList}
            color={validacion2(checkList)}
          />
        </TouchableOpacity>
        <Text style={styles.optionText}>Dog</Text>
      </View>
      <View style={styles.viewOptionsContainer}>
        <TouchableOpacity
          style={styles.optionTouchable}
          onPress={() => validacion1(checkList2, setCheckList2)}
        >
          <Icon
            name="square"
            style={styles.iconCheckList}
            color={validacion2(checkList2)}
          />
        </TouchableOpacity>
        <Text style={styles.optionText}>Cat</Text>
      </View>
      <View style={styles.viewOptionsContainer}>
        <TouchableOpacity
          style={styles.optionTouchable}
          onPress={() => validacion1(checkList3, setCheckList3)}
        >
          <Icon
            name="square"
            style={styles.iconCheckList}
            color={validacion2(checkList3)}
          />
        </TouchableOpacity>
        <Text style={styles.optionText}>Other</Text>
      </View>
      <TextInput
        style={styles.descriptionInput}
        multiline={true}
        numberOfLines={4}
        placeholder="Description"
      />
      <TouchableOpacity
        style={styles.buttonTouchable}
        onPress={() => handlToDirection()}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToTypePet;

const styles = StyleSheet.create({
  buttonTouchable: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.colorDeBordeInicial,
    marginBottom: 20,
    paddingHorizontal: 40,
    paddingVertical: 5,
  },

  buttonText: {
    fontSize: size.letrasPequeñas,
    fontFamily: font.letrasPequeñas,
  },

  iconCheckList: {
    borderWidth: 1,
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center",
    paddingHorizontal: 1.5,
  },

  descriptionInput: {
    borderWidth: 1,
    textAlign: "center",
    width: "80%",
  },

  optionText: {
    fontSize: size.letrasPequeñas,
    fontFamily: font.letrasPequeñas,
    textAlignVertical: "center",
    width: "80%",
  },

  optionTouchable: {
    // borderWidth: 1,
    marginHorizontal: 5,
  },

  titleTypeText: {
    // borderWidth: 1,
    fontSize: size.titulo,
    fontFamily: font.letrasTitulo,
  },

  viewContainer: {
    alignItems: "center",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: 23,
  },

  viewOptionsContainer: {
    alignItems: "center",
    // borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    width: "80%",
  },
});
