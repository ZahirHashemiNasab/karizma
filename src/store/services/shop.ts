import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as allUrl from "../../commons/urls";

let basePath = process.env.REACT_APP_PUBLIC_URL as string;
export const shopService = createApi({
  reducerPath: "shopServices",
  baseQuery: fetchBaseQuery({ baseUrl: basePath }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => allUrl.productUrl,
    }),
    getUsers: build.query({
      query: () => allUrl.userUrl,
    }),
  }),
});

export const { useGetProductsQuery, useGetUsersQuery } = shopService;
