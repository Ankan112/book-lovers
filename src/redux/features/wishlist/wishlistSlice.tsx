import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/commonTypes";
import type { PayloadAction } from "@reduxjs/toolkit";

type IWishlist = {
  wishlist: IBook[];
};

const initialState: IWishlist = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBook>) => {
      const existing = state.wishlist.find(
        (book) => book._id === action.payload._id
      );
      if (existing) {
        state.wishlist.pop();
      } else {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<IBook>) => {
      state.wishlist = state.wishlist.filter(
        (book) => book._id !== action.payload._id
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
