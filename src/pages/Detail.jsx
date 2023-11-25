import { Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Detail = () => {
  const navigation = useNavigation();
  const handleBooking = () => {
    navigation.navigate("Booking Page");
  };
  return (
    <View>
      <Text>Detal Page</Text>
      <Text onPress={handleBooking}>Go to Booking Page?</Text>
    </View>
  );
};

export default Detail;
