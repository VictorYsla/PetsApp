import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListaHorizontalHead from "./ListaHorizontalHead";
import { colors, font, size } from "../../constants/Temas";

const HeaderListaPlana = ({ navigation }) => {
  const handleToPost = () => {
    navigation.push("PublicationType", navigation);
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewToPost}>
        <Icon name="photo" style={styles.photoIcon} size={65} />
        <TouchableOpacity
          style={styles.postTouchable}
          onPress={() => {
            handleToPost();
          }}
        >
          <Text style={styles.textPost}>To Post </Text>
        </TouchableOpacity>
      </View>
      <ListaHorizontalHead navigation={navigation} />
    </View>
  );
};

export default HeaderListaPlana;

const styles = StyleSheet.create({
  photoIcon: {
    height: "100%",
  },

  postTouchable: {
    borderColor: colors.colorDeBordeInicial,
    borderRadius: 105,
    borderWidth: 1,
    paddingHorizontal: 110,
    paddingVertical: 5,
  },

  textPost: {
    color: "black",
    fontFamily: font.letrasPequeñas,
    fontSize: size.letrasPequeñas,
  },

  viewToPost: {
    alignItems: "center",
    backgroundColor: colors.colorDeFondoBase,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  viewContainer: {
    flex: 1,
  },
});
