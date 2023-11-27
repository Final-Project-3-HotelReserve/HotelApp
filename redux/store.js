import { configureStore } from '@reduxjs/toolkit'
import bookingReducer from './feature/hotel/bookingSlice'
import hotelReducer from './feature/hotel/hotelSlice'

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    booking: bookingReducer,
  },
})

export default store
