import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../pages/Home";
import SearchPage from "../../pages/SearchPage";
import DetailPage from "../../pages/Detail";
import BookingPage from "../../pages/Booking";

const Stack = createNativeStackNavigator();

const navigationOptions = {
  headerStyle: { backgroundColor: "#0f172a" },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  headerTitleAlign: "center",
};

export const HomeNav = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home Page"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search Page"
        component={SearchPage}
        options={{ ...navigationOptions }}
      />
      <Stack.Screen
        name="Detail Page"
        component={DetailPage}
        options={{ ...navigationOptions }}
      />
      <Stack.Screen
        name="Booking Page"
        component={BookingPage}
        options={{ ...navigationOptions }}
      />
    </Stack.Navigator>
  );
};
