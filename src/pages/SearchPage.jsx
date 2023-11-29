import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelDetails, searchHotels } from "../redux/actions/hotelAction";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const SearchPage = ({ navigation, route }) => {
  const { location } = route.params;
  const checkInDate = new Date(route.params.checkInDate);
  const checkOutDate = new Date(route.params.checkOutDate);
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.hotels.searchResults);
  const [loading, setLoading] = useState(true);

  const handleDetail = (hotel) => {
    dispatch(fetchHotelDetails(hotel.hotelId));
    navigation.navigate("Detail Page", {
      hotel,
      price: hotel.ratesSummary.minPrice,
      checkInDate: checkInDate.toISOString(),
      checkOutDate: checkOutDate.toISOString(),
    });
  };

  useEffect(() => {
    dispatch(searchHotels(location, checkInDate, checkOutDate))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  return (
    <ScrollView className="container mx-auto p-5 bg-white w-full h-full">
      {loading ? (
        <View className="flex justify-center items-center">
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        searchResults &&
        searchResults.hotels &&
        searchResults.hotels.length > 0 &&
        searchResults.hotels.map((result) =>
          result.hotelId ? (
            <Pressable
              key={result.hotelId}
              className="my-3 flex flex-row rounded-lg overflow-hidden bg-slate-100 shadow-md shadow-black"
              onPress={() => handleDetail(result)}
            >
              <View className="absolute left-2 top-2 z-10">
                <FontAwesome name="heart-o" size={24} color="red" />
              </View>
              <Image
                source={
                  result.media && result.media.url
                    ? { uri: result.media.url }
                    : null
                }
                className="w-1/3 h-52"
              />

              <View className="p-1 flex flex-col flex-wrap justify-evenly">
                <View>
                  <Text className="text-lg font-semibold ml-2">
                    {result.name}
                  </Text>
                  <View className="flex flex-row ml-1 mt-1">
                    <Ionicons name="location-outline" size={17} color="black" />
                    {result.location && result.location.address && (
                      <Text className="text-[16px]">
                        {result.location.address.cityName}
                      </Text>
                    )}
                  </View>
                  <View>
                    <Text className="text-lg ml-2 mt-1 font-semibold ">
                      ${result.ratesSummary.minPrice} /night
                    </Text>
                  </View>
                </View>
                <View className="flex flex-row gap-1">
                  <FontAwesome name="star" size={20} color="#F4CE14" />
                  <Text className="font-semibold mr-2">
                    {result.starRating}
                  </Text>
                </View>
              </View>
            </Pressable>
          ) : null
        )
      )}
    </ScrollView>
  );
};

export default SearchPage;
