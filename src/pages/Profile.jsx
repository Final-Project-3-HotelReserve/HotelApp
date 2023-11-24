import { Text, View, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const users = [
    {
      id: 1,
      image: require("../../assets/image/people.jpg"),
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
  ];
  const menuAccount = [
    {
      id: 1,
      icon: "pencil",
      item: "Change Username",
    },
    {
      id: 2,
      icon: "mail-outline",
      item: "Change Email",
    },
    {
      id: 3,
      icon: "md-people-outline",
      item: "Gender",
    },
    {
      id: 4,
      icon: "text-outline",
      item: "Language",
    },
  ];

  return (
    <ScrollView className="bg-white w-full h-full">
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
      {menuAccount.map((m) => (
        <Pressable
          key={m.id}
          className="mx-5 my-3 p-3 border border-slate-950 rounded-lg"
        >
          <View className="flex flex-row justify-between">
            <View className="flex flex-row">
              <Ionicons name={m.icon} size={24} color="black" />
              <Text className="ml-2 font-semibold">{m.item}</Text>
            </View>
            <Ionicons name="caret-forward-outline" size={24} color="black" />
          </View>
        </Pressable>
      ))}
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
