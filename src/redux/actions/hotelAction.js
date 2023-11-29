import axios from "axios";

const API_KEY = "9cf609bd10mshbbbebce1e2179c0p18be97jsn372f9a150d24";
const API_KEY1 = "80f3bdb4a9msh611c8be643b17fep16c83bjsn1765fceea1df";
const API_KEY2 = "23d51cd721mshfe42ad55e054f2cp14a9fejsnfd34bbbdacb6";
const BASE_URL = "https://priceline-com-provider.p.rapidapi.com";

export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});

export const setHotelDetails = (details) => ({
  type: "SET_HOTEL_DETAILS",
  payload: details,
});

export const setBookingHotel = (bookingHotel) => ({
  type: "SET_BOOKING_HOTEL",
  payload: bookingHotel,
});

export const clearBookingHotel = (bookingHotel) => ({
  type: "CLEAR_BOOKING_HOTEL",
  payload: bookingHotel,
});

export const searchHotels = (location, checkInDate, checkOutDate) => {
  return async (dispatch) => {
    try {
      // Call "hotels/location" API to get the location_id
      const locationResponse = await axios.get(
        `${BASE_URL}/v1/hotels/locations`,
        {
          params: {
            name: location,
            search_type: "ALL",
          },
          headers: {
            "X-RapidAPI-Key": API_KEY1,
            "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
          },
        }
      );
      const locationId = locationResponse.data[0].id;
      if (!locationId) {
        console.error("Location ID not found in the response");
        return;
      }

      // Call "hotels/search" API using the obtained location_id
      const response = await axios.get(`${BASE_URL}/v1/hotels/search`, {
        params: {
          location_id: locationId,
          date_checkin: checkInDate.toISOString().split("T")[0],
          date_checkout: checkOutDate.toISOString().split("T")[0],
          sort_order: "STAR",
        },
        headers: {
          "X-RapidAPI-Key": API_KEY1,
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      });

      //   console.log("API Response:", response.data);
      dispatch(setSearchResults(response.data));
    } catch (error) {
      console.error("Error searching hotels:", error);
    }
  };
};

export const fetchHotelDetails = (hotelId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/v1/hotels/details`, {
        params: {
          hotel_id: hotelId,
        },
        headers: {
          "X-RapidAPI-Key": API_KEY1,
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      });

      dispatch(setHotelDetails(response.data));
    } catch (error) {
      console.error("Error fetching hotel details:", error);
    }
  };
};
