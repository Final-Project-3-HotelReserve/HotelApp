import { Button, Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectHotel } from '../../redux/feature/hotel/hotelSlice'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const Detail = () => {
  const navigation = useNavigation()
  const hotel = useSelector(selectHotel)
  console.log(hotel)
  const handleBooking = () => {
    navigation.navigate('Booking Page')
  }
  return (
    <View>
      <View key={hotel.id}>
        <Image source={hotel.image} className="w-full h-52" />
        <View className="flex flex-row p-4 justify-between">
          <View className=" flex flex-col gap-1">
            <Text className="text-lg font-semibold">{hotel.name}</Text>
            <View className="flex flex-row">
              <Ionicons name="location-outline" size={15} color="black" />
              <Text className="ml-2 ">{hotel.location}</Text>
            </View>
            <View className="flex flex-row ">
              <FontAwesome name="star" size={20} color="black" />
              <Text className="ml-2 font-semibold">{hotel.rate}</Text>
            </View>
          </View>
          <View className="flex flex-col">
            <Text className="text-2xl font-semibold">{'$ ' + hotel.price}</Text>
            <Text className="text-sm font-semibold">/per night</Text>
          </View>
        </View>
        <View className="m-4 justify-between">
          <Text className="text-lg font-semibold mb-4">About</Text>
          <Text className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </View>
        <View className="mb-2 justify-between">
          <Text className="text-lg font-semibold m-4">Facilities</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {hotel.facilities.map((item, idx) => (
              <View
                key={idx}
                className="rounded-lg border ml-4 p-3 px-7 items-center"
              >
                <Ionicons name={item.icon} size={35} color="black" />
                <Text className="text-sm font-bold">{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View className="m-5">
        <Button onPress={handleBooking} title="Book this Hotel" />
      </View>
    </View>
  )
}

export default Detail
