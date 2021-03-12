import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Keyboard,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colors, font, margin, opacity, size } from "../../constants/Temas";
import {
  backgroundInput,
  backgroundInputConfirma,
  backgroundInputNewPassword,
} from "../generals/funtionColors";

const SignIn = ({ navigation }) => {
  const [contraseñaInput, setContraseñaInput] = useState("");
  const [contraseñaInput2, setContraseñaInput2] = useState("");
  const [contraseñaInput3, setContraseñaInput3] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // console.log("1:", isFocused, "2:", isFocused2, "3:", isFocused3);

  const goToTheLogIn = () => {
    navigation.navigate("Login", navigation);
  };

  const goToTheEndSignIn = () => {
    navigation.navigate("EndSignIn", navigation);
  };

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
    <View style={styles.viewContainer}>
      <ScrollView style={{ height: "100%", width: "100%" }}>
        <View
          style={{
            alignItems: "center",
            // borderWidth: 1,
            flex: 1,
            height: RFPercentage(30),
            width: "100%",
          }}
        >
          <Image
            source={require("../../../assets/images/logo_blanco.png")}
            style={{ flex: 1, height: "60%", resizeMode: "contain" }}
          />
          <View style={styles.longinSignView}>
            <View style={styles.loginView}>
              <Pressable
                style={styles.logSignPressable}
                onPress={() => goToTheLogIn()}
              >
                <Text style={[styles.loginText]}>Iniciar sesión</Text>
              </Pressable>
            </View>
            <View style={styles.signView}>
              <Pressable style={styles.logSignPressable}>
                {({ pressed }) => (
                  <Text
                    style={[
                      styles.signText,
                      {
                        color: pressed
                          ? opacity.naranajaClaro
                          : opacity.naranjaClaroDeg,
                        fontSize: pressed ? 15.1 : size.texto,
                      },
                    ]}
                  >
                    Registrarse
                  </Text>
                )}
              </Pressable>
            </View>
          </View>
        </View>
        <View style={[styles.middleView]}>
          <Text style={styles.correoText}>Correo</Text>
          <TextInput
            style={backgroundInput(
              isFocused === true || contraseñaInput !== ""
                ? colors.focusInput
                : colors.blurInput
            )}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            onChangeText={(e) => setContraseñaInput(e)}
            // caretHidden={true}
          />
          <Text style={styles.contraseñaText}>Contraseña</Text>
          <TextInput
            style={backgroundInputNewPassword(
              isFocused2 === true || contraseñaInput2 !== ""
                ? colors.focusInput
                : colors.blurInput
            )}
            onBlur={() => setIsFocused2(false)}
            onFocus={() => setIsFocused2(true)}
            onChangeText={(e) => setContraseñaInput2(e)}
            // caretHidden={true}
          />
          <Text style={styles.confirmarText}>Confirma contraseña</Text>
          <TextInput
            style={[
              backgroundInputConfirma(
                isFocused3 === true || contraseñaInput3 !== ""
                  ? colors.focusInput
                  : colors.blurInput
              ),
            ]}
            onBlur={() => setIsFocused3(false)}
            onFocus={() => setIsFocused3(true)}
            onChangeText={(e) => setContraseñaInput3(e)}
            // caretHidden={true}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            // borderWidth: 1,
            height: RFPercentage(15),
            marginBottom: RFPercentage(isKeyboardVisible ? 45 : 0),
            width: "100%",
          }}
        >
          <View style={styles.siguienteView}>
            <Pressable
              onPress={() => goToTheEndSignIn()}
              style={styles.siguientePressable}
            >
              {({ pressed }) => (
                <Text
                  style={[
                    styles.siguienteText,
                    {
                      fontFamily: pressed
                        ? font.PoppinsSemiBold
                        : font.PoppinsLight,
                      textDecorationLine: pressed ? "underline" : "none",
                    },
                  ]}
                >
                  Siguiente
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  correoText: {
    // borderWidth: 1,
    color: opacity.textoDeg,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: RFPercentage(5),
    // marginLeft: RFPercentage(6.5),
    marginTop: RFPercentage(2),
    textAlignVertical: "center",
    width: "77%",
  },
  contraseñaText: {
    // borderWidth: 1,
    color: opacity.textoDeg,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: RFPercentage(5),
    // marginLeft: RFPercentage(6.5),
    marginTop: RFPercentage(2),
    textAlignVertical: "center",
    width: "77%", //85%
  },
  confirmarText: {
    // borderWidth: 1,
    color: opacity.textoDeg,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: RFPercentage(5),
    // marginLeft: RFPercentage(6.5),
    marginTop: RFPercentage(2),
    textAlignVertical: "center",
    width: "77%",
  },
  facebookPressable: {
    alignItems: "center",
    // backgroundColor: "rgba(31, 122, 242,0.2)",
    borderRadius: 20,
    // borderWidth: 1,
    flexDirection: "row",
    height: "45%",
    justifyContent: "center",
    // marginTop: RFPercentage(),
    width: "75%",
  },
  logSignPressable: {
    alignItems: "center",
    borderColor: "#c96b31",
    // borderRightWidth: 1,
    height: "100%",
    justifyContent: "center",
    width: "60%",
  },
  siguienteView: {
    alignItems: "center",
    // borderWidth: 1,
    height: RFPercentage(12),
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  siguientePressable: {
    alignItems: "center",
    backgroundColor: opacity.naranjaOscuro,
    borderRadius: 20,
    // borderWidth: 1,
    height: "45%",
    justifyContent: "center",
    width: "50%",
  },

  siguienteText: {
    // borderWidth: 1,
    color: colors.blanco,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: "80%",
    marginTop: 2,
    textAlign: "center",
    textAlignVertical: "center",
    width: "95%",
  },

  loginText: {
    // borderWidth: 1,
    color: colors.naranjaLetra,
    fontFamily: font.PoppinsBold,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: "95%",
    textAlign: "center",
    textAlignVertical: "center",
    // textDecorationLine: "underline",
    width: "95%",
  },
  longinSignView: {
    alignItems: "center",
    // borderWidth: 1,
    flexDirection: "row",
    height: "35%",
    // flex: 1,
    height: "30%",
    width: "100%",
  },
  loginView: {
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: colors.borderNaranja,
    height: "50%",
    justifyContent: "center",
    width: "50%",
  },
  middleView: {
    alignItems: "center",
    // borderWidth: 1,
    height: RFPercentage(42),
    // flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  olvidasteText: {
    // borderWidth: 1,
    fontSize: RFPercentage(2.5),
    height: "70%",
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "underline",
    width: "95%",
  },
  signText: {
    // borderWidth: 1,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: "95%",
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "underline",
    width: "95%",
  },
  signView: {
    alignItems: "center",
    // borderWidth: 1,
    height: "95%",
    justifyContent: "center",
    width: "50%",
  },
  viewContainer: {
    alignItems: "center",
    backgroundColor: colors.colorDeFondoBase,
    flex: 1,
    justifyContent: "center",
    paddingTop: RFPercentage(3.8),
  },
});
