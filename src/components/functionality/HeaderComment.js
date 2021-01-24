import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { colores, letra } from "../../constants/Temas";

const HeaderComment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewSon}>
        <View style={styles.viewTop}>
          <Text style={styles.textState}>State</Text>
          <Text style={styles.textImage}>Image</Text>
          <View style={styles.viewBar}>
            <TouchableOpacity style={styles.touchableHeart}>
              <Icon name="heart" color={colores.iconoHeart} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableShare}>
              <Icon name="share" color={colores.iconoCompartir} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableClock}>
              <Icon name="clock-o" color={colores.iconoClock} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewBot}>
          <Text style={styles.textDescription}>Description</Text>
          <Text style={styles.textThanks}>S/.</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderComment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewSon: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    height: 250,
    justifyContent: "space-around",
  },

  viewTop: {
    borderTopWidth: 1,
    height: "50%",
  },

  textState: {
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: letra.letrasPequeñas,
    marginTop: 1.5,
    marginLeft: "4.5%",
    textAlign: "center",
    width: "90%",
  },

  textImage: {
    height: 70,
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
  },

  viewBar: {
    display: "flex",
    flexDirection: "row",
    height: 31,
  },

  touchableHeart: {
    alignItems: "center",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    height: "100%",
    justifyContent: "center",
    width: 55,
  },

  touchableShare: {
    alignItems: "center",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    height: "100%",
    justifyContent: "center",
    width: 246,
  },

  touchableClock: {
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: "100%",
    justifyContent: "center",
    width: 55,
  },

  viewBot: {
    // borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    height: "40%",
  },

  textDescription: {
    borderWidth: 1,
    fontFamily: letra.letrasPequeñas,
    textAlign: "center",
    textAlignVertical: "center",
    width: "75%",
  },

  textThanks: {
    borderWidth: 1,
    marginLeft: "5%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "20%",
  },
});
