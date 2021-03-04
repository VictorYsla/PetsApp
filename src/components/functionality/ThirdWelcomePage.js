import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, font, opacity, size } from "../../constants/Temas";
import Iconos from "../generals/Iconos";

const ThirdWelcomePage = ({ navigation }) => {
  const handleSkip = () => {
    navigation.push("Login");
  };
  return (
    <View style={styles.containerView}>
      <Iconos
        name={"Patita"}
        height={100}
        width={100}
        style={{ marginTop: 20 }}
      />

      <Text style={styles.notificaText}>NOTIFICA</Text>
      <Text style={styles.descipcionText}>
        Cuando encuentres un animal que necesita ayuda en tu zona
      </Text>
      <View style={styles.bottomView}>
        <View style={styles.imageFondoView}>
          <Image
            source={require("../../../assets/images/fondo-01.png")}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        <View style={styles.imageCircleView}>
          <Image
            source={require("../../../assets/images/la-organizacion-publico-fotos-desgarradoras___5i_A3bo6_720x0__1.jpg")}
            style={styles.gatoImagen}
          />
          <View style={styles.circleViewView}>
            <View style={styles.difCircleView}></View>
            <View style={styles.difCircleView}></View>
            <View style={styles.difCircleView}></View>
            <View style={styles.circuloView}></View>
          </View>
          <TouchableOpacity onPress={() => handleSkip()}>
            <Text style={styles.botonText}>Omitir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ThirdWelcomePage;
const styles = StyleSheet.create({
  botonText: {
    color: "gray",
    fontFamily: font.PoppinsLight,
    fontSize: size.botonWelcome,
    marginBottom: "15%",
    textDecorationLine: "underline",
  },
  bottomView: {
    alignItems: "center",
    height: "50%",
    justifyContent: "flex-end",
    width: "100%",
  },
  circleViewView: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: "20%",
    justifyContent: "space-around",
    width: "60%",
  },
  circuloView: {
    backgroundColor: colors.circuloPequeñoBase,
    borderRadius: 10,
    borderColor: opacity.circuloPequeñoBorder,
    borderWidth: 2,
    elevation: 10,
    height: 20,
    width: 20,
  },
  containerView: {
    alignItems: "center",
    flex: 1,
    paddingTop: 23,
    justifyContent: "space-between",
  },
  descipcionText: {
    color: colors.texto,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    textAlign: "center",
    width: "50%",
  },
  difCircleView: {
    backgroundColor: colors.difCirculoPequeñoBase,
    borderRadius: 10,
    borderColor: opacity.circuloPequeñoBorder,
    borderWidth: 2,
    elevation: 10,
    height: 20,
    width: 20,
  },
  gatoImagen: {
    alignSelf: "center",
    borderWidth: 5,
    borderColor: colors.borderImageWelcome,
    borderRadius: 70,
    height: 140,
    width: 140,
  },
  notificaText: {
    color: colors.subtitulo,
    fontFamily: font.PoppinsBold,
    fontSize: size.subtitulo,
  },
  perroIcono: {
    borderWidth: 1,
  },
  imageFondoView: {
    height: "98.5%",
    position: "absolute",
    width: "100%",
  },
  imageCircleView: {
    alignItems: "center",
    elevation: 0.1,
    height: "100%",
    justifyContent: "space-around",
    width: "100%",
  },
});
