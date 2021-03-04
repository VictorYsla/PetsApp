import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
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

  const goToTheInicio = () => {
    navigation.navigate("Inicio", navigation);
  };

  const goToTheSignIn = () => {
    navigation.navigate("SignIn", navigation);
  };

  console.log("Rfpercentage:", RFPercentage(2.5));

  return (
    <View style={styles.viewContainer}>
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
                      color: pressed
                        ? opacity.naranajaClaro
                        : opacity.naranjaClaroDeg,
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
        <ScrollView style={{ overflow: "hidden", width: "100%" }}>
          <Text style={styles.emailText}>Correo</Text>
          <TextInput
            style={backgroundInput(
              isFocused === true || contraseñaInput !== ""
                ? colors.blancoBase
                : colors.naranjaBase
            )}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            onChangeText={(e) => setContraseñaInput(e)}
            keyboardType={"email-address"}
            // caretHidden={true}
          />
          <Text style={styles.passwordText}>Contraseña</Text>
          <TextInput
            style={backgroundInput2(
              isFocused2 === true || contraseñaInput2 !== ""
                ? colors.blancoBase
                : colors.naranjaBase
            )}
            onBlur={() => setIsFocused2(false)}
            onFocus={() => setIsFocused2(true)}
            onChangeText={(e) => setContraseñaInput2(e)}
            secureTextEntry={true}
            // caretHidden={true}
          />
        </ScrollView>
      </View>
      <View style={{ alignItems: "center", height: "35%", width: "100%" }}>
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
                    color: pressed ? opacity.azulGrisDeg : opacity.azulGris,
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
                  ? opacity.azulFacebookBaseDeg
                  : opacity.azulFacebookBase,
              },
            ]}
          >
            <Icon
              name="facebook"
              size={RFPercentage(4)}
              color="white"
              style={{ marginTop: 1.5 }}
            />
            <Text style={styles.continueText}>Continuar con Facebook</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  continueView: {
    alignItems: "center",
    // borderWidth: 1,
    height: "40%",
    justifyContent: "center",
    width: "100%",
  },
  continueText: {
    // borderWidth: 1,
    color: colors.blancoBase,
    fontFamily: font.PoppinsSemiBold,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: "80%",
    marginTop: 1.5,
    textAlign: "center",
    textAlignVertical: "bottom",
    width: "85%",
  },
  emailText: {
    // borderWidth: 1,
    color: colors.texto,
    fontFamily: font.PoppinsSemiBold,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: RFPercentage(5),
    marginLeft: RFPercentage(6.5),
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
    height: "30%",
    // flex: 1,
    justifyContent: "center",
    width: "100%",
  },

  loginText: {
    // borderWidth: 1,
    color: "white",
    fontSize: size.texto,
    // fontWeight: "bold",
    height: "80%",
    marginTop: 2,
    textAlign: "center",
    textAlignVertical: "center",
    width: "95%",
  },

  logInView: {
    alignItems: "center",
    height: "50%",
    justifyContent: "center",
    width: "50%",
  },
  logSignPressableView: {
    alignItems: "center",
    // borderWidth: 1,
    height: "40%",
    justifyContent: "space-around",
    width: "100%",
  },

  logSignPressable: {
    alignItems: "center",
    borderColor: colors.naranjaBase,
    // borderWidth: 1,
    height: "100%",
    justifyContent: "center",
    width: "60%",
  },
  LoginInBottomPressable: {
    alignItems: "center",
    backgroundColor: opacity.naranjaOscuro,
    borderRadius: 20,
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
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "underline",
    width: "95%",
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
    color: colors.texto,
    fontFamily: font.PoppinsSemiBold,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: RFPercentage(5),
    marginLeft: RFPercentage(6.5),
    marginTop: RFPercentage(2),
    textAlignVertical: "center",
    width: "77%",
  },
  signText: {
    // borderWidth: 1,
    color: "rgb(201, 107, 49)",
    fontFamily: font.PoppinsBold,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: "95%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "95%",
  },
  signView: {
    alignItems: "center",
    borderColor: colors.borderNaranja,
    borderLeftWidth: 1,
    height: "50%",
    justifyContent: "center",
    width: "50%",
  },

  topView: {
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  topBottomView: {
    alignItems: "center",
    // borderWidth: 1,
    flexDirection: "row",
    height: "35%",
    // flex: 1,
    height: "30%",
    width: "100%",
  },

  viewContainer: {
    alignItems: "center",
    backgroundColor: colors.colorDeFondoBase,
    flex: 1,
    justifyContent: "center",
    paddingTop: RFPercentage(3.8),
  },
});
