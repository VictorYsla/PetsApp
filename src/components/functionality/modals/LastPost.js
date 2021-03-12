import React from "react";
import { Image, Modal, Pressable, Text, View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  colors,
  font,
  gradient,
  opacity,
  size,
} from "../../../constants/Temas";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const LastPost = (props) => {
  return (
    <Modal visible={props.lastPostModal} transparent={true}>
      <Pressable
        style={{
          alignItems: "center",
          backgroundColor: opacity.grisDeg,
          height: "100%",
          justifyContent: "space-around",
          width: "100%",
        }}
        onPress={() => props.setLastPostModal(false)}
      >
        <Pressable
          style={{
            alignItems: "center",
            borderRadius: RFPercentage(2),
            backgroundColor: colors.blanco,
            height: "70%",
            justifyContent: "space-around",
            width: "90%",
          }}
          onPress={() => props.setLastPostModal(true)}
        >
          <View
            style={{ height: "50%", marginTop: RFPercentage(3), width: "85%" }}
          >
            <View style={{ height: "85%", width: "100%" }}>
              <Image
                source={require("../../../../assets/images/requisitos-para-adoptar-un-perro.jpg")}
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  height: "100%",
                  width: "100%",
                }}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                backgroundColor: colors.grisPlata,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                flexDirection: "row",
                height: "15%",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Text
                style={{
                  //   borderWidth: 1,
                  color: opacity.azulLetraDeg,
                  fontFamily: font.PoppinsSemiBold,
                  fontSize: size.texto,
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              >
                Fecha de publicación:
              </Text>
              <Text
                style={{
                  //   borderWidth: 1,
                  color: opacity.azulLetraDeg,
                  fontFamily: font.PoppinsLight,
                  fontSize: size.texto,
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              >
                15/02/2021
              </Text>
            </View>
            <View
              style={{
                // borderWidth: 1,
                height: "85%",
                // marginTop: RFPercentage(3),
                position: "absolute",
                width: "100%",
              }}
            >
              <Image
                source={require("../../../../assets/images/icon-11.png")}
                style={{
                  bottom: RFPercentage(0.7),
                  height: "40%",
                  marginLeft: RFPercentage(15),
                  resizeMode: "contain",
                  width: "100%",
                }}
              />
              <Icon
                name={"heart-o"}
                color={"red"}
                size={RFPercentage(3)}
                style={{
                  top: RFPercentage(13),
                  marginLeft: RFPercentage(35),
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              />
            </View>
          </View>
          <Text
            style={{
              //   borderWidth: 1,
              fontFamily: font.PoppinsLight,
              fontSize: size.textoModal,
              height: "20%",
              textAlign: "justify",
              textAlignVertical: "center",
              width: "85%",
            }}
          >
            Encontré a este peludito por los lados de la playa de chapultepec,
            tiene alrededor de 3 años,es de raza pequeña,cualquier info al +57
            319 3745948
          </Text>
          <View
            style={{
              //   borderWidth: 1,
              borderRadius: RFPercentage(1.5),
              flexDirection: "row",
              height: "15%",
              marginBottom: RFPercentage(2),
              width: "85%",
            }}
          >
            <Pressable
              style={{
                height: "100%",
                flexDirection: "row",
                width: "65%",
              }}
            >
              {({ pressed }) => (
                <LinearGradient
                  colors={gradient.naranja}
                  style={{
                    alignItems: "center",
                    borderTopLeftRadius: RFPercentage(1.5),
                    borderBottomLeftRadius: RFPercentage(1.5),
                    flexDirection: "row",
                    height: "100%",
                    justifyContent: "center",
                    width: "101%",
                  }}
                >
                  <Icon
                    name="share-alt"
                    color={colors.colorIconoCompartir}
                    size={RFPercentage(3.5)}
                  />

                  <Text
                    style={[
                      styles.searchText,
                      {
                        fontFamily: pressed
                          ? font.PoppinsSemiBold
                          : font.PoppinsLight,
                        textDecorationLine: pressed ? "underline" : "none",
                      },
                    ]}
                  >
                    Compartir
                  </Text>
                </LinearGradient>
              )}
            </Pressable>
            <Text
              style={{
                backgroundColor: colors.verde,
                borderTopRightRadius: RFPercentage(1.5),
                borderBottomRightRadius: RFPercentage(1.5),
                color: colors.blanco,
                fontFamily: font.PoppinsLight,
                fontSize: size.texto,
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
                width: "35%",
              }}
            >
              Disponible
            </Text>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default LastPost;

const styles = StyleSheet.create({
  searchText: {
    color: colors.blanco,
    // fontFamily: font.PoppinsSemiBold,
    fontSize: size.subtituloModal,
    marginLeft: RFPercentage(3),
  },
});
