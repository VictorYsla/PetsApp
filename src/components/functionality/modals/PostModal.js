import React from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colors, opacity, size, font } from "../../../constants/Temas";

const PostModal = (props) => {
  return (
    <Modal visible={props.newPostModal} transparent={true}>
      <Pressable
        style={{
          alignItems: "center",
          backgroundColor: opacity.grisDeg,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
        onPress={() => props.setNewPostModal(false)}
      >
        <Pressable
          style={{
            alignItems: "center",
            backgroundColor: colors.blanco,
            borderRadius: 20,
            height: "55%",
            width: "85%",
          }}
          onPress={() => props.setNewPostModal(true)}
        >
          <Text
            style={{
              color: colors.naranja,
              fontFamily: font.PoppinsSemiBold,
              fontSize: size.texto,
              marginTop: RFPercentage(3),
              marginBottom: RFPercentage(2.5),
            }}
          >
            Procesando
          </Text>
          <Image
            source={require("../../../../assets/images/logo_blanco.png")}
            style={{ height: "30%", resizeMode: "contain", width: "40%" }}
          />
          <Text
            style={{
              //   borderWidth: 1,
              color: opacity.azulGris,
              fontFamily: font.PoppinsLight,
              fontSize: size.subtituloModal,
              textAlign: "center",
              textAlignVertical: "bottom",
            }}
          >
            Tú publicación es para:
          </Text>
          <View
            style={{
              //   alignItems: "center",
              //   borderWidth: 1,
              flexDirection: "row",
              height: "45%",
              justifyContent: "space-around",
              width: "90%",
            }}
          >
            <View
              style={{
                alignItems: "center",
                // borderRadius: 10,
                // borderWidth: 1,
                height: "75%",
                justifyContent: "space-between",
                width: "40%",
              }}
            >
              <View
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  borderColor: opacity.naranjaClaroDeg,
                  height: "75%",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../../../assets/images/icon-10.png")}
                  style={{
                    height: "85%",
                    resizeMode: "contain",
                    width: "90%",
                  }}
                />
              </View>
              <Pressable
                style={{
                  alignItems: "center",
                  backgroundColor: colors.grisPlata,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  //   borderWidth: 1,
                  //   borderColor: colors.grisPlata,
                  height: "25%",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {({ pressed }) => (
                  <Text
                    style={[
                      { fontSize: size.textoModal },
                      {
                        fontFamily: pressed
                          ? font.PoppinsSemiBold
                          : font.PoppinsLight,
                        textDecorationLine: pressed ? "underline" : "none",
                      },
                    ]}
                  >
                    Adoptar
                  </Text>
                )}
              </Pressable>
            </View>
            <View
              style={{
                alignItems: "center",
                // borderRadius: 10,
                // borderWidth: 1,
                height: "75%",
                justifyContent: "space-between",
                width: "40%",
              }}
            >
              <View
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  borderColor: opacity.naranjaClaroDeg,
                  height: "75%",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../../../assets/images/icon-11.png")}
                  style={{
                    height: "85%",
                    resizeMode: "contain",
                    width: "90%",
                  }}
                />
              </View>
              <Pressable
                style={{
                  alignItems: "center",
                  backgroundColor: colors.grisPlata,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  //   borderWidth: 1,
                  //   borderColor: colors.grisPlata,
                  height: "25%",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {({ pressed }) => (
                  <Text
                    style={[
                      { fontSize: size.textoModal },
                      {
                        fontFamily: pressed
                          ? font.PoppinsSemiBold
                          : font.PoppinsLight,
                        textDecorationLine: pressed ? "underline" : "none",
                      },
                    ]}
                  >
                    Donar
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default PostModal;
