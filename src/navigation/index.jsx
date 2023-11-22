import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
// screen
import HomeScreen from "../pages/Home";
import FavoriteScreen from "../pages/Favorite";
import ProfileScreen from "../pages/Profile";
import SettingScreen from "../pages/Setting";

// screen name
const homeName = "Home";
const favoriteName = "Favorite";
const profileName = "Profile";
const settingName = "Setting";

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
            } else if (rn === profileName) {
              iconName = focused ? "person" : "person-outline";
            } else if (rn === settingName) {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={favoriteName}
          component={FavoriteScreen}
          options={{ ...navigationOptions }}
        />
        <Tab.Screen
          name={profileName}
          component={ProfileScreen}
          options={{ ...navigationOptions }}
        />
        <Tab.Screen
          name={settingName}
          component={SettingScreen}
          options={{ ...navigationOptions }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default index;
