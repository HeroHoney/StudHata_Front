import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/config";

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
      console.log(error);
      throw error;
    }
  }
);


export const createHousing = createAsyncThunk(
  "housing/createHousing",
  async (newHousingData) => {
    try {
      const res = await axiosInstance.post("/housing/createHousing", newHousingData);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error; 
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
      })
      .addCase(createHousing.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createHousing.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(createHousing.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = housingSlice.actions;

export default housingSlice.reducer;
