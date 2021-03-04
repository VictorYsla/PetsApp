import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../../constants/Temas";
import HeaderListaPlana from "./HeaderListaPlana";
import PublishedContent from "./PublishedContent";
import { DATA } from "./Trash";

const ListaPlana = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flastListFather}
        data={DATA}
        renderItem={({ item }) => <PublishedContent navigation={navigation} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<HeaderListaPlana navigation={navigation} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListaPlana;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blanco,
    height: "85%",
    width: "100%",
  },

  flastListFather: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
});
