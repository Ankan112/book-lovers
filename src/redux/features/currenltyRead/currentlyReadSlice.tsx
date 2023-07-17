import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/commonTypes";
import type { PayloadAction } from "@reduxjs/toolkit";

type ICurrentlyRead = {
  currentlyRead: IBook[];
};

const initialState: ICurrentlyRead = {
  currentlyRead: [],
};

const currentlyReadSlice = createSlice({
  name: "currentlyRead",
  initialState,
  reducers: {
    addToCurrentlyRead: (state, action: PayloadAction<IBook>) => {
      const existing = state.currentlyRead.find(
        (book) => book._id === action.payload._id
      );
      if (existing) {
        state.currentlyRead.pop();
      } else {
        state.currentlyRead.push(action.payload);
      }
    },
    removeFromCurrentlyRead: (state, action: PayloadAction<IBook>) => {
      state.currentlyRead = state.currentlyRead.filter(
        (book) => book._id !== action.payload._id
      );
    },
  },
});

export const { addToCurrentlyRead, removeFromCurrentlyRead } =
  currentlyReadSlice.actions;

export default currentlyReadSlice.reducer;
