import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import FirstWelcomePage from "../functionality/FirstWelcomePage";
import SecondWelcomePage from "../functionality/SecondWelcomePage";
import ThirdWelcomePage from "../functionality/ThirdWelcomePage";
import FourthWelcomePage from "../functionality/FourthWelcomePage";

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.containerView}>
      <StatusBar hidden={true} />
      <Swiper showsPagination={false} loop={false}>
        <FirstWelcomePage navigation={navigation} />
        <SecondWelcomePage navigation={navigation} />
        <ThirdWelcomePage navigation={navigation} />
        <FourthWelcomePage navigation={navigation} />
      </Swiper>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
});
