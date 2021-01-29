import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colors, font, size } from "../../constants/Temas";
import { backgroundInput, backgroundInput2 } from "../generals/funtionColors";

const Login = ({ navigation }) => {
  const [contraseñaInput, setContraseñaInput] = useState("");
  const [contraseñaInput2, setContraseñaInput2] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

  const goToTheInicio = () => {
    navigation.push("Inicio", navigation);
  };

  const goToTheSignIn = () => {
    navigation.push("SignIn", navigation);
  };

  // console.log("Rfpercentage:", RFPercentage(3.8));

  return (
    <View style={styles.viewContainer}>
      <View
        style={{
          alignItems: "center",
          // borderWidth: 1,
          // height: "35%",
          flex: 1,
          width: "100%",
        }}
      >
        <Image
          source={require("../../../assets/images/logo_blanco.png")}
          style={{
            flex: 1,
            height: "60%",
            // marginTop: RFPercentage(10),
            resizeMode: "contain",
          }}
        />
        <View
          style={{
            alignItems: "center",
            // borderWidth: 1,
            flexDirection: "row",
            height: "35%",
            // flex: 1,
            height: "30%",
            width: "100%",
          }}
        >
          <View
            style={{
              alignItems: "center",
              height: "95%",
              justifyContent: "center",
              width: "50%",
            }}
          >
            <Pressable style={styles.logSignPressable}>
              {({ pressed }) => (
                <Text
                  style={[
                    styles.logText,
                    {
                      color: pressed
                        ? "rgba(201, 107, 49,0.2)"
                        : "rgb(201, 107, 49)",
                    },
                  ]}
                >
                  Iniciar sesión
                </Text>
              )}
            </Pressable>
          </View>
          <View
            style={{
              alignItems: "center",
              // borderWidth: 1,
              height: "95%",
              justifyContent: "center",
              width: "50%",
            }}
          >
            <Pressable style={styles.logSignPressable}>
              {({ pressed }) => (
                <Text
                  onPress={() => goToTheSignIn()}
                  style={[
                    styles.signText,
                    {
                      color: pressed
                        ? "rgba(201, 107, 49,0.2)"
                        : "rgb(201, 107, 49)",
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
      <View
        style={{
          alignItems: "center",
          // borderWidth: 1,
          height: "30%",
          // flex: 1,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ScrollView
          style={{
            // borderWidth: 1,
            // borderColor: "red",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <Text
            style={{
              // borderWidth: 1,
              color: "#c96b31",
              fontSize: RFPercentage(2.5),
              fontWeight: "bold",
              height: RFPercentage(5),
              marginLeft: RFPercentage(4),
              marginTop: RFPercentage(2),
              textAlignVertical: "center",
              width: "85%",
            }}
          >
            Correo
          </Text>
          <TextInput
            style={backgroundInput(
              isFocused === true || contraseñaInput !== ""
                ? "white"
                : "rgb(252, 234, 224)"
            )}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            onChangeText={(e) => setContraseñaInput(e)}
            // caretHidden={true}
          />
          <Text
            style={{
              // borderWidth: 1,
              color: "#c96b31",
              fontWeight: "bold",
              fontSize: RFPercentage(2.5),
              height: RFPercentage(5),
              marginLeft: RFPercentage(4),
              marginTop: RFPercentage(2),
              textAlignVertical: "center",
              width: "85%",
            }}
          >
            Contraseña
          </Text>
          <TextInput
            style={backgroundInput2(
              isFocused2 === true || contraseñaInput !== ""
                ? "white"
                : "rgb(252, 234, 224)"
            )}
            onBlur={() => setIsFocused2(false)}
            onFocus={() => setIsFocused2(true)}
            onChangeText={(e) => setContraseñaInput2(e)}
            // caretHidden={true}
          />
        </ScrollView>
      </View>
      <View
        style={{
          alignItems: "center",
          // borderWidth: 1,
          height: "35%",
          width: "100%",
        }}
      >
        <View
          style={{
            alignItems: "center",
            // borderWidth: 1,
            height: "40%",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Pressable
            style={({ pressed }) => [
              styles.LoginInBottomPressable,
              {
                backgroundColor: pressed
                  ? "rgba(193, 86, 39,0.2)"
                  : "rgba(193, 86, 39,1)",
              },
            ]}
          >
            <Text
              style={{
                // borderWidth: 1,
                color: "white",
                fontSize: RFPercentage(3),
                fontWeight: "bold",
                height: "95%",
                textAlign: "center",
                textAlignVertical: "center",
                width: "95%",
              }}
            >
              Iniciar sesión
            </Text>
          </Pressable>
          <Pressable
            style={{
              alignItems: "center",
              // borderWidth: 1,
              height: "40%",
              justifyContent: "center",
              width: "60%",
            }}
          >
            {({ pressed }) => (
              <Text
                style={[
                  styles.olvidasteText,
                  {
                    color: pressed
                      ? "rgba(42,35,69, 0.2)"
                      : "rgba(42,35,69, 0.8)",
                  },
                ]}
              >
                ¿Olvidaste tú contraseña?
              </Text>
            )}
          </Pressable>
        </View>
        <View
          style={{
            alignItems: "center",
            // borderWidth: 1,
            height: "40%",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Pressable
            style={({ pressed }) => [
              styles.facebookPressable,
              {
                backgroundColor: pressed
                  ? "rgba(31, 122, 242,0.2)"
                  : "rgba(31, 122, 242,1)",
              },
            ]}
          >
            <Icon name="facebook" size={RFPercentage(4)} color="white" />
            <Text
              style={{
                // borderWidth: 1,
                color: "white",
                fontSize: RFPercentage(2.5),
                fontWeight: "bold",
                height: "95%",
                textAlign: "center",
                textAlignVertical: "center",
                width: "85%",
              }}
            >
              Continuar con Facebook
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
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
  logSignPressable: {
    alignItems: "center",
    borderColor: "#c96b31",
    borderRightWidth: 1,
    height: "50%",
    justifyContent: "center",
    width: "100%",
  },
  LoginInBottomPressable: {
    alignItems: "center",
    borderRadius: 20,
    // borderWidth: 1,
    height: "40%",
    justifyContent: "center",
    width: "50%",
  },
  logText: {
    // borderWidth: 1,
    // color: "rgb(201, 107, 49)",
    fontSize: RFPercentage(2.5),
    height: "95%",
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "underline",
    width: "95%",
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
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
    height: "95%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "95%",
  },
  viewContainer: {
    alignItems: "center",
    backgroundColor: colors.colorDeFondoBase,
    flex: 1,
    justifyContent: "center",
    paddingTop: RFPercentage(3.8),
  },
});
