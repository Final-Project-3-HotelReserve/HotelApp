import { Alert, Pressable, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookingHotel } from "../redux/actions/hotelAction";
import { Ionicons } from "@expo/vector-icons";

const Booking = ({ navigation, route }) => {
  const { hotel, hotelId, hotelName, hotelCity, hotelCountry, price } =
    route.params;
  const checkInDate = new Date(route.params.checkInDate);
  const checkOutDate = new Date(route.params.checkOutDate);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [night, setNight] = useState(0);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    if (!name || !email || !phone) {
      alert("Fill the name, email and phone number correctly");
      return;
    }
    const bookingHotel = {
      hotel,
      price,
    };
    dispatch(setBookingHotel(bookingHotel));
    navigation.navigate("History");
  };

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const nightDiff = Math.floor(
        (checkOutDate - checkInDate) / (24 * 60 * 60 * 1000)
      );
      setNight(nightDiff);
    }
  }, [checkInDate, checkOutDate]);

  const payment = () => {
    return price * night;
  };
  return (
    <View className="bg-slate-50 w-full h-full">
      <View className="mx-5 my-2 bg-white shadow shadow-black rounded-md p-2">
        <Text className="text-lg font-bold">CONTACT INFORMATIONS</Text>
        <View className=" mt-3">
          <Text className="text-[16px] font-semibold mb-1">Full Name</Text>
          <TextInput
            placeholder="John Doe"
            value={name}
            onChangeText={(text) => setName(text)}
            className="border border-black p-1 pl-2 rounded-lg"
          />
        </View>
        <View className=" mt-3">
          <Text className="text-[16px] font-semibold mb-1">Email</Text>
          <TextInput
            placeholder="JohnDoe@gmail.com"
            value={email}
            onChangeText={(mail) => setEmail(mail)}
            className="border border-black p-1 pl-2 rounded-lg"
          />
        </View>
        <View className=" mt-3">
          <Text className="text-[16px] font-semibold mb-1">Phone Number</Text>
          <TextInput
            placeholder="0129229019"
            value={phone}
            onChangeText={(num) => setPhone(num)}
            keyboardType="numeric"
            className="border border-black p-1 pl-2 rounded-lg"
          />
        </View>
      </View>
      <View className="mx-5 my-2 bg-white shadow shadow-black rounded-md p-2">
        <Text className="text-lg font-bold">PRICE SUMMARY</Text>
        <View className="mt-3">
          <Text className="font-semibold">{hotelName}</Text>
          <View className="flex flex-row">
            <Ionicons name="location-outline" size={17} color="black" />
            <Text>
              {hotelCity}, {hotelCountry}
            </Text>
          </View>
          <Text>$ {price} /night</Text>
        </View>
        <View className="mt-5">
          <Text className="mt-2">{night} days</Text>
        </View>
        <View className="border-t-2 mt-2">
          <View className="flex flex-row justify-between mt-2">
            <Text className="text-lg">Total :</Text>
            <Text className="text-lg">$ {payment()}</Text>
          </View>
        </View>
      </View>
      <Pressable
        onPress={handleCheckout}
        className="mx-5 my-3 bg-red-500 p-2 rounded-full"
      >
        <Text className="text-center text-lg font-bold">Checkout</Text>
      </Pressable>
    </View>
  );
};

export default Booking;
