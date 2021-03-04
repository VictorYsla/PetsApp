import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, font, opacity, size } from "../../constants/Temas";
import Iconos from "../generals/Iconos";

const FirstWelcomePage = ({ navigation }) => {
  const handleSkip = () => {
    navigation.push("Login");
  };

  return (
    <View style={styles.containerView}>
      <Iconos
        name={"Perro"}
        height={100}
        width={100}
        style={{ marginTop: 20 }}
      />

      <Text style={styles.adpotaText}>ADOPTA</Text>
      <Text style={styles.descipcionText}>
        Puedes encontrar tu compañero perfecto
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
            source={require("../../../assets/images/perro-gato.jpg")}
            style={styles.perroGatoImagen}
          />
          <View style={styles.circleViewView}>
            <View style={styles.difCircleView}></View>
            <View style={styles.circuloView}></View>
            <View style={styles.circuloView}></View>
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

export default FirstWelcomePage;
const styles = StyleSheet.create({
  adpotaText: {
    color: colors.subtitulo,
    fontFamily: font.PoppinsBold,
    fontSize: size.subtitulo,
  },
  botonText: {
    color: colors.botonOmitir,
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
  circuloView: {
    backgroundColor: colors.circuloPequeñoBase,
    borderRadius: 10,
    borderColor: opacity.circuloPequeñoBorder,
    borderWidth: 2,
    elevation: 10,
    height: 20,
    width: 20,
  },

  circleViewView: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: "20%",
    justifyContent: "space-around",
    width: "60%",
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
    width: "40%",
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
  perroIcono: {
    borderWidth: 1,
  },
  perroGatoImagen: {
    alignSelf: "center",
    borderWidth: 5,
    borderColor: colors.borderImageWelcome,
    borderRadius: 70,
    height: 140,
    width: 140,
  },
  imageFondoView: {
    height: "75%",
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
