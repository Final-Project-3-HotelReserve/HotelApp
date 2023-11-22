import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { CitiesIndo } from "../utils/index";
const TopPlace = () => {
  return (
    <View className="p-5">
      <Text className="text-lg font-bold my-5">
        Popular Cities in Indonesia
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CitiesIndo.map((item) => (
          <View
            key={item.id}
            className="mx-2 mb-2 rounded-lg overflow-hidden shadow-xl shadow-black"
          >
            <Image source={item.image} className="w-48 h-36" />
            <View className="absolute p-1 bottom-0 left-0 right-0 bg-slate-100">
              <Text className="text-sm font-bold mx-2 text-slate-950">
                {item.location}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopPlace;
