import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Us = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>US</Text>
    </View>
  );
};

export default Us;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    paddingTop: 23,
  },
});
