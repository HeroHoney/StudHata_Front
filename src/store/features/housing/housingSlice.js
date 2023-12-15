import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance} from "../../../config/config";

const initialState = {
  housings: [],
  isLoading: false,
};

export const getAllHousing = createAsyncThunk(
  "housing/getAllHousing",
  async () => {
    try {
      const res = await axiosInstance.get("/housing/public/all");
      return res.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

const housingSlice = createSlice({
  name: "housing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllHousing.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllHousing.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.housings = payload;
        state.success = payload.success;
      })
      .addCase(getAllHousing.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = housingSlice.actions;

export default housingSlice.reducer;
