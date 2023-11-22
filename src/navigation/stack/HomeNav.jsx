import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../pages/Home";
import SearchPage from "../../pages/SearchPage";

const Stack = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search Page" component={SearchPage} />
    </Stack.Navigator>
  );
};

export default HomeNav;
