import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, font, size } from "../../constants/Temas";

const Login = ({ navigation }) => {
  const goToTheInicio = () => {
    navigation.push("Inicio", navigation);
  };

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.imageText}>Imagen</Text>
      <Text style={styles.welcomeText}>Welcome Text</Text>
      <TouchableOpacity style={styles.touchableLogin} onPress={goToTheInicio}>
        <Icon style={styles.iconoFacebook} name="facebook" size={25} />
        <Text style={styles.loginText}>Login Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginText: {
    fontFamily: font.letrasPequeñas,
    fontSize: size.letrasPequeñas,
  },

  imageText: {
    borderRadius: 10,
    borderColor: colors.colorDeBordeInicial,
    borderWidth: 1,
    fontFamily: font.letrasPequeñas,
    fontSize: size.letrasPequeñas,
    height: "50%",
    marginTop: "2.5%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "80%",
  },

  touchableLogin: {
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "2.5%",
  },

  iconoFacebook: {
    color: colors.colorIconoFacebook,
    backgroundColor: colors.colorDeFondoBaseIconoFacebook,
    padding: 4,
  },

  welcomeText: {
    borderRadius: 10,
    borderColor: colors.colorDeBordeInicial,
    borderWidth: 1,
    fontFamily: font.letrasPequeñas,
    fontSize: size.letrasPequeñas,
    height: "20%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "70%",
  },

  viewContainer: {
    alignItems: "center",
    backgroundColor: colors.colorDeFondoBase,
    flex: 1,
    justifyContent: "space-around",
    width: "100%",
  },
});
