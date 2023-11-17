import { Text, View } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Home,
  Favorite,
  Setting,
  Detail,
  Login,
  Profile,
  SearchPage,
} from "./src/pages";
const Tab = createBottomTabNavigator();
const screenOptions = {
  tableShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SearchPage" component={SearchPage} />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Setting" component={Setting} />
        {/* <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Detail" component={Detail} />
        <Tab.Screen name="Login" component={Login} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
