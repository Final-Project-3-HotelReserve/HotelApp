import { Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Favorite = () => {
  const [favHotels, setFavHotels] = useState([
    {
      id: 1,
      name: "Ayana Hotel",
      image: require("../../assets/image/bali.jpg"),
      location: "Bali",
      rate: 4.8,
      price: "$250",
      isFavorite: false, // Added property to track favorite status
    },
  ]);

  const toggleFavorite = (id) => {
    setFavHotels((prevHotels) =>
      prevHotels.map((hotel) =>
        hotel.id === id ? { ...hotel, isFavorite: !hotel.isFavorite } : hotel
      )
    );
  };

  return (
    <View className="container mx-auto p-5 bg-white w-full h-full">
      {favHotels.map((fav) => (
        <View
          key={fav.id}
          className="bg-slate-100 rounded-t-2xl rounded-b-md overflow-hidden shadow-xl shadow-black relative"
        >
          <Pressable onPress={() => toggleFavorite(fav.id)}>
            <View className="absolute right-3 top-3 z-10">
              <FontAwesome
                name={fav.isFavorite ? "heart" : "heart-o"}
                size={24}
                color={fav.isFavorite ? "red" : "black"}
              />
            </View>
          </Pressable>
          <Image source={fav.image} className="w-full h-52" />
          <View className="p-1 flex flex-row justify-between">
            <View>
              <Text className="text-lg font-semibold ml-2">{fav.name}</Text>
              <View className="flex flex-row ml-1 mt-1">
                <Ionicons name="location-outline" size={17} color="black" />
                <Text className="text-[16px]">{fav.location}</Text>
              </View>
              <Text className="text-lg ml-2 mt-1 font-semibold ">
                {fav.price}/night
              </Text>
            </View>
            <View className="flex flex-row gap-1">
              <FontAwesome name="star" size={20} color="black" />
              <Text className="font-semibold mr-2">{fav.rate}/5</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Favorite;