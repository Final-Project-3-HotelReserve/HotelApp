import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
// screen
import FavoriteScreen from "../pages/Favorite";
import HistoryScreen from "../pages/History";
import { HomeNav } from "./stack/HomeNav";
import { SettingStack } from "./stack/SettingStack";

// screen name
const homeName = "Home";
const favoriteName = "Favorite";
const historyName = "History";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

const tabScreenOptions = {
  tabBarActiveTintColor: "black",
  tabBarInactiveTintColor: "gray",
  tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
  tabBarStyle: { padding: 10, height: 70 },
};

const navigationOptions = {
  headerStyle: { backgroundColor: "white" },
  headerTintColor: "#000",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  headerTitleAlign: "center",
};

const index = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          ...tabScreenOptions,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === favoriteName) {
              iconName = focused ? "heart" : "heart-outline";
            } else if (rn === historyName) {
              iconName = focused ? "document-text" : "document-text-outline";
            } else if (rn === profileName) {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name={homeName}
          component={HomeNav}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={favoriteName}
          component={FavoriteScreen}
          options={{ ...navigationOptions }}
        />
        <Tab.Screen
          name={historyName}
          component={HistoryScreen}
          options={{ ...navigationOptions }}
        />
        <Tab.Screen
          name={profileName}
          component={SettingStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default index;