import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Iconos from "../generals/Iconos";

const WelcomePage = () => {
  return (
    <View style={styles.containerView}>
      <Iconos
        name={"Perro"}
        height={100}
        width={100}
        style={{
          borderWidth: 1,
          justifyContent: "center",
          width: 100,
          //   flex: 1,
        }}
      />

      <Text style={styles.adpotaText}>ADOPTA</Text>
      <Text style={styles.descipcionText}>
        Puedes encontrar tu compañero perfecto
      </Text>
      <View
        style={{
          alignItems: "center",
          borderWidth: 1,
          height: "50%",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <View
          style={{
            alignItems: "center",
            borderWidth: 1,
            elevation: 0.1,
            height: "60%",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Image
            source={require("../../../assets/images/perro-gato.jpg")}
            style={styles.perroGatoImagen}
          />
          <View
            style={{
              alignItems: "center",
              //   borderWidth: 1,
              display: "flex",
              flexDirection: "row",
              height: "10%",
              justifyContent: "space-around",
              width: "60%",
            }}
          >
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
            <View style={styles.circuloView}></View>
          </View>
          <TouchableOpacity style={{ borderWidth: 1 }}>
            <Text
              style={{
                color: "gray",
                textDecorationLine: "underline",
                fontSize: 15,
              }}
            >
              Omitir
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../../../assets/images/fondo-01.png")}
          style={{
            flex: 1,
            height: "60%",
            width: "100%",
            position: "absolute",
          }}
        />
      </View>
    </View>
  );
};

export default WelcomePage;
const styles = StyleSheet.create({
  adpotaText: {
    borderWidth: 1,
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
  },
  descipcionText: {
    borderWidth: 1,
  },
  perroIcono: {
    borderWidth: 1,
    // height: 10,
    // width: 20,
  },
  perroGatoImagen: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 75,
    height: 100,
    width: 100,
  },
});
