// import { createSlice } from "@reduxjs/toolkit";

// const jobSlice = createSlice({
//   name: "job",
//   initialState: {
//     allJobs: [],
//     allAdminJobs: [],
//     singleJob: null,
//     searchJobByText: "",
//     allAppliedJobs: [],
//     searchedQuery: "",
//   },
//   reducers: {
//     // actions
//     setAllJobs: (state, action) => {
//       state.allJobs = action.payload;
//     },
//     setSingleJob: (state, action) => {
//       state.singleJob = action.payload;
//     },
//     setAllAdminJobs: (state, action) => {
//       state.allAdminJobs = action.payload;
//     },
//     setSearchJobByText: (state, action) => {
//       state.searchJobByText = action.payload;
//     },
//     setAllAppliedJobs: (state, action) => {
//       state.allAppliedJobs = action.payload;
//     },
//     setSearchedQuery: (state, action) => {
//       state.searchedQuery = action.payload;
//     },
//   },
// });
// export const {
//   setAllJobs,
//   setSingleJob,
//   setAllAdminJobs,
//   setSearchJobByText,
//   setAllAppliedJobs,
//   setSearchedQuery,
// } = jobSlice.actions;
// export default jobSlice.reducer;

//latest code
// jobSlice.js
import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    allAdminJobs: [],
    singleJob: null,
    searchJobByText: "",
    allAppliedJobs: [],
    searchedQuery: "",
    filters: {
      location: "",
      industry: "",
      salary: "",
    },
    filteredJobs: [], // This will store the filtered job list
  },
  reducers: {
    // actions
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
      state.filteredJobs = action.payload; // Initially, no filters applied
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
    setSearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },
    setFilter: (state, action) => {
      const { filterType, value } = action.payload;
      state.filters[filterType] = value;
    },
    filterJobs: (state) => {
      const { searchedQuery, filters, allJobs } = state;

      // Filter based on search query (title, description, location)
      let filtered = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });

      // Apply additional filters based on selected values
      if (filters.location) {
        filtered = filtered.filter((job) =>
          job.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }

      if (filters.industry) {
        filtered = filtered.filter((job) =>
          job.industry.toLowerCase().includes(filters.industry.toLowerCase())
        );
      }

      if (filters.salary) {
        filtered = filtered.filter((job) =>
          job.salary.toLowerCase().includes(filters.salary.toLowerCase())
        );
      }

      // Update the filtered jobs state
      state.filteredJobs = filtered;
    },
  },
});

export const {
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setSearchJobByText,
  setAllAppliedJobs,
  setSearchedQuery,
  setFilter,
  filterJobs,
} = jobSlice.actions;

export default jobSlice.reducer;
