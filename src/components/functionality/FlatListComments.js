import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colores, letra } from "../../constants/Temas";

const FlatListComments = () => {
  const [image, setImage] = useState(false);

  return image ? (
    <View style={styles.container1}>
      <Text style={styles.textImage}>Image</Text>
      <View style={styles.viewSimpleTop}>
        <Text style={styles.textPhoto}>Photo</Text>
        <Text style={styles.textComment}>Comment</Text>
      </View>
      <View style={styles.viewSimpleBottom}>
        <TouchableOpacity
          style={styles.touchableHeart}
          onPress={() => setImage(false)}
        >
          <Icon name="heart" color={colores.iconoHeart} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableClock}>
          <Icon name="clock-o" color={colores.iconoClock} />
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={styles.container2}>
      <View style={styles.viewSimpleTop}>
        <Text style={styles.textPhoto}>Photo</Text>
        <Text style={styles.textComment}>Comment</Text>
      </View>
      <View style={styles.viewSimpleBottom}>
        <TouchableOpacity
          style={styles.touchableHeart}
          onPress={() => setImage(true)}
        >
          <Icon name="heart" color={colores.iconoHeart} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableClock}>
          <Icon name="clock-o" color={colores.iconoClock} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlatListComments;

const styles = StyleSheet.create({
  container1: {
    alignItems: "center",
    backgroundColor: colores.fondoItemListaVertical,
    borderWidth: 1,
    flex: 1,
    height: 200,
    justifyContent: "space-around",
    marginTop: 5,
    marginHorizontal: 5,
  },

  textImage: {
    borderRadius: 10,
    borderWidth: 1,
    textAlignVertical: "center",
    textAlign: "center",
    height: "40%",
    width: "90%",
  },

  container2: {
    alignItems: "center",
    backgroundColor: colores.fondoItemListaVertical,
    flex: 1,
    height: 150,
    justifyContent: "space-around",
    marginTop: 5,
    marginHorizontal: 5,
  },

  viewSimpleTop: {
    display: "flex",
    flexDirection: "row",
    height: "35%",
    justifyContent: "space-around",
    width: "100%",
  },

  textPhoto: {
    borderWidth: 1,
    borderRadius: 100,
    textAlign: "center",
    textAlignVertical: "center",
    width: "20%",
  },

  textComment: {
    borderWidth: 1,
    fontFamily: letra.letrasPequeñas,
    textAlign: "center",
    textAlignVertical: "center",
    width: "75%",
  },

  viewSimpleBottom: {
    display: "flex",
    flexDirection: "row",
    height: "10%",
    width: "99%",
  },

  touchableHeart: {
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "center",
    width: 290,
  },

  touchableClock: {
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "center",
    width: 55,
  },
});
