import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpRequest } from "../../httpRequests";
import { PATHDOMAIN } from "../../constants";
import { IOptionsInitialState, ProductInitialState } from "../../types/productTypes";

const initialState: IOptionsInitialState = {
  autos: null,
  options: null,
  status: "",
  errors: null

};


export const fetchOptions = createAsyncThunk(
  "options/fetchOptions",
  async function (_, { dispatch }) {
    try {
     const autosResponse: Response = await httpRequest(`${PATHDOMAIN}/getAutosInfo`, "GET")
     const optionsResponse: Response = await httpRequest(`${PATHDOMAIN}/getOptionsInfo`, "GET")
      
     const autos = await autosResponse.json()
     const options = await optionsResponse.json()
          
     dispatch(setModels(autos))
     dispatch(setOptions(options))
     
     
    } catch (e) {
      console.log(e.message());
    }
  }
);

export const settingsSlice = createSlice({
  name: "options",
  initialState: initialState,
  reducers: {
    setModels(state, action) {
      state.autos = action.payload
    },
    setOptions(state, action) {
      state.options = action.payload
    }
    
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOptions.pending, (state, action) => {
      state.status = 'pending'
    }),
    builder.addCase(fetchOptions.fulfilled, (state, action) => {
      state.status = 'fulfilled'
    }),
    builder.addCase(fetchOptions.rejected, (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
    })
  },
});

export const {setModels, setOptions} = settingsSlice.actions;

export default settingsSlice.reducer;
