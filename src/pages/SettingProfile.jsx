import { Text, View, TextInput, Pressable } from "react-native";
import React from "react";
const SettingProfile = () => {
  return (
    <View className="bg-white w-full h-full">
      <View className="mx-5 my-10">
        <Text>Username</Text>
        <TextInput
          placeholder="Username"
          className="border border-slate-900 p-2 rounded-lg mt-2"
        />
      </View>
      <View className="m-5 mb-10">
        <Text>Email</Text>
        <TextInput
          placeholder="johndoe@gmail.com"
          className="border border-slate-900 p-2 rounded-lg mt-2"
        />
      </View>
      <Pressable className="bg-black rounded-lg mx-5">
        <Text className="text-white p-4 text-center font-semibold text-lg">
          Change Profile
        </Text>
      </Pressable>
    </View>
  );
};

export default SettingProfile;
