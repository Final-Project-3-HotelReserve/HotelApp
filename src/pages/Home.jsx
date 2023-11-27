import { Text, View, ScrollView } from 'react-native'
import React from 'react'
import TopPlace from '../components/TopPlace'
import PopulerPlace from '../components/PopulerPlace'
import { StatusBar } from 'expo-status-bar'
import SearchBox from '../components/SearchBox'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()

  const handleSearch = () => {
    navigation.navigate('Search Page')
  }

  return (
    <ScrollView className=" bg-white w-full h-full">
      <StatusBar backgroundColor="#0f172a" barStyle="dark-content" />
      <View className="my-5 bg-slate-900  p-4">
        <Text className="text-white text-center text-2xl font-bold">
          Hotel App
        </Text>
      </View>

      <SearchBox
        title="Find your dream trip here!"
        handleSearch={handleSearch}
      />
      <TopPlace />
      <PopulerPlace />
    </ScrollView>
  )
}

export default Home
