import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { colores, letra } from "../../constants/Temas";
import FlatListComments from "../functionality/FlatListComments";
import HeaderComment from "../functionality/HeaderComment";
import { comentarios } from "../functionality/Trash";

const Comments = (navigation) => {
  console.log("Comments-7-navigation:", navigation);

  return (
    <View style={styles.container}>
      <View style={styles.viewSon}>
        <Text style={styles.textTitle}>TITLE</Text>
        <TouchableOpacity style={styles.touchable}>
          <Text>Share</Text>
        </TouchableOpacity>
        <Text style={styles.textPoint}>Points</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={comentarios}
        renderItem={({ item }) => <FlatListComments />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<HeaderComment />}
      />
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    width: "100%",
    flex: 1,
  },

  flatList: {
    backgroundColor: colores.fondoBaseListasVerticales,
  },

  viewSon: {
    alignItems: "flex-end",
    backgroundColor: colores.fondoItemListaVertical,
    display: "flex",
    flexDirection: "row",
    height: "5%",
  },

  textTitle: {
    fontFamily: letra.titulo,
    height: "100%",
    textAlignVertical: "center",
    textAlign: "center",
    width: "70%",
  },

  touchable: {
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    height: "80%",
    justifyContent: "center",
    margin: 0,
    paddingHorizontal: "2.3%",
  },

  textPoint: {
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "15%",
  },
});
