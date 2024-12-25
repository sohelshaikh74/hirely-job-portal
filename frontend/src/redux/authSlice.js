import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    allAppliedJobs: [],
  },
  reducers: {
    // actions
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },

    //adding
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
  },
});
export const { setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
