import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
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
      <Pressable
        style={[
          // styles.overlay,
          {
            alignItems: "flex-end",
            backgroundColor: "transparent",
            borderWidth: 1,
            height: "30%",
            justifyContent: "flex-end",
            marginLeft: RFPercentage(40),
            marginTop: RFPercentage(60),
            position: "absolute",
            width: "30%",
            // zIndex: -10,
          },
        ]}
      >
        <Image
          source={require("../../../assets/images/icon-15.png")}
          style={[
            styles.overlay,
            {
              height: "100%",
              resizeMode: "contain",
              width: "100%",
            },
          ]}
        />
      </Pressable>
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
