import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, Image, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors, font, size } from "../../constants/Temas";
import ListaPlana from "../functionality/ListaPlana";
import SearchModal from "../functionality/modals/SearchModal";
import UserData from "../functionality/modals/UserData";

const Inicio = ({ navigation }) => {
  const [userModal, setUserModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const openSearchModal = () => {
    setSearchModal(true);
  };

  const openUserModal = () => {
    setUserModal(true);
  };

  // console.log("RF:", RFPercentage(12));

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewTitle}>
        <Pressable
          style={({ pressed }) => [
            styles.userPressable,
            {
              backgroundColor: pressed
                ? "rgba(252, 234, 224,0.2)"
                : "rgb(197, 87, 35)",
            },
          ]}
          onPress={() => openUserModal()}
        >
          <Image
            source={require("../../../assets/images/mockups-04.png")}
            style={{
              flex: 1,
              // height: "100%",
              resizeMode: "contain",
              width: "100%",
              marginRight: 30,
            }}
          />
        </Pressable>

        <Text style={styles.title}>
          <Text
            style={{
              color: "white",
              fontFamily: font.PoppinsSemiBold,
              fontSize: size.titulo,
              // fontWeight: "bold",
            }}
          >
            A
          </Text>
          dog
        </Text>
        <TouchableOpacity style={styles.searchTouchable}>
          <Icon
            name="search"
            size={18}
            style={styles.searchIcon}
            onPress={() => openSearchModal()}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bellTouchable}>
          <Icon name="bell" size={18} style={styles.iconBell} />
        </TouchableOpacity>
      </View>
      <ListaPlana navigation={navigation} />
      <Modal
        visible={userModal}
        animationType="slide"
        statusBarTranslucent={true}
        transparent={true}
      >
        <UserData setUserModal={setUserModal} />
      </Modal>
      <SearchModal setSearchModal={setSearchModal} searchModal={searchModal} />
    </View>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  bellTouchable: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 17,
    // borderWidth: 1,
    height: RFPercentage(5.5),
    justifyContent: "center",
    marginLeft: 12,
    marginTop: RFPercentage(3),
    width: RFPercentage(5.5),
  },

  iconBell: {
    color: "rgb(197, 87, 35)",
  },

  title: {
    // borderWidth: 1,
    color: "white",
    fontSize: size.titulo,
    fontFamily: font.PoppinsLight,
    // flex: 1,
    height: "100%",
    textAlign: "center",
    textAlignVertical: "bottom",
    paddingBottom: 10,
    width: "40%",
  },

  userPressable: {
    alignItems: "center",
    borderRadius: 30,
    // borderWidth: 1,
    // borderColor: "white",
    // flex: 1,
    height: "100%",
    // justifyContent: "flex-end",
    marginLeft: RFPercentage(3),
    marginTop: RFPercentage(3.5),
    width: RFPercentage(14),
  },

  searchTouchable: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 17,
    // borderWidth: 1,
    height: RFPercentage(5.5),
    justifyContent: "center",
    marginLeft: 12,
    marginTop: RFPercentage(3),
    width: RFPercentage(5.5),
  },

  searchIcon: {
    color: "rgb(197, 87, 35)",
  },

  viewContainer: {
    backgroundColor: colors.colorDeFondoBase,
    // paddingTop: 23,
    width: "100%",
    flex: 1,
  },

  viewTitle: {
    alignItems: "center",
    backgroundColor: "rgb(197, 87, 35)",
    // borderBottomWidth: 1,
    borderColor: colors.colorDeBordeInicial,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-around",
    height: "15%",
    width: "100%",
  },
});
