import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListaHorizontalHead from "./ListaHorizontalHead";
import { colors, font, size } from "../../constants/Temas";
import { RFPercentage } from "react-native-responsive-fontsize";

const HeaderListaPlana = ({ navigation }) => {
  const handleToPost = () => {
    navigation.push("PublicationType", navigation);
  };

  console.log("RF:", RFPercentage(2.4));

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewToPost}>
        <Pressable
          style={({ pressed }) => [
            {
              alignItems: "center",
              backgroundColor: pressed ? "rgba(155,155,155,0.2)" : "white",
              // borderWidth: 1,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              flexDirection: "row",
              height: "60%",
              width: "100%",
            },
          ]}
          onPress={() => handleToPost()}
        >
          <Text
            style={{
              // borderWidth: 1,
              fontFamily: font.PoppinsLight,
              height: "80%",
              textAlign: "center",
              textAlignVertical: "top",
              width: "50%",
            }}
          >
            Publica tu anuncio
          </Text>
        </Pressable>
        <View
          style={{
            // borderWidth: 1,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            flexDirection: "row",
            height: "30%",
            width: "100%",
          }}
        >
          <Pressable
            style={({ pressed }) => [
              {
                alignItems: "center",
                backgroundColor: pressed
                  ? "rgba(239, 132, 79,0.7)"
                  : "rgb(239, 132, 79)",
                // borderWidth: 1,
                borderBottomLeftRadius: 13.5,
                flexDirection: "row",
                height: "100%",
                justifyContent: "center",
                width: "25%",
              },
            ]}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: "white",
                // borderWidth: 1,
                borderRadius: RFPercentage(1.6),
                height: RFPercentage(3.1),
                justifyContent: "center",
                width: RFPercentage(3.1),
              }}
            >
              <Icon
                name="camera"
                size={RFPercentage(2)}
                color="rgb(239, 132, 79)"
              />
            </View>
            <Text
              style={{
                // borderWidth: 1,
                color: "white",
                fontFamily: font.PoppinsLight,
                fontSize: RFPercentage(2),
                height: "90%",
                textAlign: "center",
                textAlignVertical: "center",
                width: "50%",
              }}
            >
              Foto
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                alignItems: "center",
                backgroundColor: pressed
                  ? "rgba(239, 132, 79,0.7)"
                  : "rgb(239, 132, 79)",
                // borderLeftWidth: 1,
                flexDirection: "row",
                height: "100%",
                justifyContent: "space-around",
                width: "37.5%",
              },
            ]}
          >
            <View
              style={{
                alignItems: "center",
                borderColor: "white",
                borderLeftWidth: 1,
                flexDirection: "row",
                height: "65%",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "white",
                  // borderWidth: 1,
                  borderRadius: RFPercentage(1.6),
                  height: RFPercentage(3.1),
                  justifyContent: "center",
                  width: RFPercentage(3.1),
                }}
              >
                <Icon
                  name="map-marker"
                  size={RFPercentage(2)}
                  color="rgb(239, 132, 79)"
                />
              </View>
              <Text
                style={{
                  // borderWidth: 1,
                  color: "white",
                  fontFamily: font.PoppinsLight,
                  fontSize: RFPercentage(2),
                  height: "90%",
                  textAlign: "center",
                  textAlignVertical: "center",
                  width: "60%",
                }}
              >
                Ubicación
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                alignItems: "center",
                backgroundColor: pressed
                  ? "rgba(190, 70, 24,0.7)"
                  : "rgb(190, 70, 24)",
                // borderLeftWidth: 1,
                borderBottomRightRadius: 13.5,
                flexDirection: "row",
                height: "100%",
                justifyContent: "space-around",
                width: "37.5%",
              },
            ]}
          >
            <Text
              style={{
                // borderWidth: 1,
                // borderBottomRightRadius: 20,
                color: "white",
                fontFamily: font.PoppinsSemiBold,
                height: "90%",
                textAlign: "center",
                textAlignVertical: "bottom",
                width: "80%",
              }}
            >
              Publicar
            </Text>
          </Pressable>
        </View>
      </View>
      <ListaHorizontalHead navigation={navigation} />
    </View>
  );
};

export default HeaderListaPlana;

const styles = StyleSheet.create({
  photoIcon: {
    height: "100%",
  },

  textPost: {
    color: "black",
    fontFamily: font.letrasPequeñas,
    fontSize: size.letrasPequeñas,
  },

  viewToPost: {
    alignItems: "center",
    borderColor: "rgb(200, 99, 49)",
    borderRadius: 15,
    borderWidth: 1,
    height: RFPercentage(17),
    justifyContent: "space-between",
    marginLeft: "5%",
    marginVertical: "5%",
    width: "90%",
  },

  viewContainer: {
    backgroundColor: "white",
    // borderColor: "red",
    // borderWidth: 4,

    // flex: 1,
    height: RFPercentage(44),
    marginBottom: RFPercentage(2),
  },
});
