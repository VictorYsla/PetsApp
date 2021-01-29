import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
        style={{
          // borderWidth: 1,
          marginTop: 20,
        }}
      />

      <Text style={styles.adpotaText}>DONA</Text>
      <Text style={styles.descipcionText}>
        Ayuda a estos peluditos y apadrinalos
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
            height: "86.8%",
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
            source={require("../../../assets/images/3dc9d432-f60c-4b5d-ad18-9e1a31b0c4ca_16-9-aspect-ratio_default_0.jpg")}
            style={styles.cariciaImagen}
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

export default SecondWelcomePage;
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
    width: "35%",
  },
  perroIcono: {
    borderWidth: 1,
    // height: 10,
    // width: 20,
  },
  cariciaImagen: {
    alignSelf: "center",
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255,0.9)",
    borderRadius: 70,
    height: 140,
    width: 140,
  },
});
