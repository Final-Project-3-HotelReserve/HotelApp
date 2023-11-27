import { Text, View, Image, ScrollView, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import {
  deleteBooking,
  selectBooking,
} from '../../redux/feature/hotel/bookingSlice'

const History = () => {
  const booking = useSelector(selectBooking)

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteBooking())
  }

  return (
    <View className="w-full h-full bg-white border">
      <View className="border border-black m-5 rounded-lg ">
        <View className="flex flex-row justify-around items-center m-5">
          <View className="w-20 h-20 rounded-full overflow-hidden border border-black">
            <Image
              source={{
                uri: 'https://as1.ftcdn.net/v2/jpg/02/89/49/22/1000_F_289492257_augSIlCtit7AQhCZQwYPF1X1XgtwwJkN.jpg',
              }}
              className="w-20 h-20"
            />
          </View>
          <View className="flex items-center">
            <Text className="font-semibold text-2xl">John Doe</Text>
            <Text className="text-sm text-slate-500">johndoe@gmail.com</Text>
          </View>
        </View>
        <View className="flex flex-row justify-around mb-5">
          <View className="flex items-center">
            <Text className="text-[16px] font-semibold">Booked</Text>
            <Text className="font-semibold text-lg">{booking.length}</Text>
          </View>
          <View className="flex items-center">
            <Text className="text-[16px] font-semibold">Favorite</Text>
            <Text className="font-semibold text-lg">1</Text>
          </View>
        </View>
      </View>
      <Text className="text-lg font-semibold mx-5 mb-5">Booked History</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {booking.map((item) => (
          <View
            key={item.bookingId}
            className="flex flex-row mx-5 my-1 p-3 rounded-lg border justify-between"
          >
            <View className="flex flex-row">
              <Image source={item.image} className="w-24 h-24 rounded-lg" />
              <View className="p-1 flex flex-col justify-between ml-2">
                <Text className="text-lg font-semibold">{item.name}</Text>
                <View className="flex flex-row">
                  <Ionicons name="location-outline" size={15} color="black" />
                  <Text className="ml-2">{item.location}</Text>
                </View>
                <View className="flex flex-row">
                  <FontAwesome name="star" size={20} color="black" />
                  <Text className="font-semibold ml-2">{item.rate}</Text>
                </View>
              </View>
            </View>
            <View className="flex flex-col">
              <Text className="text-lg font-semibold">{'$ ' + item.price}</Text>
              <Text className="text-sm font-semibold">/per night</Text>
            </View>
          </View>
        ))}
        {booking.length > 0 ? (
          <View className="mx-5 my-5 ">
            <Button onPress={handleDelete} title="Delete History" />
          </View>
        ) : (
          <Text className="text-center">Empty Booked</Text>
        )}
      </ScrollView>
    </View>
  )
}

export default History
