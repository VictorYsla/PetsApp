import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, font, opacity, size } from "../../constants/Temas";
import Iconos from "../generals/Iconos";

const SecondWelcomePage = ({ navigation }) => {
  const handleSkip = () => {
    navigation.push("Login");
  };
  return (
    <View style={styles.containerView}>
      <Iconos
        name={"Concentrado"}
        height={100}
        width={100}
        style={{ marginTop: 20 }}
      />

      <Text style={styles.donaText}>DONA</Text>
      <Text style={styles.descipcionText}>
        Ayuda a estos peluditos y apadrinalos
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
            source={require("../../../assets/images/3dc9d432-f60c-4b5d-ad18-9e1a31b0c4ca_16-9-aspect-ratio_default_0.jpg")}
            style={styles.cariciaImagen}
          />
          <View style={styles.circleViewView}>
            <View style={styles.difCircleView}></View>
            <View style={styles.difCircleView}></View>
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

export default SecondWelcomePage;
const styles = StyleSheet.create({
  botonText: {
    color: "gray",
    fontFamily: font.PoppinsLight,
    fontSize: size.subtitulo,
    marginBottom: "15%",
    textDecorationLine: "underline",
  },
  bottomView: {
    alignItems: "center",
    height: "50%",
    justifyContent: "flex-end",
    width: "100%",
  },
  cariciaImagen: {
    alignSelf: "center",
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255,0.9)",
    borderRadius: 70,
    height: 140,
    width: 140,
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
    backgroundColor: "#c14517",
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0,0.095)",
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
    width: "35%",
  },
  difCircleView: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: opacity.circuloPequeñoBorder,
    borderWidth: 2,
    elevation: 10,
    height: 20,
    width: 20,
  },
  donaText: {
    color: colors.subtitulo,
    fontFamily: font.PoppinsBold,
    fontSize: size.subtitulo,
  },
  perroIcono: {
    borderWidth: 1,
  },
  imageCircleView: {
    alignItems: "center",
    elevation: 0.1,
    height: "100%",
    justifyContent: "space-around",
    width: "100%",
  },
  imageFondoView: {
    height: "86.8%",
    position: "absolute",
    width: "100%",
  },
});
