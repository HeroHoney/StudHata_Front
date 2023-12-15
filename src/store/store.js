import { configureStore } from "@reduxjs/toolkit";
import housingSlice from "./features/housing/housingSlice";
import announcementSlice from "./features/announcement/announcementSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    housing: housingSlice,
    announcement: announcementSlice,
    user:userSlice
  },
});
