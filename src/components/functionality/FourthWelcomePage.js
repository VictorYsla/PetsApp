import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, font, opacity, size } from "../../constants/Temas";
import { backgroundBotonEmpecemos } from "../generals/funtionColors";

const FourthWelcomePage = ({ navigation }) => {
  const [isPress, setIsPress] = useState(false);

  const handleSkip = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.containerView}>
      <Image
        source={require("../../../assets/images/logo_blanco.png")}
        style={{ height: 100, width: 100 }}
      />

      <Text style={styles.encuentraText}>ENCUENTRA</Text>
      <Text style={styles.descipcionText}>Publica tu amigo perdido.</Text>
      <View style={styles.bottomView}>
        <View style={styles.imageFondoView}>
          <Image
            source={require("../../../assets/images/fondo-01.png")}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        <View style={styles.imageCircleView}>
          <Image
            source={require("../../../assets/images/perros-callejeros-744x465.jpg")}
            style={styles.perritoImagen}
          />
          <View
            style={{
              alignItems: "center",
              //   borderWidth: 1,
              display: "flex",
              flexDirection: "row",
              height: "20%",
              justifyContent: "space-around",
              width: "60%",
            }}
          >
            <View style={styles.difCircleView}></View>
            <View style={styles.difCircleView}></View>
            <View style={styles.difCircleView}></View>
            <View style={styles.difCircleView}></View>
          </View>
          <TouchableOpacity
            style={backgroundBotonEmpecemos(
              isPress === true ? colors.naranjaBase : colors.blancoBase
            )}
            onPress={() => handleSkip()}
            onPressOut={() => setIsPress(false)}
            onPressIn={() => setIsPress(true)}
          >
            <Text
              style={{
                color: isPress === true ? colors.blancoBase : colors.texto,
                fontFamily: font.PoppinsBold,
                fontSize: size.botonWelcome,
                marginTop: 2,
                textAlignVertical: "bottom",
              }}
            >
              Empecemos
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FourthWelcomePage;
const styles = StyleSheet.create({
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
  difCircleView: {
    backgroundColor: colors.difCirculoPequeñoBase,
    borderRadius: 10,
    borderColor: opacity.circuloPequeñoBorder,
    borderWidth: 2,
    elevation: 10,
    height: 20,
    width: 20,
  },
  descipcionText: {
    // borderWidth: 1,
    color: colors.texto,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    textAlign: "center",
    width: "40%",
  },
  encuentraText: {
    // borderWidth: 1,
    color: colors.subtitulo,
    fontFamily: font.PoppinsBold,
    fontSize: size.subtitulo,
    // fontWeight: "bold",
  },
  perroIcono: {
    borderWidth: 1,
    // height: 10,
    // width: 20,
  },
  perritoImagen: {
    alignSelf: "center",
    borderWidth: 5,
    borderColor: colors.borderImageWelcome,
    borderRadius: 70,
    height: 140,
    width: 140,
  },
  imageCircleView: {
    alignItems: "center",
    // borderWidth: 1,
    elevation: 0.1,
    height: "100%",
    justifyContent: "space-around",
    width: "100%",
  },
  imageFondoView: {
    height: "106%",
    position: "absolute",
    width: "100%",
  },
});
