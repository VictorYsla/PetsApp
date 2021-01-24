import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { colores, letra, tamaño } from "../../constants/Temas";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SAVED } from "../functionality/Trash";

const Saved = () => {
  return (
    <View style={style.viewContainer}>
      <View style={style.viewTitle}>
        <Text style={style.savedText}>My Saved Posts</Text>
        <TouchableOpacity style={style.bellTouchable}>
          <Icon style={style.bellIcon} name="bell" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={style.searchTouchable}>
          <Icon style={style.searchIcon} name="search" size={30} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={style.postsFlatList}
        data={SAVED}
        renderItem={({ item }) => (
          <View style={style.viewContainerFlatList}>
            <View style={style.viewState}>
              <Text style={style.stateText}>State</Text>
            </View>
            <Text style={style.contentText}>Content</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Saved;

const style = StyleSheet.create({
  bellTouchable: {
    marginRight: 5,
    marginTop: 5,
  },

  bellIcon: {
    textAlign: "center",
    textAlignVertical: "center",
  },

  contentText: {
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 9,
    paddingVertical: "27%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "80%",
  },

  postsFlatList: {
    backgroundColor: colores.fondoBaseListasVerticales,
    // borderWidth: 1,
    height: "90%",
    width: "95%",
  },

  stateText: {
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 2.5,
    marginTop: 2.5,
    textAlign: "center",
    width: "30%",
  },

  savedText: {
    // borderWidth: 1,
    fontFamily: letra.titulo,
    fontSize: tamaño.titulo,
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "80%",
  },

  searchTouchable: {
    marginRight: 5,
    marginTop: 5,
  },

  searchIcon: {
    textAlign: "center",
    textAlignVertical: "center",
  },

  viewState: {
    // borderWidth: 1,
    width: "100%",
  },

  viewContainerFlatList: {
    alignItems: "center",
    backgroundColor: colores.fondoItemListaVertical,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "red",
    justifyContent: "center",
    marginLeft: 8,
    marginTop: 2,
    marginBottom: 2,
    width: "95%",
  },

  viewContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "95%",
    paddingTop: 23,
    justifyContent: "center",
  },

  viewTitle: {
    // borderWidth: 1,
    flexDirection: "row",
    width: "95%",
  },
});
