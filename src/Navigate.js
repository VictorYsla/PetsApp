import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./components/screens/Login";
import Inicio from "./components/screens/Inicio";
import Search from "./components/screens/Search";
import Comments from "./components/screens/Comments";
import PublicationType from "./components/screens/PublicationType";
import AddPhoto from "./components/screens/AddPhoto";
import ToTypePet from "./components/screens/ToTypePet";
import ToDirection from "./components/screens/ToDirection";
import SearchOrDownload from "./components/screens/SearchOrDownload";
import User from "./components/screens/User";
import Us from "./components/screens/Us";
import Saved from "./components/screens/Saved";
import SolidarityMap from "./components/screens/SolidarityMap";
import SuccessHistory from "./components/screens/SuccessHistory";
import WelcomePage from "./components/screens/WelcomePage";
import SignIn from "./components/screens/SignIn";
import EndSignIn from "./components/screens/EndSignIn";

const Stack = createStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="WelcomePage"
      >
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="EndSignIn" component={EndSignIn} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Comments" component={Comments} />
        <Stack.Screen name="PublicationType" component={PublicationType} />
        <Stack.Screen name="AddPhoto" component={AddPhoto} />
        <Stack.Screen name="ToTypePet" component={ToTypePet} />
        <Stack.Screen name="ToDirection" component={ToDirection} />
        <Stack.Screen name="SearchOrDownload" component={SearchOrDownload} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Us" component={Us} />
        <Stack.Screen name="Saved" component={Saved} />
        <Stack.Screen name="SolidarityMap" component={SolidarityMap} />
        <Stack.Screen name="SuccessHistory" component={SuccessHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
