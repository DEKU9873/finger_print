import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useGetData } from "../hooks/useGetData";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  singleReport: [],
  committeeMember: [],
};

// Get all reports
export const getAllReports = createAsyncThunk("reports/getAll", async () => {
  const { data } = await useGetData("api/inspection-reports/");
  return data.data;
});

// Get single report
export const getOneReport = createAsyncThunk("reports/getOne", async (id) => {
  const { data } = await useGetData(`api/inspection-reports/${id}`);
  return data.data;
});
// Get CommitteeMember
export const getCommitteeMember = createAsyncThunk("reports/committeeMember", async (id) => {
  const { data } = await useGetData(`api/committee-members/section/${id}/`);
  return data.data;
});

const ReportSlice = createSlice({
  name: "reportsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      // Get all reports
      .addCase(getAllReports.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllReports.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllReports.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Get single report
      .addCase(getOneReport.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneReport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleReport = action.payload;
      })
      .addCase(getOneReport.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Get CommitteeMember
      .addCase(getCommitteeMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCommitteeMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.committeeMember = action.payload;
      })
      .addCase(getCommitteeMember.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const reportsReducer = ReportSlice.reducer;
