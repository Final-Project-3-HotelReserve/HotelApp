import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setBooking } from '../../redux/feature/hotel/bookingSlice'
import { selectHotel } from '../../redux/feature/hotel/hotelSlice'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

const Booking = () => {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('johndoe@gmail.com')
  const [phoneNumber, setPhoneNumber] = useState('+62 235423278')

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const hotel = useSelector(selectHotel)
  console.log(hotel)

  const handleBooking = () => {
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Phone Number:', phoneNumber)

    dispatch(setBooking({ ...hotel, bookingId: +new Date() }))
    navigation.navigate('History')
    navigation.popToTop()
  }

  return (
    <View className="mt-5">
      <Text className="text-lg font-semibold mb-3 text-center">
        Contact Information
      </Text>
      <View className="items-center">
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          keyboardType="phone-pad"
        />
      </View>

      <Text className="text-lg font-semibold mb-3 text-center">
        Price Summary
      </Text>
      <View
        key={hotel.id}
        className=" rounded-xl mx-5 my-2 overflow-hidden shadow-2xl border mb-5"
      >
        <Image source={hotel.image} className="w-full h-40" />
        <View className="flex flex-row px-3 py-3 justify-between">
          <View className=" flex flex-col gap-1">
            <Text className="text-lg font-semibold">{hotel.name}</Text>
            <View className="flex flex-row ">
              <FontAwesome name="star" size={20} color="black" />
              <Text className="ml-2 font-semibold">{hotel.rate}</Text>
            </View>
            <View className="flex flex-row">
              <Ionicons name="location-outline" size={15} color="black" />
              <Text className="ml-2 ">{hotel.location}</Text>
            </View>
          </View>
          <View className="flex flex-col">
            <Text className="text-2xl font-semibold">{'$ ' + hotel.price}</Text>
            <Text className="text-sm font-semibold">/per night</Text>
          </View>
        </View>
        <View className="flex flex-col px-3 py-3 border-t-2">
          <Text className="text-lg font-semibold">3 days, 1 Room, 2 Guest</Text>
          <View className="flex flex-row justify-between">
            <Text className="text-lg font-semibold">Total</Text>
            <Text className="text-lg font-semibold">
              {'$ ' + hotel.price * 3}
            </Text>
          </View>
        </View>
      </View>
      <View className="m-5">
        <Button title="Checkout" onPress={handleBooking} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
})

export default Booking
