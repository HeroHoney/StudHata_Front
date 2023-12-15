import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance} from "../../../config/config";

const initialState = {
  announcements: [],
  isLoading: false,
};

export const getAllAnnouncements = createAsyncThunk(
  "announcement/getAllAnnouncements",
  async () => {
    try {
      const res = await axiosInstance.get("/announcement/public/all");
      return res.data;
    } catch (error) {
      return console.log(error);
    }
  }
);

const announcementSlice = createSlice({
  name: "announcement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAnnouncements.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAnnouncements.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.announcements = payload;
        state.success = payload.success;
      })
      .addCase(getAllAnnouncements.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = announcementSlice.actions;

export default announcementSlice.reducer;
