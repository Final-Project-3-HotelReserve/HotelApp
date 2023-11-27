import { Text, View, TextInput, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useNavigation } from '@react-navigation/native'

const SearchBox = ({ title, handleSearch }) => {
  const [checkInDate, setCheckInDate] = useState(new Date())
  const [checkOutDate, setCheckOutDate] = useState(new Date())
  const [showCheckInDate, setShowCheckInDate] = useState(false)
  const [showCheckOutDate, setShowCheckOutDate] = useState(false)

  const handleCheckInDateChange = (event, selectedDate) => {
    setShowCheckInDate(false)
    if (selectedDate) {
      setCheckInDate(selectedDate)
    }
  }

  const handleCheckOutDateChange = (event, selectedDate) => {
    setShowCheckOutDate(false)
    if (selectedDate) {
      setCheckOutDate(selectedDate)
    }
  }

  return (
    <View className="m-5 border border-black p-5 rounded-lg">
      <Text className="text-center mb-2 text-xl font-bold">{title}</Text>
      <View className="mb-4">
        <TextInput
          className="border p-2 pl-3 border-slate-500 rounded-lg"
          placeholder="Search your destination here"
        />
      </View>
      <View className="flex flex-row justify-center gap-20">
        <Text className="mb-1 font-semibold">Checkin Date</Text>
        <Text className="mb-1 font-semibold">Checkout Date</Text>
      </View>
      <View className="flex flex-row gap-5 items-center">
        <View className="flex-row">
          <FontAwesome name="calendar" size={20} color="black" />
          <Pressable
            onPress={() => {
              setShowCheckInDate(true)
            }}
          >
            <Text className="ml-2 p-1 pl-3 rounded-md border border-slate-500 w-28">
              {checkInDate.toLocaleDateString()}
            </Text>
          </Pressable>
        </View>
        <View className="flex-row">
          <FontAwesome name="calendar" size={20} color="black" />
          <Pressable
            onPress={() => {
              setShowCheckOutDate(true)
            }}
          >
            <Text className="ml-2 p-1 pl-3 rounded-md border border-slate-500 w-28">
              {checkOutDate.toLocaleDateString()}
            </Text>
          </Pressable>
        </View>
        {showCheckInDate && (
          <DateTimePicker
            value={checkInDate}
            mode="date"
            display="default"
            onChange={handleCheckInDateChange}
          />
        )}
        {showCheckOutDate && (
          <DateTimePicker
            value={checkOutDate}
            mode="date"
            display="default"
            onChange={handleCheckOutDateChange}
          />
        )}
      </View>
      <Pressable
        onPress={handleSearch}
        className="mt-5 border border-black p-2 rounded-full bg-black"
      >
        <Text className="text-center text-[16px] text-white font-semibold">
          Search
        </Text>
      </Pressable>
    </View>
  )
}

export default SearchBox
