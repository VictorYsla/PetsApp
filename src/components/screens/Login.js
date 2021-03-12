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
import Icon from "react-native-vector-icons/FontAwesome";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colors, font, opacity, size } from "../../constants/Temas";
import { backgroundInput, backgroundInput2 } from "../generals/funtionColors";

const Login = ({ navigation }) => {
  const [contraseñaInput, setContraseñaInput] = useState("");
  const [contraseñaInput2, setContraseñaInput2] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const goToTheInicio = () => {
    navigation.navigate("Inicio", navigation);
  };

  const goToTheSignIn = () => {
    navigation.navigate("SignIn", navigation);
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
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.topView}>
          <Image
            source={require("../../../assets/images/logo_blanco.png")}
            style={{ flex: 1, height: "60%", resizeMode: "contain" }}
          />
          <View style={styles.topBottomView}>
            <View style={styles.logInView}>
              <Pressable style={styles.logSignPressable}>
                {({ pressed }) => (
                  <Text
                    style={[
                      styles.logText,
                      {
                        color: pressed ? colors.textoClaro : opacity.textoDeg,
                        fontSize: pressed ? 15.1 : size.texto,
                      },
                    ]}
                  >
                    Iniciar sesión
                  </Text>
                )}
              </Pressable>
            </View>
            <View style={styles.signView}>
              <Pressable
                style={styles.logSignPressable}
                onPress={() => goToTheSignIn()}
              >
                <Text style={styles.signText}>Registrarse</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.middleView}>
          <Text style={styles.emailText}>Correo</Text>
          <TextInput
            style={backgroundInput(
              isFocused === true || contraseñaInput !== ""
                ? colors.focusInput
                : colors.blurInput
            )}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            onChangeText={(e) => setContraseñaInput(e)}
            keyboardType={"email-address"}
            // caretHidden={true}
          />
          <Text style={styles.passwordText}>Contraseña</Text>
          <TextInput
            style={[
              backgroundInput2(
                isFocused2 === true || contraseñaInput2 !== ""
                  ? colors.focusInput
                  : colors.blurInput
              ),
            ]}
            onBlur={() => setIsFocused2(false)}
            onFocus={() => setIsFocused2(true)}
            onChangeText={(e) => setContraseñaInput2(e)}
            secureTextEntry={true}

            // caretHidden={true}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            // borderWidth: 1,
            height: RFPercentage(30),
            // justifyContent: "center",
            marginBottom: RFPercentage(isKeyboardVisible ? 30 : 0),
            width: "100%",
          }}
        >
          <View style={styles.logSignPressableView}>
            <Pressable
              onPress={() => goToTheInicio()}
              style={styles.LoginInBottomPressable}
            >
              {({ pressed }) => (
                <Text
                  style={[
                    styles.loginText,
                    {
                      fontFamily: pressed
                        ? font.PoppinsSemiBold
                        : font.PoppinsLight,
                      textDecorationLine: pressed ? "underline" : "none",
                    },
                  ]}
                >
                  Iniciar Sesión
                </Text>
              )}
            </Pressable>
            <Pressable style={styles.forgetPressable}>
              {({ pressed }) => (
                <Text
                  style={[
                    styles.olvidasteText,
                    {
                      color: pressed
                        ? opacity.azulGrisDegText
                        : opacity.azulGrisText,
                    },
                  ]}
                >
                  ¿Olvidaste tú contraseña?
                </Text>
              )}
            </Pressable>
          </View>
          <View style={styles.continueView}>
            <Pressable
              onPress={() => goToTheInicio()}
              style={({ pressed }) => [
                styles.facebookPressable,
                {
                  backgroundColor: pressed
                    ? opacity.azulFacebookFondoDeg
                    : opacity.azulFacebookFondo,
                },
              ]}
            >
              <Icon
                name="facebook"
                size={RFPercentage(4)}
                color="white"
                style={{ marginTop: RFPercentage(0.3) }}
              />
              <Text style={styles.continueText}>Continuar con Facebook</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  continueView: {
    alignItems: "center",
    // borderWidth: 1,
    height: RFPercentage(14),
    justifyContent: "center",
    width: "100%",
  },
  continueText: {
    // borderWidth: 1,
    color: colors.textoBotom,
    fontFamily: font.PoppinsSemiBold,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: "80%",
    // marginTop: RFPercentage(0.3),
    textAlign: "center",
    textAlignVertical: "bottom",
    width: "85%",
  },
  emailText: {
    // borderWidth: 1,
    color: opacity.textoDeg,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: RFPercentage(5),
    // marginLeft: RFPercentage(6.5),
    // marginTop: RFPercentage(2),
    textAlignVertical: "center",
    width: "77%",
  },

  facebookPressable: {
    alignItems: "center",
    // backgroundColor: "rgba(31, 122, 242,0.2)",
    borderRadius: RFPercentage(3.3),
    // borderWidth: 1,
    flexDirection: "row",
    height: "40%",
    justifyContent: "center",
    width: "75%",
  },

  forgetPressable: {
    alignItems: "center",
    // borderWidth: 1,
    height: "40%",
    justifyContent: "center",
    width: "60%",
  },

  middleView: {
    alignItems: "center",
    // borderWidth: 1,
    height: RFPercentage(35),
    justifyContent: "center",
    width: "100%",
  },

  loginText: {
    // borderWidth: 1,
    color: colors.textoBotom,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: "80%",
    marginTop: RFPercentage(0.3),
    textAlign: "center",
    textAlignVertical: "center",
    width: "95%",
  },

  logInView: {
    // alignItems: "center",
    // borderWidth: 1,
    height: "50%",
    justifyContent: "center",
    width: "50%",
  },
  logSignPressableView: {
    alignItems: "center",
    // borderWidth: 1,
    height: RFPercentage(14),
    justifyContent: "space-around",
    width: "100%",
  },

  logSignPressable: {
    alignItems: "center",
    // borderColor: colors.naranjaBase,
    // borderWidth: 1,
    height: "100%",
    justifyContent: "center",
    width: "80%",
  },
  LoginInBottomPressable: {
    alignItems: "center",
    backgroundColor: colors.fondoBotom,
    borderRadius: RFPercentage(3.3),
    // borderWidth: 1,
    height: "40%",
    justifyContent: "center",
    width: "50%",
  },
  logText: {
    // borderWidth: 1,
    // color: "rgb(201, 107, 49)",
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: "95%",
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "underline",
    width: "100%",
  },
  olvidasteText: {
    // borderWidth: 1,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    height: "70%",
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "underline",
    width: "95%",
  },
  passwordText: {
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
  signText: {
    // borderWidth: 1,
    color: colors.naranjaIntenso,
    fontFamily: font.PoppinsBold,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: "95%",
    textAlign: "right",
    textAlignVertical: "center",
    width: "100%",
  },
  signView: {
    alignItems: "flex-end",
    borderColor: colors.borderView,
    // borderWidth: 1,
    borderLeftWidth: 1,
    height: "50%",
    justifyContent: "center",
    width: "50%",
  },

  topView: {
    alignItems: "center",
    // borderWidth: 1,
    height: RFPercentage(30),
    justifyContent: "center",
    width: "100%",
  },
  topBottomView: {
    alignItems: "center",
    // borderWidth: 1,
    flexDirection: "row",
    // flex: 1,
    height: "30%",
    justifyContent: "center",
    width: "77%",
  },

  viewContainer: {
    alignItems: "center",
    backgroundColor: colors.fondoPantalla,
    flex: 1,
    justifyContent: "center",
    paddingTop: RFPercentage(3.8),
  },
});
