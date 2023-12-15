import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accessToken: ""
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserInfo: (state, { payload }) => {
        state.accessToken = payload.accessToken
      },
    deleteUserInfo: (state) => {
        state.accessToken = "";
      },
  }
});

export const {saveUserInfo,deleteUserInfo} = userSlice.actions

export default userSlice.reducer