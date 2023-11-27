import { createSlice } from '@reduxjs/toolkit'

const initialState = { booking: [] }

const userSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.booking = [...state.booking, action.payload]
    },
    deleteBooking: (state) => {
      state.booking = []
    },
  },
})

export const { setBooking, deleteBooking } = userSlice.actions

export const selectBooking = (state) => state.booking.booking

export default userSlice.reducer
