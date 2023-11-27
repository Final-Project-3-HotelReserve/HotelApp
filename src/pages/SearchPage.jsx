import { View, ScrollView } from 'react-native'
import React from 'react'
import { ListHotel } from '../utils'
import SearchBox from '../components/SearchBox'
import CardHotel from '../components/CardHotel'

const SearchPage = () => {
  return (
    <View className="container bg-white w-full h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox title="Search Result" />
        {ListHotel.map((item, idx) => (
          <CardHotel key={idx} item={item} />
        ))}
      </ScrollView>
    </View>
  )
}

export default SearchPage
