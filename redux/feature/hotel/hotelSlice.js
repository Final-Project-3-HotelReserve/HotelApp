import { createSlice } from '@reduxjs/toolkit'

const initialState = { hotel: null }

const userSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    detailHotel: (state, action) => {
      state.hotel = action.payload
    },
  },
})

export const { detailHotel } = userSlice.actions

export const selectHotel = (state) => state.hotel.hotel

export default userSlice.reducer
