import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../constants/Temas";
import { HISTORY } from "./Trash";

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
            style={styles.successTouchable}
            onPress={() => handleToSuccessHistory()}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <TouchableOpacity
            style={styles.historyTouchable}
            onPress={() => handleToSuccessHistory()}
          >
            <Text>-S.History-</Text>
          </TouchableOpacity>
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
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 60,
  },

  successTouchable: {
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 2.5,
    paddingHorizontal: 10,
    paddingVertical: 60,
  },

  viewContainer: {
    backgroundColor: colors.colorDeFondoBase,
    marginTop: 4,
    marginBottom: 2,
    padding: 5,
  },
});
