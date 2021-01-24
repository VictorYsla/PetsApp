import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { font, size } from "../../constants/Temas";

const PublicationType = ({ navigation }) => {
  const handleToSelect = () => {
    navigation.push("AddPhoto", navigation);
  };

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.titleText}>What do you want to publish?</Text>
      <View style={styles.viewOption}>
        <TouchableOpacity
          style={styles.optionTouchable}
          onPress={() => handleToSelect()}
        >
          <Text style={styles.optionText}>Lost pet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionTouchable}
          onPress={() => handleToSelect()}
        >
          <Text style={styles.optionText}>Pet without owner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionTouchable}
          onPress={() => handleToSelect()}
        >
          <Text style={styles.optionText}>Put up for adoption</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PublicationType;
const styles = StyleSheet.create({
  optionTouchable: {
    alignItems: "flex-start",
    // borderWidth: 1,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 200,
  },

  optionText: {
    // borderWidth: 1,
    fontFamily: font.letrasMedianas,
    fontSize: size.letrasMedianas,
    textAlign: "center",
  },

  titleText: {
    fontFamily: font.letrasMedianas,
    fontSize: size.letrasMedianas,
    marginBottom: 10,
    textAlign: "center",
  },

  viewContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    paddingTop: 23,
  },

  viewOption: {
    alignItems: "center",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "80%",
    width: "80%",
  },
});
