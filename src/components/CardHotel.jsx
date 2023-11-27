import React from 'react'
import { Text, View, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { detailHotel } from '../../redux/feature/hotel/hotelSlice'

const CardHotel = ({ item }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleClick = (item) => {
    console.log(item)
    dispatch(detailHotel(item))
    navigation.navigate('Detail Page')
  }

  return (
    <View
      key={item.id}
      className=" rounded-xl mx-5 my-2 overflow-hidden border"
      onTouchEnd={() => handleClick(item)}
    >
      <View className="absolute right-3 top-3 z-10">
        <FontAwesome
          name="heart"
          size={24}
          color={item.favorite ? 'red' : 'white'}
        />
      </View>
      <Image source={item.image} className="w-full h-32" />
      <View className="flex flex-row px-3 py-3 justify-between">
        <View className=" flex flex-col gap-1">
          <Text className="text-lg font-semibold">{item.name}</Text>
          <View className="flex flex-row ">
            <FontAwesome name="star" size={20} color="black" />
            <Text className="ml-2 font-semibold">{item.rate}</Text>
          </View>
          <View className="flex flex-row">
            <Ionicons name="location-outline" size={15} color="black" />
            <Text className="ml-2 ">{item.location}</Text>
          </View>
        </View>
        <View className="flex flex-col">
          <Text className="text-2xl font-semibold">{'$ ' + item.price}</Text>
          <Text className="text-sm font-semibold">/per night</Text>
        </View>
      </View>
    </View>
  )
}

export default CardHotel
