import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, font, gradient, margin, size } from "../../constants/Temas";
import { LinearGradient } from "expo-linear-gradient";

const PublishedContent = ({ navigation }) => {
  const goToTheComments = () => {
    navigation.push("Comments", navigation);
  };

  const [heart, setHeart] = useState(false);

  console.log("RF:", RFPercentage(0.7));
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.topContainer}>
          <Pressable style={styles.imagePressable}>
            <Image
              source={require("../../../assets/images/requisitos-para-adoptar-un-perro.jpg")}
              style={{
                borderTopLeftRadius: RFPercentage(1),
                borderTopRightRadius: RFPercentage(1),
                resizeMode: "cover",
                height: "100%",
                width: "100%",
              }}
            />
            <Pressable
              style={({ pressed }) => [
                styles.overlay,
                {
                  backgroundColor: pressed
                    ? "rgba(0,0,0,0.5)"
                    : "rgba(255,255,255,0.1)",
                  borderTopLeftRadius: RFPercentage(1),
                  borderTopRightRadius: RFPercentage(1),
                },
              ]}
              onPress={() => goToTheComments()}
            />
          </Pressable>
          <View style={styles.barContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.sharePressable,
                {
                  backgroundColor: pressed
                    ? "rgba(255,255,255,0.5)"
                    : "rgb(179, 179, 179)",
                },
              ]}
            >
              <Icon
                name="share-alt"
                color={colors.colorIconoCompartir}
                // style={{ borderWidth: 1 }}
                size={RFPercentage(3)}
              />
              <Text
                style={{
                  // borderWidth: 1,
                  fontFamily: font.PoppinsLight,
                  fontSize: size.pequeño,
                  height: "90%",
                  paddingTop: 1.5,
                  textAlign: "center",
                  textAlignVertical: "center",

                  width: "50%",
                }}
              >
                Compartir
              </Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.heartPressable,
                {
                  backgroundColor: pressed
                    ? "rgba(255,255,255,0.5)"
                    : "rgb(179, 179, 179)",
                },
              ]}
              onPressIn={() => setHeart(true)}
            >
              <Icon
                name={heart ? "heart" : "heart-o"}
                color={"red"}
                style={styles.iconHeart}
              />

              <Text
                style={{
                  // borderWidth: 1,
                  fontFamily: font.PoppinsLight,
                  fontSize: size.pequeño,
                  height: "100%",
                  textAlign: "left",
                  textAlignVertical: "center",
                  width: "60%",
                }}
              >
                0 Me gusta
              </Text>
            </Pressable>
            {/* <TouchableOpacity style={styles.touchableClock}>
              <Icon name="clock-o" color={colors.colorIconoReloj} />
            </TouchableOpacity> */}
          </View>
          <Text
            style={[
              styles.overlay,
              {
                backgroundColor: "#e3e5e0",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                // borderWidth: 1,
                fontFamily: font.PoppinsLight,
                fontSize: size.pequeño,
                height: "20%",
                marginLeft: RFPercentage(28),
                marginTop: RFPercentage(2),
                textAlignVertical: "center",
                paddingLeft: 10,
              },
            ]}
          >
            15/02/2021
          </Text>
        </View>
        <View style={styles.botContainer}>
          <LinearGradient
            colors={gradient.naranja}
            style={{
              borderBottomLeftRadius: RFPercentage(2),
              height: "100%",
              width: "65%",
            }}
          >
            <Text style={styles.descriptionText}>
              Encontré este perro, lo tengo en casa y desearía alimentarlo
              mientras encuentra a su dueño
            </Text>
          </LinearGradient>
          <Text style={styles.agradecimientoText}>Disponible</Text>
        </View>
        <View
          style={[
            styles.overlay,
            {
              backgroundColor: "transparent",
              // borderWidth: 1,
              height: "20%",
              width: "18%",
            },
          ]}
        >
          <Image
            source={require("../../../assets/images/icon-10.png")}
            style={{
              resizeMode: "stretch",
              height: "100%",
              width: "100%",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PublishedContent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // borderWidth: 4,
    flex: 1,

    // marginVertical: RFPercentage(2), //esto
  },

  itemContainer: {
    alignItems: "center",
    borderRadius: 15,
    // borderWidth: 1,
    backgroundColor: colors.colorDeFondoBaseDeItemListaVertical,
    height: RFPercentage(46),
    marginVertical: RFPercentage(2),
    textAlign: "center",
    width: "90%",
  },

  iconHeart: {
    borderLeftWidth: 1,
    // height: "80%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "25%",
  },

  topContainer: {
    alignItems: "center",
    borderColor: "rgb(193, 70, 24)",
    borderRadius: RFPercentage(0.7),
    // borderWidth: 1,
    // borderTopWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    height: RFPercentage(25),
    justifyContent: "center",
    marginVertical: "2.5%",
    marginBottom: RFPercentage(0.1),
    width: "90%",
  },

  stateContainer: {
    // borderWidth: 1,
  },

  stateText: {
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: font.letrasPequeñas,
    fontSize: size.letrasPequeñas,
    marginLeft: "0.5%",
    marginTop: "0.5%",
    textAlign: "center",
    width: "20%",
  },

  imagePressable: {
    // alignItems: "center",
    // borderWidth: 1,
    borderTopLeftRadius: RFPercentage(1),
    borderTopRightRadius: RFPercentage(1),
    height: "80%",
    width: "100%",
  },

  barContainer: {
    backgroundColor: "rgb(179, 179, 179)",
    borderBottomLeftRadius: RFPercentage(1),
    borderBottomRightRadius: RFPercentage(1),
    // borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    height: "15%",
    width: "100%",
  },

  heartPressable: {
    alignItems: "center",
    borderBottomRightRadius: RFPercentage(1),
    // borderRadius: 1,
    // borderWidth: 1,
    flexDirection: "row",
    height: "100%",
    // justifyContent: "center",
    width: "40%",
  },

  sharePressable: {
    alignItems: "center",
    borderBottomLeftRadius: RFPercentage(1),
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    flexDirection: "row",
    height: "100%",
    // justifyContent: "center",
    paddingLeft: 10,
    width: "60%",
  },

  touchableClock: {
    // borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  botContainer: {
    alignItems: "center",
    borderBottomLeftRadius: RFPercentage(2),
    borderBottomRightRadius: RFPercentage(2),
    // borderWidth: 1,
    flexDirection: "row",
    height: RFPercentage(8),
    justifyContent: "center",
    // marginVertical: RFPercentage(1.5),
    width: "100%",
  },

  descriptionText: {
    // backgroundColor: "rgb(196, 82, 32)",
    borderBottomLeftRadius: RFPercentage(2),
    // borderWidth: 1,
    color: colors.blanco,
    fontFamily: font.PoppinsLight,
    fontSize: size.pequeño,
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "100%",
  },

  agradecimientoText: {
    backgroundColor: "rgb(140, 198, 63)",
    borderBottomRightRadius: RFPercentage(2),
    // borderWidth: 1,
    color: colors.blanco,
    display: "flex",
    fontFamily: font.PoppinsLight,
    fontSize: size.texto,
    flexDirection: "column",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "35%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
