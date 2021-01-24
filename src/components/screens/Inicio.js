import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, font, size } from "../../constants/Temas";
import ListaPlana from "../functionality/ListaPlana";

const Inicio = ({ navigation }) => {
  const openSearch = () => {
    navigation.push("Search", navigation);
  };

  const handleToUser = () => {
    navigation.push("User", navigation);
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewTitle}>
        <TouchableOpacity
          style={styles.userTouchable}
          onPress={() => handleToUser()}
        >
          <Icon name="user" style={styles.userIcon} size={50} />
        </TouchableOpacity>
        <Text style={styles.title}>Title</Text>
        <TouchableOpacity style={styles.searchTouchable}>
          <Icon
            name="search"
            size={20}
            style={styles.searchIcon}
            onPress={openSearch}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bellTouchable}>
          <Icon name="bell" size={20} style={styles.iconBell} />
        </TouchableOpacity>
      </View>
      <ListaPlana navigation={navigation} />
    </View>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  bellTouchable: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    marginLeft: "4%",
  },

  iconBell: {
    color: colors.colorIconoBell,
    backgroundColor: colors.colorDeFondoBaseIconoBell,
  },

  title: {
    fontSize: size.titulo,
    fontFamily: font.letrasTitulo,
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    width: "70%",
  },

  userTouchable: {
    marginLeft: 5,
  },

  userIcon: {
    textAlign: "center",
    textAlignVertical: "center",
  },

  searchTouchable: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },

  searchIcon: {
    backgroundColor: colors.colorDeFondoBaseIconoBuscar,
    color: colors.colorIconoBuscar,
  },

  viewContainer: {
    backgroundColor: colors.colorDeFondoBase,
    paddingTop: 23,
    width: "100%",
    flex: 1,
  },

  viewTitle: {
    borderBottomWidth: 1,
    borderColor: colors.colorDeBordeInicial,
    display: "flex",
    flexDirection: "row",
    height: "10%",
    width: "100%",
  },
});
