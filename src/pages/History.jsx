import { Text, View, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const History = () => {
  const bookingHotel = useSelector((state) => state.hotels.bookingHotels);

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
            <Text className="font-semibold text-lg">{bookingHotel.length}</Text>
          </View>
          <View className="w-1/2 border border-black rounded-br-lg flex items-center">
            <Text className="text-[16px] font-semibold">Favorite</Text>
            <Text className="font-semibold text-lg">0</Text>
          </View>
        </View>
      </View>
      <ScrollView className="mx-5">
        {bookingHotel.map((booked, idx) => (
          <View
            key={idx}
            className="bg-white border border-black rounded-lg flex flex-row justify-between p-4 mt-3"
          >
            <View>
              <Text className="font-semibold">{booked.hotel.name}</Text>
              <View>
                <Text>
                  <Ionicons name="location-outline" size={17} color="black" />
                  {booked.hotel.location.address.cityName},{" "}
                  {booked.hotel.location.address.countryName}
                </Text>
              </View>
              <View className="flex flex-row gap-1">
                <Ionicons name="star" size={20} color="#F4CE14" />
                <Text>{booked.hotel.starRating} / 5</Text>
              </View>
            </View>
            <View className="flex justify-center items-center">
              <Text className="text-green-500 font-semibold">
                $ {booked.price}
              </Text>
              <Text>/per night</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default History;
