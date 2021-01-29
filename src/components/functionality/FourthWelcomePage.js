import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  backgroundBotonEmpecemos,
  colorEmpecemos,
} from "../generals/funtionColors";
import Iconos from "../generals/Iconos";

const FourthWelcomePage = ({ navigation }) => {
  const [isPress, setIsPress] = useState(false);

  const handleSkip = () => {
    navigation.push("Login");
  };

  return (
    <View style={styles.containerView}>
      <Image
        source={require("../../../assets/images/logo_blanco.png")}
        style={{ height: 100, width: 100 }}
      />

      <Text style={styles.adpotaText}>ENCUENTRA</Text>
      <Text style={styles.descipcionText}>Publica tu amigo perdido.</Text>
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
            height: "105.5%",
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
            <View style={styles.circuloView}></View>
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
          </View>
          <TouchableOpacity
            style={backgroundBotonEmpecemos(
              isPress === true ? "rgb(252, 234, 224)" : "white"
            )}
            onPress={() => handleSkip()}
            onPressOut={() => setIsPress(false)}
            onPressIn={() => setIsPress(true)}
          >
            <Text
              style={colorEmpecemos(isPress === true ? "white" : "#c14517")}
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
  perritoImagen: {
    alignSelf: "center",
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255,0.9)",
    borderRadius: 70,
    height: 140,
    width: 140,
  },
});
