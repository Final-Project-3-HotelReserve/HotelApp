import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    name: '',
    email: '',
  },
  isLogin: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = initialState.user
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload
    },
  },
})

export const { clearUser, setUser, setIsLogin } = userSlice.actions

export default userSlice.reducer
