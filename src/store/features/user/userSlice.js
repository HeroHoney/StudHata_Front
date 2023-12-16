import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accessToken: "",
    isAuth: false
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
    openAuth: (state) =>{
      state.isAuth = true;
    },
    closeAuth: (state) =>{
      state.isAuth = false;
    }
  }
});

export const {saveUserInfo,deleteUserInfo,openAuth,closeAuth} = userSlice.actions

export default userSlice.reducer