import { Picker } from "@react-native-picker/picker";
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
import { colors, font, opacity, size } from "../../constants/Temas";
import { PICKER } from "../functionality/Trash";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import Iconos from "../generals/Iconos";

const EndSignIn = ({ navigation }) => {
  const [birth, setBorn] = useState("");
  const [date, setDate] = useState();
  const [show, setShow] = useState(false);
  const [picker, setPicker] = useState("");
  const [picker2, setPicker2] = useState("");

  const goToTheInicio = () => {
    navigation.navigate("Inicio", navigation);
  };

  const goToTheLogIn = () => {
    navigation.push("Login", navigation);
  };

  const goTotheSignIn = () => {
    navigation.navigate("SignIn");
  };

  const handleChangeDate = (event, selectedDate) => {
    setShow(Platform.OS === "ios");
    setDate(selectedDate || date);
    setShow(false);
    setBorn(selectedDate);
  };

  // console.log("show:", show);
  // console.log("date:", date);
  // console.log("born:", born);
  return (
    <View style={styles.viewContainer}>
      <View style={{ alignItems: "center", flex: 1, width: "100%" }}>
        <View style={styles.topView}>
          {/* <Pressable onPress={() => goTotheSignIn()}>
            {({ pressed }) => (
              <Iconos
                name={"Regreso"}
                fill={pressed ? opacity.naranajaSuperClaro : colors.naranja}
                height={"100%"}
              />
            )}
          </Pressable> */}
          <Image
            source={require("../../../assets/images/logo_blanco.png")}
            style={styles.boxImage}
          />
        </View>
        <View style={styles.signTopView}>
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
      <View style={styles.middleView}>
        <ScrollView style={{ overflow: "hidden", width: "100%" }}>
          <Text style={styles.birthText}>Fecha de nacimiento</Text>
          <Pressable
            onPress={() => setShow(true)}
            style={[
              styles.datePressable,
              {
                backgroundColor: birth ? colors.blanco : colors.naranjaBase,
                borderWidth: birth ? 1 : 0,
              },
            ]}
          >
            <Text>{`${birth ? moment(birth).format("DD/MM/YYYY") : ""}`}</Text>
          </Pressable>

          {show && (
            <DateTimePicker
              // testID="dateTimePicker"
              value={date || Date.now()}
              mode={"date"}
              display="spinner"
              onChange={(event, selectedDate) =>
                handleChangeDate(event, selectedDate)
              }
            />
          )}

          <Text style={styles.countryText}>País</Text>
          <View
            style={[
              styles.countryView,
              {
                backgroundColor:
                  picker === "" ? colors.naranjaBase : colors.blanco,
                borderWidth: picker === "" ? 0 : 1,
              },
            ]}
          >
            <Picker
              // dropdownIconColor={"white"}
              selectedValue={picker}
              style={{
                backgroundColor:
                  picker === "" ? colors.naranjaBase : colors.blanco,
                height: "99%",
                width: "90%",
              }}
              onValueChange={(itemValue, itemIndex) =>
                setPicker(itemValue, itemIndex)
              }
              mode={"dropdown"}
            >
              {PICKER.map((data) => {
                return (
                  <Picker.Item
                    key={data.label}
                    label={data.label}
                    value={data.value}
                    color={
                      data.value === "" ? colors.naranjaBase : colors.negro
                    }
                  />
                );
              })}
            </Picker>
          </View>
          <Text style={styles.cityText}>Ciudad</Text>
          <View
            style={[
              styles.cityView,
              {
                backgroundColor:
                  picker2 === "" ? colors.naranjaBase : colors.blanco,
                borderWidth: picker2 === "" ? 0 : 1,
              },
            ]}
          >
            <Picker
              // dropdownIconColor={"white"}
              selectedValue={picker2}
              style={{
                backgroundColor:
                  picker2 === "" ? colors.naranjaBase : colors.blanco,
                height: "99%",
                width: "90%",
              }}
              onValueChange={(itemValue, itemIndex) =>
                setPicker2(itemValue, itemIndex)
              }
              mode={"dropdown"}
            >
              {PICKER.map((data) => {
                return (
                  <Picker.Item
                    key={data.label}
                    label={data.label}
                    value={data.value}
                    color={
                      data.value === "" ? colors.naranjaBase : colors.negro
                    }
                  />
                );
              })}
            </Picker>
          </View>
        </ScrollView>
      </View>
      <View style={{ alignItems: "center", height: "25%", width: "100%" }}>
        <View style={styles.bottomView}>
          <Pressable
            onPress={() => goToTheInicio()}
            style={({ pressed }) => [styles.siguientePressable]}
          >
            {({ pressed }) => (
              <Text
                style={[
                  styles.finalizarText,
                  {
                    fontFamily: pressed
                      ? font.PoppinsSemiBold
                      : font.PoppinsLight,
                    textDecorationLine: pressed ? "underline" : "none",
                  },
                ]}
              >
                Finalizar
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default EndSignIn;
const styles = StyleSheet.create({
  birthText: {
    // borderWidth: 1,
    color: opacity.textoDeg,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: RFPercentage(5),
    marginLeft: RFPercentage(7),
    marginTop: RFPercentage(2),
    textAlignVertical: "center",
    width: "77%",
  },
  bottomView: {
    alignItems: "center",
    // borderWidth: 1,
    height: "50%",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  boxImage: {
    flex: 1,
    height: "120%",
    // marginRight: RFPercentage(),
    resizeMode: "contain",
  },
  cityText: {
    // borderWidth: 1,
    color: opacity.textoDeg,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: RFPercentage(5),
    marginLeft: RFPercentage(7),
    marginTop: RFPercentage(2),
    textAlignVertical: "center",
    width: "85%",
  },
  cityView: {
    alignItems: "center",
    borderColor: colors.borderNaranja,
    borderRadius: 10,
    borderWidth: 1,
    height: RFPercentage(6),
    justifyContent: "center",
    marginLeft: RFPercentage(7),
    width: "77%",
  },
  countryText: {
    // borderWidth: 1,
    color: opacity.textoDeg,
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: RFPercentage(5),
    marginLeft: RFPercentage(7),
    marginTop: RFPercentage(2),
    textAlignVertical: "center",
    width: "77%",
  },
  countryView: {
    alignItems: "center",
    borderColor: colors.borderNaranja,
    borderRadius: 10,
    borderWidth: 1,
    height: RFPercentage(6),
    justifyContent: "center",
    marginLeft: RFPercentage(7),
    width: "77%",
  },
  datePressable: {
    alignItems: "center",
    borderColor: colors.borderNaranja,
    borderRadius: 10,
    borderWidth: 1,
    height: RFPercentage(6),
    justifyContent: "center",
    marginLeft: RFPercentage(7),
    // marginBottom: RFPercentage(5),
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
  finalizarText: {
    // borderWidth: 1,
    color: colors.blanco,
    fontFamily: font.PoppinsSemiBold,
    fontSize: size.texto,
    // fontWeight: "bold",
    height: "90%",
    marginTop: 1.5,
    textAlign: "center",
    textAlignVertical: "center",
    width: "95%",
  },
  middleView: {
    alignItems: "center",
    // borderWidth: 1,
    height: "40%",
    // flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  logSignPressable: {
    alignItems: "center",
    borderColor: colors.borderNaranja,
    borderLeftWidth: 2,
    height: "50%",
    justifyContent: "center",
    width: "70%",
  },
  loginText: {
    // borderWidth: 1,
    // color: "rgb(201, 107, 49)",
    fontSize: size.texto,
    // fontWeight: "bold",
    height: "95%",
    textAlign: "center",
    textAlignVertical: "center",
    // textDecorationLine: "underline",
    width: "95%",
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
  signTopView: {
    alignItems: "center",
    // borderWidth: 1,
    flexDirection: "row",
    // flex: 1,
    height: "30%",
    marginLeft: RFPercentage(6),
    width: "100%",
  },
  signView: {
    alignItems: "center",
    //   borderWidth: 1,
    height: "95%",
    justifyContent: "center",
    width: "50%",
  },

  olvidasteText: {
    // borderWidth: 1,
    fontSize: size.texto,
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
  topView: {
    alignItems: "center",
    flexDirection: "row",
    height: "60%",
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
