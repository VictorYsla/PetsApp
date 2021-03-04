import React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import { colors, font, margin, opacity } from "../../constants/Temas";
import { HISTORY } from "./Trash";
import Icon from "react-native-vector-icons/FontAwesome";

const ListaHorizontalHead = ({ navigation }) => {
  const handleToSuccessHistory = () => {
    navigation.push("SuccessHistory", navigation);
  };

  return (
    <View style={styles.viewContainer}>
      <FlatList
        data={HISTORY}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.historyTouchable}
            onPress={() => handleToSuccessHistory()}
          >
            {/* <Text>{item.title}</Text> */}
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <Pressable
            style={styles.successPressable}
            onPress={() => handleToSuccessHistory()}
          >
            <View
              style={{
                // borderWidth: 1,
                alignItems: "flex-end",
                height: "50%",
                justifyContent: "flex-end",
                width: "80%",
              }}
            >
              <Image
                source={require("../../../assets/images/logo_blanco.png")}
                style={{
                  // borderTopLeftRadius: RFPercentage(0.8),
                  // borderTopRightRadius: RFPercentage(0.8),
                  resizeMode: "contain",
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                }}
              />
              <Icon name="plus-circle" color="white" size={RFPercentage(3.8)} />
            </View>
            <Text
              style={{
                // borderWidth: 1,
                fontFamily: font.PoppinsLight,
                fontSize: RFPercentage(2),
                height: "30%",
                textAlign: "center",
                textAlignVertical: "center",
                width: "100%",
              }}
            >
              Añadir historia
            </Text>
          </Pressable>
        }
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListaHorizontalHead;

const styles = StyleSheet.create({
  historyTouchable: {
    backgroundColor: opacity.naranajaSuperClaro,
    borderColor: "rgb(201, 106, 49)",
    borderRadius: RFPercentage(1),
    borderWidth: 1,
    height: RFPercentage(20),
    marginHorizontal: 5,
    marginTop: RFPercentage(1),
    width: RFPercentage(12),
  },

  successPressable: {
    alignItems: "center",
    backgroundColor: "rgb(196, 83, 33)",
    borderColor: "rgb(196, 83, 33)",
    borderRadius: RFPercentage(1),
    borderWidth: 1,
    height: RFPercentage(20),
    justifyContent: "center",
    marginHorizontal: 2.5,
    marginTop: RFPercentage(1),
    width: RFPercentage(12),
  },

  viewContainer: {
    backgroundColor: colors.blanco,
    height: RFPercentage(21),
    marginLeft: margin.left,
    // padding: 5,
  },
});
