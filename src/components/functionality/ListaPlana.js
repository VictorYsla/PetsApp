import React, { useState } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colors } from "../../constants/Temas";
import SolidarityMap from "../functionality/modals/SolidarityMap";
import HeaderListaPlana from "./HeaderListaPlana";
import PublishedContent from "./PublishedContent";
import { DATA } from "./Trash";

const ListaPlana = ({ navigation }) => {
  const [solidaryModal, setSolidaryModal] = useState(false);

  // console.log("RF:", RFPercentage(10));

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flastListFather}
        data={DATA}
        renderItem={({ item, index }) => (
          <PublishedContent navigation={navigation} index={index} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<HeaderListaPlana navigation={navigation} />}
        showsVerticalScrollIndicator={false}
      />
      <Pressable
        style={[
          // styles.overlay,
          {
            // borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 15,
            right: 15,
            width: 60,
            height: 60,
            backgroundColor: "transparent",
            borderRadius: 100,
          },
        ]}
        onPress={() => setSolidaryModal(true)}
      >
        <Image
          source={require("../../../assets/images/icon-15.png")}
          style={[
            {
              height: "120%",
              marginTop: 5,
              // resizeMode: "contain",
              width: "120%",
            },
          ]}
        />
      </Pressable>
      <SolidarityMap
        setSolidaryModal={setSolidaryModal}
        solidaryModal={solidaryModal}
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
