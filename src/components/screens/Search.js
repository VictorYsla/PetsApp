import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { colores, letra, tamaño } from "../../constants/Temas";
import { validacion1, validacion2 } from "../../constants/validaciones";

const Search = (navigation) => {
  const [checkList, setCheckList] = useState(false);
  const [checkList2, setCheckList2] = useState(false);
  const [checkList3, setCheckList3] = useState(false);

  return (
    <View style={styles.viewContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Write for search"
          autoCapitalize="none"
        />
        <Icon style={styles.searchIcon} name="search" />
      </View>
      <View style={styles.viewOptionsContainer}>
        <View style={styles.viewWantedContainer}>
          <TouchableOpacity
            style={styles.optionTouchable}
            onPress={() => validacion1(checkList, setCheckList)}
          >
            <Icon
              style={styles.optionIcon}
              name="square"
              color={validacion2(checkList)}
            />
          </TouchableOpacity>
          <Text style={styles.optionText}>Wanted</Text>
        </View>
        <View style={styles.viewReportedContainer}>
          <TouchableOpacity
            style={styles.optionTouchable}
            onPress={() => validacion1(checkList2, setCheckList2)}
          >
            <Icon
              style={styles.optionIcon}
              name="square"
              color={validacion2(checkList2)}
            />
          </TouchableOpacity>
          <Text style={styles.optionText}>Reported</Text>
        </View>
        <View style={styles.viewAdoptionContainer}>
          <TouchableOpacity
            style={styles.optionTouchable}
            onPress={() => validacion1(checkList3, setCheckList3)}
          >
            <Icon
              style={styles.optionIcon}
              name="square"
              color={validacion2(checkList3)}
            />
          </TouchableOpacity>
          <Text style={styles.optionText}>Adoption</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonTouchable}>
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  buttonTouchable: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colores.bordesSolidos,
    marginBottom: 20,
    paddingHorizontal: 40,
    paddingVertical: 5,
  },

  inputContainer: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colores.bordesSolidos,
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    width: "50%",
  },

  optionIcon: {
    borderWidth: 1,
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center",
    paddingHorizontal: 1.5,
  },

  optionText: {
    fontFamily: letra.texto,
    fontSize: tamaño.opcionesFiltrar,
    textAlignVertical: "center",
    width: "80%",
  },

  optionTouchable: {
    marginHorizontal: 5,
  },

  searchInput: {
    flex: 1,
    textAlign: "center",
  },

  searchText: {
    fontSize: tamaño.botonSearch,
    fontFamily: letra.texto,
    paddingHorizontal: 10,
  },

  searchIcon: {
    fontSize: tamaño.iconoInputBuscar,
    marginRight: 5,
  },

  viewContainer: {
    alignItems: "center",
    backgroundColor: colores.fondoBase,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 23,
    width: "100%",
  },

  viewOptionsContainer: {
    // borderWidth: 1,
    borderColor: "orange",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },

  viewWantedContainer: {
    alignItems: "center",
    // borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    height: "20%",
    justifyContent: "space-around",
  },

  viewReportedContainer: {
    alignItems: "center",
    // borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    height: "20%",
    justifyContent: "space-around",
  },

  viewAdoptionContainer: {
    alignItems: "center",
    // borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    height: "20%",
    justifyContent: "space-around",
  },
});
