import { Text, View, Image } from "react-native";
import React from "react";

const History = () => {
  return (
    <View className="w-full h-full bg-white border-t-2 border">
      <View className="border border-black m-5 rounded-lg mb-10">
        <View className="flex justify-center items-center p-5">
          <View className="w-20 h-20 rounded-full overflow-hidden border border-black">
            <Image
              source={{
                uri: "https://as1.ftcdn.net/v2/jpg/02/89/49/22/1000_F_289492257_augSIlCtit7AQhCZQwYPF1X1XgtwwJkN.jpg",
              }}
              className="w-20 h-20"
            />
          </View>
          <Text className="mt-3 font-semibold text-xl">John Doe</Text>
          <Text className="text-lg text-slate-500">johndoe@gmail.com</Text>
        </View>
        <View className="flex flex-row">
          <View className="w-1/2 border border-black rounded-bl-lg flex items-center">
            <Text className="text-[16px] font-semibold">Booked</Text>
            <Text className="font-semibold text-lg">0</Text>
          </View>
          <View className="w-1/2 border border-black rounded-br-lg flex items-center">
            <Text className="text-[16px] font-semibold">Favorite</Text>
            <Text className="font-semibold text-lg">0</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default History;
