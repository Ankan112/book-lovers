import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import userReducer from "./features/user/userSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";
import currentlyReadSlice from "./features/currenltyRead/currentlyReadSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    currentlyRead: currentlyReadSlice,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
