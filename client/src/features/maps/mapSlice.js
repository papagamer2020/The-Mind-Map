import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mapService from "./mapService";

const initialState = {
  maps: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new map
export const createmap = createAsyncThunk(
  "maps/create",
  async (mapData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await mapService.createmap(mapData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user maps
export const getmaps = createAsyncThunk("maps/getAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await mapService.getmaps(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete user map
export const deletemap = createAsyncThunk(
  "maps/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await mapService.deletemap(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createmap.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createmap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.maps.push(action.payload);
      })
      .addCase(createmap.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getmaps.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getmaps.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.maps = action.payload;
      })
      .addCase(getmaps.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletemap.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletemap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.maps = state.maps.filter((map) => map._id !== action.payload.id);
      })
      .addCase(deletemap.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = mapSlice.actions;
export default mapSlice.reducer;
