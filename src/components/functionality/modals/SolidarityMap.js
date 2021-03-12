import React, { useEffect, useState } from "react";
import { Modal, Pressable, Text, View, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colors, font, opacity, size } from "../../../constants/Temas";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

const SolidarityMap = (props) => {
  const [location, setLocation] = useState(false);

  useEffect(() => {
    GetCurrentLocation(props.solidaryModal);
  }, [props.solidaryModal]);

  async function GetCurrentLocation() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status !== "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }

    if (status === "granted") {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) =>
          setLocation({ latitude, longitude }),
        (error) => console.log("Error:", error)
      );
    }
  }

  // console.log(location);

  return (
    <Modal visible={props.solidaryModal} transparent={true}>
      <Pressable
        style={{
          backgroundColor: opacity.grisDeg,
          height: "100%",
          width: "100%",
        }}
        onPress={() => props.setSolidaryModal(false)}
      >
        <Pressable
          style={{
            alignItems: "center",
            backgroundColor: colors.blanco,
            borderRadius: RFPercentage(3),
            height: "50%",
            // justifyContent: "space-around",
            marginTop: RFPercentage(25),
            width: "100%",
          }}
          onPress={() => props.setSolidaryModal(true)}
          onTouchEnd={() => props.setSolidaryModal(true)}
        >
          <Text
            style={{
              color: colors.naranja,
              fontFamily: font.PoppinsSemiBold,
              fontSize: size.texto,
              marginLeft: RFPercentage(15),
              marginTop: RFPercentage(4),
              width: "85%",
            }}
          >
            Mapa solidario
          </Text>
          <View
            style={{
              // borderWidth: 1,
              borderRadius: RFPercentage(2),
              height: "50%",
              marginLeft: RFPercentage(2),
              overflow: "hidden",
              width: "85%",
            }}
          >
            {location && (
              <MapView
                style={{ flex: 1 }}
                initialRegion={{
                  ...location,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
                loadingEnabled={true}
                showsMyLocationButton
                showsUserLocation
              >
                <Marker coordinate={location}>
                  {/* <Text>Funciona</Text> */}
                </Marker>
              </MapView>
            )}
          </View>
          <Text
            style={{
              color: opacity.naranajaClaro,
              fontFamily: font.PoppinsLight,
              fontSize: size.textoModal,
              marginLeft: RFPercentage(2),
              marginTop: RFPercentage(1),
              width: "85%",
            }}
          >
            Mira quien necesita ayuda con un peludo a tu alrededor
          </Text>
          <Pressable
            style={{
              alignItems: "center",
              backgroundColor: colors.naranja,
              borderRadius: RFPercentage(1),
              //   borderWidth: 1,
              height: "10%",
              justifyContent: "center",
              marginLeft: RFPercentage(3.5),
              width: "45%",
            }}
          >
            {({ pressed }) => (
              <Text
                style={[
                  styles.alertText,
                  {
                    fontFamily: pressed
                      ? font.PoppinsSemiBold
                      : font.PoppinsLight,
                    textDecorationLine: pressed ? "underline" : "none",
                  },
                ]}
              >
                ¡Pon tú alerta!
              </Text>
            )}
          </Pressable>
        </Pressable>
        <Pressable
          style={{
            // borderWidth: 1,
            bottom: RFPercentage(66),
            flex: 1,
            height: "12%",
            marginLeft: RFPercentage(0.1),
            position: "absolute",
            // right: RFPercentage(46),
            width: "22%",
          }}
          onPress={() => props.setSolidaryModal(true)}
        >
          <Image
            source={require("../../../../assets/images/icon-15.png")}
            style={{
              height: "100%",
              resizeMode: "contain",
              width: "100%",
            }}
            onProgress
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default SolidarityMap;

const styles = StyleSheet.create({
  alertText: {
    color: colors.blanco,
    fontFamily: font.PoppinsLight,
    fontSize: size.textoModal,
  },
});
