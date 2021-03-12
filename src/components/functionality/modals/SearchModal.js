import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  Text,
  View,
  Modal,
  Keyboard,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colors, font, opacity, size } from "../../../constants/Temas";
import { searchInput } from "../../generals/funtionColors";

const SearchModal = (props) => {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // console.log("input:", input, "isFocused:", isFocused);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
        Keyboard.dismiss(setIsFocused(false));
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Modal visible={props.searchModal} animationType="fade" transparent={true}>
      <Pressable
        style={{
          borderWidth: 1,
          alignItems: "center",
          backgroundColor: opacity.grisDeg,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
        onPress={() => props.setSearchModal(false)}
      >
        <Pressable
          style={{
            backgroundColor: colors.blanco,
            borderRadius: 15,
            height: "35%",
            marginBottom: isFocused && isKeyboardVisible ? RFPercentage(30) : 0,
            width: "90%",
          }}
          onPress={() => (
            props.setSearchModal(true), Keyboard.dismiss(setIsFocused(false))
          )}
        >
          <View
            style={{
              alignItems: "center",
              backgroundColor: colors.naranjaIntenso,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              // borderWidth: 1,
              flexDirection: "row",
              height: "30%",
              width: "100%",
            }}
          >
            <Image
              source={require("../../../../assets/images/mockups-05.png")}
              style={{
                backgroundColor: colors.naranjaIntenso,
                height: "75%",
                resizeMode: "contain",
                left: 5,
              }}
            />
            <Text
              style={{
                color: "white",
                fontFamily: font.PoppinsSemiBold,
                fontSize: size.titulo,
                marginLeft: 5,
              }}
            >
              Buscar
            </Text>
          </View>
          <TextInput
            style={[
              searchInput(
                isFocused || input !== "" ? colors.blanco : colors.grisInput
              ),
              { fontFamily: font.PoppinsLight },
            ]}
            onFocus={() => setIsFocused(true)}
            onChangeText={(e) => setInput(e)}
            placeholder={isKeyboardVisible ? "Escribe la palabra clave" : ""}
          />
          <Pressable
            style={{
              alignItems: "center",
              backgroundColor: colors.naranjaIntenso,
              borderRadius: 10,
              // borderWidth: 1,
              height: RFPercentage(6),
              justifyContent: "center",
              marginLeft: RFPercentage(15),
              marginTop: RFPercentage(3),
              width: "45%",
            }}
          >
            {({ pressed }) => (
              <Text
                style={[
                  styles.searchTextPressable,
                  {
                    fontFamily: pressed
                      ? font.PoppinsSemiBold
                      : font.PoppinsLight,
                    textDecorationLine: pressed ? "underline" : "none",
                  },
                ]}
              >
                Buscar
              </Text>
            )}
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  searchTextPressable: {
    color: colors.blanco,
    fontSize: size.texto,
  },
});
