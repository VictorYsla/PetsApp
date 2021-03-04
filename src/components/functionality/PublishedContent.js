import React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, font, margin, size } from "../../constants/Temas";

const PublishedContent = ({ navigation }) => {
  const goToTheComments = () => {
    navigation.push("Comments", navigation);
  };

  console.log("RF:", RFPercentage(0.8));
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.topContainer}>
          <Pressable style={styles.imagePressable}>
            <Image
              source={require("../../../assets/images/adorable-1228456_960_720.jpg")}
              style={{
                borderTopLeftRadius: RFPercentage(0.8),
                borderTopRightRadius: RFPercentage(0.8),
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
              <Icon name="share-alt" color={colors.colorIconoCompartir} />
              <Text
                style={{
                  // borderWidth: 1,
                  fontFamily: font.PoppinsLight,
                  height: "90%",
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
            >
              <Icon
                name="heart-o"
                color={"red"}
                style={{
                  borderLeftWidth: 1,
                  height: "80%",
                  textAlign: "center",
                  textAlignVertical: "center",
                  width: "40%",
                }}
              />
              <Text
                style={{
                  // borderWidth: 1,
                  fontFamily: font.PoppinsLight,
                  height: "100%",
                  textAlign: "left",
                  textAlignVertical: "center",
                  width: "60%",
                }}
              >
                Me gusta
              </Text>
            </Pressable>
            {/* <TouchableOpacity style={styles.touchableClock}>
              <Icon name="clock-o" color={colors.colorIconoReloj} />
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.botContainer}>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
          </Text>
          <Text style={styles.agradecimientoText}>Disponible</Text>
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

  topContainer: {
    alignItems: "center",
    borderColor: "rgb(193, 70, 24)",
    borderRadius: 5,
    // borderTopWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    height: RFPercentage(30),
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
    borderTopLeftRadius: RFPercentage(0.8),
    borderTopRightRadius: RFPercentage(0.8),
    height: "88%",
    width: "100%",
  },

  barContainer: {
    backgroundColor: "rgb(179, 179, 179)",
    borderBottomLeftRadius: RFPercentage(0.7),
    borderBottomRightRadius: RFPercentage(0.7),
    // borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    height: "12%",
    width: "100%",
  },

  heartPressable: {
    alignItems: "center",
    borderBottomRightRadius: RFPercentage(0.7),
    // borderRadius: 1,
    // borderWidth: 1,
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    width: "40%",
  },

  sharePressable: {
    alignItems: "center",
    borderBottomLeftRadius: RFPercentage(0.7),
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
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
    height: RFPercentage(10),
    justifyContent: "center",
    marginVertical: RFPercentage(1.5),
    width: "100%",
  },

  descriptionText: {
    backgroundColor: "rgb(196, 82, 32)",
    borderBottomLeftRadius: RFPercentage(2),
    // borderWidth: 1,
    fontFamily: font.PoppinsLight,
    fontSize: RFPercentage(2.5),
    fontWeight: "normal",
    // fontFamily: font.letrasPequeñas,
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "70%",
  },

  agradecimientoText: {
    backgroundColor: "rgb(140, 198, 63)",
    borderBottomRightRadius: RFPercentage(2),
    // borderWidth: 1,
    display: "flex",
    fontFamily: font.PoppinsLight,
    flexDirection: "column",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "30%",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
