import { Text, View, Pressable, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelDetails } from "../redux/actions/hotelAction";
import { Ionicons } from "@expo/vector-icons";

const Detail = ({ navigation }) => {
  const route = useRoute();
  const { hotel, price } = route.params;
  const checkInDate = new Date(route.params.checkInDate);
  const checkOutDate = new Date(route.params.checkOutDate);
  const dispatch = useDispatch();
  const hotelDetails = useSelector((state) => state.hotels.hotelDetails);

  useEffect(() => {
    if (hotel.hotelId) {
      dispatch(fetchHotelDetails(hotel.hotelId));
    }
  }, [hotel.hotelId]);

  const handleBooking = () => {
    navigation.navigate("Booking Page", {
      hotel,
      hotelId: hotel.hotelId,
      hotelName: hotel.name,
      hotelCity: hotel.location.address.cityName,
      hotelCountry: hotel.location.address.countryName,
      price,
      checkInDate: checkInDate.toISOString(),
      checkOutDate: checkOutDate.toISOString(),
    });
  };

  return (
    <ScrollView className="px-5 w-full h-full bg-white">
      {hotelDetails &&
        hotelDetails.images &&
        hotelDetails.images.length > 0 && (
          <View className="mt-10">
            <Image source={{ uri: hotelDetails.images[0].imageUrl }} />
            <Text>{hotelDetails.name}</Text>
            <View className="flex flex-row gap-1 mb-2">
              <Ionicons name="location-outline" size={17} color="black" />
              <Text>
                {hotelDetails.location.address.cityName.split(" ").pop()},{" "}
                {hotelDetails.location.address.countryName.split(" ").pop()}
              </Text>
            </View>
            <View className="flex flex-row gap-2">
              <Ionicons name="star" size={20} color="#F4CE14" />
              <Text>{hotelDetails.starRating} / 5</Text>
            </View>
            <Text>$ {price} /night</Text>
          </View>
        )}

      <Pressable
        onPress={handleBooking}
        className="p-2 my-2 rounded-md w-full bg-slate-950"
      >
        <Text className="text-center text-white font-semibold text-lg">
          Book This Hotel
        </Text>
      </Pressable>

      <View className="my-5">
        <Text className="mb-2 text-lg font-semibold">About</Text>
        <Text>{hotelDetails?.description}</Text>
      </View>

      <View className="my-4 bg-red-100 rounded-md shadow-md shadow-black p-2">
        <Text className="mb-2 text-lg font-semibold">Facility</Text>
        <View>
          {hotelDetails?.hotelFeatures?.hotelAmenities?.map((faci, idx) => (
            <View
              key={idx}
              className="rounded-lg w-full flex flex-row gap-3 h-12"
            >
              <Ionicons name="checkmark-outline" size={20} color="#000" />
              <Text className="">{faci.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className="mt-5">
        <Text className="text-lg font-semibold p-2">Reviews</Text>
        {hotelDetails?.guestReviews && hotelDetails.guestReviews.length > 0 ? (
          hotelDetails.guestReviews.map((rev, idx) => (
            <View
              key={idx}
              className="border border-slate-500 rounded-md m-2 p-2"
            >
              <Text>Name: {rev.firstName}</Text>
              <View className="flex flex-row gap-2">
                <Ionicons name="star" size={20} color="#F4CE14" />
                <Text>{parseFloat(rev.overallScore) / 2} / 5</Text>
              </View>
              <Text>
                {rev.reviewTextPositive} {rev.reviewTextNegative}
              </Text>
            </View>
          ))
        ) : (
          <Text className="font-semibold p-2">No Review</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Detail;
