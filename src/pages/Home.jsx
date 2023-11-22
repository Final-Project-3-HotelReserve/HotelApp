import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import TopPlace from "../components/TopPlace";
import PopulerPlace from "../components/PopulerPlace";
import DateTimePicker from "@react-native-community/datetimepicker";
const Home = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [showCheckInDatePicker, setShowCheckInDatePicker] = useState(false);
  const [showCheckOutDatePicker, setShowCheckOutDatePicker] = useState(false);

  const handleCheckInDateChange = (event, selectedDate) => {
    setShowCheckInDatePicker(false);
    if (selectedDate) {
      setCheckInDate(selectedDate);
    }
  };

  const handleCheckOutDateChange = (event, selectedDate) => {
    setShowCheckOutDatePicker(false);
    if (selectedDate) {
      setCheckOutDate(selectedDate);
    }
  };
  return (
    <ScrollView className=" bg-white w-full h-full">
      <View className="my-5 bg-slate-900  p-4">
        <Text className="text-white text-center text-2xl font-bold">
          Hotel App
        </Text>
      </View>

      <View className="container mx-auto border border-slate-400 p-5">
        <Text className="text-center mb-2 text-xl font-bold">
          Find your dream trip here!
        </Text>
        <View className="mb-4">
          <TextInput
            className="border p-2 pl-3 border-slate-500 rounded-lg"
            placeholder="Search your destination here"
          />
        </View>
        <View className="flex flex-row gap-5 items-center">
          <View className="flex-row">
            <FontAwesome name="calendar" size={20} color="black" />
            <Pressable
              onPress={() => {
                setShowCheckInDatePicker(true);
              }}
            >
              <Text className="ml-2 p-1 rounded-md border border-slate-500 w-[138px]">
                {checkInDate.toLocaleDateString()}
              </Text>
            </Pressable>
          </View>
          <View className="flex-row">
            <FontAwesome name="calendar" size={20} color="black" />
            <Pressable
              onPress={() => {
                setShowCheckOutDatePicker(true);
              }}
            >
              <Text className="ml-2 p-1 rounded-md border border-slate-500 w-[138px]">
                {checkOutDate.toLocaleDateString()}
              </Text>
            </Pressable>
          </View>
          {showCheckInDatePicker && (
            <DateTimePicker
              value={checkInDate}
              mode="date"
              display="default"
              onChange={handleCheckInDateChange}
            />
          )}
          {showCheckOutDatePicker && (
            <DateTimePicker
              value={checkOutDate}
              mode="date"
              display="default"
              onChange={handleCheckOutDateChange}
            />
          )}
        </View>
        <Pressable className="mt-5 border border-black p-2 rounded-full bg-black">
          <Text className="text-center text-[16px] text-white font-semibold">
            Search
          </Text>
        </Pressable>
      </View>
      <TopPlace />
      <PopulerPlace />
    </ScrollView>
  );
};

export default Home;
