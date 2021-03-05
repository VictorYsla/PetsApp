import React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  colors,
  font,
  gradient,
  margin,
  opacity,
  size,
} from "../../constants/Temas";
import { HISTORY } from "./Trash";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

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
            <LinearGradient
              style={{
                alignItems: "center",
                borderRadius: RFPercentage(1),
                height: "100%",
                justifyContent: "center",
                width: "100%",
              }}
              colors={gradient.naranja}
            >
              <View
                style={{
                  // borderWidth: 1,
                  alignItems: "center",
                  height: "60%",
                  justifyContent: "center",
                  width: "90%",
                }}
              >
                <Image
                  source={require("../../../assets/images/mockups-09.png")}
                  style={{
                    // borderTopLeftRadius: RFPercentage(0.8),
                    // borderTopRightRadius: RFPercentage(0.8),
                    resizeMode: "contain",
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </View>
              <Text
                style={{
                  // borderWidth: 1,
                  color: colors.blanco,
                  fontFamily: font.PoppinsLight,
                  fontSize: size.pequeño,
                  height: "30%",
                  textAlign: "center",
                  textAlignVertical: "center",
                  width: "100%",
                }}
              >
                Añadir historia
              </Text>
            </LinearGradient>
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
    // borderWidth: 1,
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
    // borderWidth: 1,
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
