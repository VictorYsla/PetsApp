import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, font, size } from "../../constants/Temas";

const PublishedContent = ({ navigation }) => {
  const goToTheComments = () => {
    navigation.push("Comments", navigation);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.topContainer}>
          <View style={styles.stateContainer}>
            <Text style={styles.stateText}>State</Text>
          </View>
          <TouchableOpacity onPress={goToTheComments}>
            <View style={styles.imageContainer}>
              <Text>Image</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.barContainer}>
            <TouchableOpacity style={styles.touchableHeart}>
              <Icon name="heart" color={colors.colorIconoCorazon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableShare}>
              <Icon name="share" color={colors.colorIconoCompartir} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableClock}>
              <Icon name="clock-o" color={colors.colorIconoReloj} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.botContainer}>
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.agradecimientoText}>{"S/"}</Text>
        </View>
      </View>
    </View>
  );
};

export default PublishedContent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  itemContainer: {
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: colors.colorDeFondoBaseDeItemListaVertical,
    marginTop: "0.5%",
    marginBottom: "0.5%",
    textAlign: "center",
    width: "95%",
  },

  topContainer: {
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: "2.5%",
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

  imageContainer: {
    alignItems: "center",
    // borderWidth: 1,
    paddingVertical: "15%",
  },

  barContainer: {
    borderTopWidth: 1,
    display: "flex",
    flexDirection: "row",
  },

  touchableHeart: {
    borderRadius: 1,
    // borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  touchableShare: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: 92.9,
    paddingVertical: 10,
  },

  touchableClock: {
    // borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  botContainer: {
    display: "flex",
    flexDirection: "row",
    // borderWidth: 1,
    // justifyContent: "space-evenly",
    marginVertical: 10,
    width: "90%",
  },

  descriptionText: {
    borderWidth: 1,
    fontWeight: "normal",
    fontFamily: font.letrasPequeñas,
    fontSize: size.letrasPequeñas,
    height: 70,
    paddingVertical: "5%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "75%",
  },

  agradecimientoText: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    height: 70,
    marginLeft: "5%",
    paddingVertical: "5%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "20%",
  },
});
