import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SuccessHistory = () => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.imageText}>Image</Text>
      <Text style={styles.objetiveText}>Objetive</Text>
      <Text style={styles.resultText}>Result</Text>
    </View>
  );
};

export default SuccessHistory;

const styles = StyleSheet.create({
  objetiveText: {
    borderWidth: 1,
    height: "15%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "60%",
  },

  resultText: {
    borderWidth: 1,
    height: "15%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "60%",
  },

  imageText: {
    borderRadius: 10,
    borderWidth: 1,
    height: "60%",
    textAlign: "center",
    textAlignVertical: "center",
    width: "80%",
  },

  viewContainer: {
    alignItems: "center",
    flex: 1,
    paddingTop: 23,
    justifyContent: "space-around",
  },
});
