import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-lovers-backend.vercel.app/api/v1",
  }),
  tagTypes: ["comments", "book", "delete", "update"],
  endpoints: () => ({}),
});
