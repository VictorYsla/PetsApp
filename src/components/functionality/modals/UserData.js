import React, { useEffect, useState } from "react";
import { Pressable, Text, StyleSheet, View, Keyboard } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colors, font, opacity, size } from "../../../constants/Temas";
import {
  userInput1,
  userInput2,
  userInput3,
  userInput4,
  userInput5,
} from "../../generals/funtionColors";

const UserData = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [isFocused5, setIsFocused5] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // console.log("RFPercentage(2.4):", RFPercentage(2.4));

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
        Keyboard.dismiss();
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Pressable
      style={{
        backgroundColor: opacity.azulGrisDeg,
        // borderWidth: 4,
        height: "100%",
        justifyContent: "flex-end",
        // marginTop: RFPercentage(15.4),
      }}
      onPress={() => props.setUserModal(false)}
    >
      <Pressable
        style={{
          // borderWidth: 1,
          backgroundColor: colors.blanco,
          height: "85%",
        }}
        onPress={() => props.setUserModal(true)}
      >
        <ScrollView style={{ height: "100%", overflow: "hidden" }}>
          <Text style={styles.Text}>Nombres y Apellidos</Text>
          <TextInput
            style={[
              userInput1(
                isFocused1 || nameInput !== ""
                  ? colors.blanco
                  : colors.grisInput
              ),
            ]}
            onBlur={() => setIsFocused1(false)}
            onFocus={() => setIsFocused1(true)}
            onChangeText={(e) => setNameInput(e)}
          />

          <Text style={styles.Text}>Correo Electrónico</Text>
          <TextInput
            style={userInput2(
              isFocused2 || emailInput !== "" ? colors.blanco : colors.grisInput
            )}
            onBlur={() => setIsFocused2(false)}
            onFocus={() => setIsFocused2(true)}
            onChangeText={(e) => setEmailInput(e)}
          />

          <Text style={styles.Text}>País</Text>
          <TextInput
            style={userInput3(
              isFocused3 || countryInput !== ""
                ? colors.blanco
                : colors.grisInput
            )}
            onBlur={() => setIsFocused3(false)}
            onFocus={() => setIsFocused3(true)}
            onChangeText={(e) => setCountryInput(e)}
          />

          <Text style={styles.Text}>Ciudad</Text>
          <TextInput
            style={userInput4(
              isFocused4 || cityInput !== "" ? colors.blanco : colors.grisInput
            )}
            onBlur={() => setIsFocused4(false)}
            onFocus={() => setIsFocused4(true)}
            onChangeText={(e) => setCityInput(e)}
          />

          <Text style={styles.Text}>Actualizar contraseña</Text>
          <TextInput
            style={userInput5(
              isFocused5 || passwordInput !== ""
                ? colors.blanco
                : colors.grisInput
            )}
            onBlur={() => setIsFocused5(false)}
            onFocus={() => setIsFocused5(true)}
            onChangeText={(e) => setPasswordInput(e)}
          />
          <Pressable
            style={{
              backgroundColor: colors.naranja,
              borderRadius: 20,
              //   borderWidth: 1,
              height: RFPercentage(6),
              marginLeft: RFPercentage(6.5),
              marginBottom: RFPercentage(2),
              marginTop: RFPercentage(6),
              width: "77%",
            }}
          >
            {({ pressed }) => (
              <Text
                style={[
                  styles.saveText,
                  {
                    fontFamily: pressed
                      ? font.PoppinsSemiBold
                      : font.PoppinsLight,
                    textDecorationLine: pressed ? "underline" : "none",
                  },
                ]}
              >
                GUARDAR
              </Text>
            )}
          </Pressable>
          <View
            style={{
              alignItems: "center",
              // borderWidth: 1,
              height: RFPercentage(6),
              marginBottom: RFPercentage(isKeyboardVisible ? 46 : 0),
              marginLeft: RFPercentage(6.5),
              width: "77%",
            }}
          >
            <Pressable
              style={{
                // borderWidth: 1,
                height: RFPercentage(4),
                width: "25%",
              }}
              onPress={() => props.setUserModal(false)}
            >
              <Text
                style={{
                  // borderWidth: 1,
                  color: colors.naranja,
                  fontFamily: font.PoppinsSemiBold,
                  fontSize: size.texto,
                  height: "100%",
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              >
                VOLVER
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </Pressable>
    </Pressable>
  );
};

export default UserData;

const styles = StyleSheet.create({
  Text: {
    // borderWidth: 1,
    color: colors.texto,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: RFPercentage(5),
    marginLeft: RFPercentage(7),
    marginTop: RFPercentage(2),
    textAlignVertical: "center",
    width: "77%",
  },
  saveText: {
    borderRadius: 20,
    // borderWidth: 1,
    color: colors.blanco,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    height: "100%",
    paddingTop: 5,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
