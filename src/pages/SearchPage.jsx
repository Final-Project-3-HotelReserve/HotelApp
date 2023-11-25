import { Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchPage = () => {
  const navigation = useNavigation();
  const handleDetail = () => {
    navigation.navigate("Detail Page");
  };
  return (
    <View>
      <Text>Search Page</Text>
      <Text onPress={handleDetail}>Go to Detail Page?</Text>
    </View>
  );
};

export default SearchPage;
