import { Text, View, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Profile = () => {
  const users = [
    {
      id: 1,
      image: require("../../assets/image/people.jpg"),
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
  ];
  const navigation = useNavigation();
  const handleSetting = () => {
    navigation.navigate("Setting Profile");
  };
  return (
    <ScrollView className="bg-white w-full h-full">
      <View className="p-3 mt-5 h-16 border-b-2">
        <Text className="font-bold text-center text-xl my-auto">Profile</Text>
      </View>
      {users.map((user) => (
        <View
          key={user.id}
          className="border m-5 rounded-lg border-black mb-10"
        >
          <View className="flex flex-row p-3 gap-5">
            <View className="w-20 h-20 rounded-full overflow-hidden border border-black">
              <Image source={user.image} className="w-20 h-20" />
            </View>
            <View className="self-center">
              <Text className="text-lg font-semibold">{user.name}</Text>
              <Text className="text-[16px]">{user.email}</Text>
            </View>
          </View>
        </View>
      ))}
      <Text className="mx-5 font-bold text-lg">My Account</Text>
      <Pressable
        onPress={handleSetting}
        className="mx-5 my-3 p-3 border border-slate-950 rounded-lg"
      >
        <View className="flex flex-row justify-between">
          <View className="flex flex-row">
            <Ionicons name="pencil" size={24} color="black" />
            <Text className="ml-2 font-semibold">Setting Profile</Text>
          </View>
          <Ionicons name="caret-forward-outline" size={24} color="black" />
        </View>
      </Pressable>
      <Pressable className="mx-5 my-3 p-3 border border-slate-950 rounded-lg">
        <View className="flex flex-row justify-between">
          <View className="flex flex-row">
            <Ionicons name="md-people-outline" size={24} color="black" />
            <Text className="ml-2 font-semibold">Gender</Text>
          </View>
          <Ionicons name="caret-forward-outline" size={24} color="black" />
        </View>
      </Pressable>
      <Pressable className="mx-5 my-3 p-3 border border-slate-950 rounded-lg">
        <View className="flex flex-row justify-between">
          <View className="flex flex-row">
            <Ionicons name="text-outline" size={24} color="black" />
            <Text className="ml-2 font-semibold">Language</Text>
          </View>
          <Ionicons name="caret-forward-outline" size={24} color="black" />
        </View>
      </Pressable>

      <Text className="mx-5 font-bold text-lg">Support</Text>
      <Pressable className="mx-5 my-3 p-3 border border-slate-950 rounded-lg">
        <View className="flex flex-row justify-between">
          <View className="flex flex-row">
            <Ionicons name="clipboard-outline" size={24} color="black" />
            <Text className="ml-2 font-semibold">Terms & Policy</Text>
          </View>
          <Ionicons name="caret-forward-outline" size={24} color="black" />
        </View>
      </Pressable>
      <Pressable className="mx-5 my-3 p-3 border border-red-600 rounded-lg">
        <View className="flex flex-row justify-between">
          <View className="flex flex-row">
            <Ionicons name="log-out-outline" size={24} color="red" />
            <Text className="ml-2 font-semibold text-red-500">Logout</Text>
          </View>
          <Ionicons name="caret-forward-outline" size={24} color="red" />
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default Profile;
