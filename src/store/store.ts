import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./shop/shop";
import { shopService } from "./services/shop";

const reducer = combineReducers({
  karizma: counterReducer,
  [shopService.reducerPath]: shopService.reducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false })?.concat(
      shopService.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
