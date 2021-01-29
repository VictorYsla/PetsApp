import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
        style={{
          // borderWidth: 1,
          marginTop: 20,
        }}
      />

      <Text style={styles.adpotaText}>NOTIFICA</Text>
      <Text style={styles.descipcionText}>
        Cuando encuentres un animal que necesita ayuda en tu zona
      </Text>
      <View
        style={{
          alignItems: "center",
          // borderWidth: 1,
          height: "50%",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <View
          style={{
            // borderWidth: 1,
            height: "98.5%",
            position: "absolute",
            width: "100%",
          }}
        >
          <Image
            source={require("../../../assets/images/fondo-01.png")}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            // borderWidth: 1,
            elevation: 0.1,
            height: "100%",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Image
            source={require("../../../assets/images/la-organizacion-publico-fotos-desgarradoras___5i_A3bo6_720x0__1.jpg")}
            style={styles.gatoImagen}
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
            <View style={styles.circuloView}></View>
            <View style={styles.circuloView}></View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                borderColor: "rgba(0, 0, 0,0.095)",
                borderWidth: 2,
                elevation: 10,
                height: 20,
                width: 20,
              }}
            ></View>
            <View style={styles.circuloView}></View>
          </View>
          <TouchableOpacity onPress={() => handleSkip()}>
            <Text
              style={{
                color: "gray",
                fontSize: 18,
                marginBottom: "15%",
                textDecorationLine: "underline",
              }}
            >
              Omitir
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ThirdWelcomePage;
const styles = StyleSheet.create({
  adpotaText: {
    // borderWidth: 1,
    color: "#c14517",
    fontWeight: "bold",
    fontSize: 22,
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
    // borderWidth: 1,
    color: "#c96b31",
    fontSize: 15,
    textAlign: "center",
    width: "40%",
  },
  perroIcono: {
    borderWidth: 1,
    // height: 10,
    // width: 20,
  },
  gatoImagen: {
    alignSelf: "center",
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255,0.9)",
    borderRadius: 70,
    height: 140,
    width: 140,
  },
});
