import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IBookData {
  searchData: string;
  setFilterData: string
}

const initialState: IBookData = {
  searchData: "",
  setFilterData: "",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setSearchData: (state, action: PayloadAction<string>) => {
      if (action.payload === '') {
        state.searchData = '';
      } else {
        state.searchData = action.payload;
      }
    },
    setFilterData: (state, action: PayloadAction<string>) => {
      if (action.payload === '') {
        state.setFilterData = '';
      } else {
        state.setFilterData = action.payload;
      }
    },
  },
});

export const { setSearchData, setFilterData } = bookSlice.actions;

export default bookSlice.reducer;
