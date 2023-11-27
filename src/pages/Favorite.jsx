import { View } from 'react-native'
import React from 'react'
import CardHotel from '../components/CardHotel'
const Favorite = () => {
  const favHotels = [
    {
      id: 2,
      name: 'Hotel Dreams',
      image: require('../../assets/image/prancis.jpg'),
      rate: 4.5,
      price: 250,
      location: 'France',
      favorite: true,
      facilities: [
        {
          name: 'Wifi',
          icon: 'wifi',
        },
        {
          name: 'Food',
          icon: 'fast-food-outline',
        },
        {
          name: 'Parking',
          icon: 'car-outline',
        },
        {
          name: 'Bicycle',
          icon: 'bicycle',
        },
        {
          name: 'Gym',
          icon: 'barbell-outline',
        },
      ],
    },
  ]
  return (
    <View className="container mx-auto bg-white w-full h-full">
      {favHotels.map((item, idx) => (
        <CardHotel key={idx} item={item} />
      ))}
    </View>
  )
}

export default Favorite
