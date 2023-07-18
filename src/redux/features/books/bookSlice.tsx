import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

type IBook = {
  genre: boolean;
  publicationYear: number;
};

const initialState: IBook = {
  genre: true,
  publicationYear: 2023,
};

const booksSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.genre = !state.genre;
    },
    // setPublicationYear: (state, action: PayloadAction) => {
    //   state.publicationYear = action.payload;
    // },
  },
});
export const { toggleState } = booksSlice.actions;
export default booksSlice.reducer;
