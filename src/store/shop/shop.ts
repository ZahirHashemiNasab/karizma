import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { listItem } from "../../types";

export interface CounterState {
  product: any;
  users: any;
  list: listItem[];
}

const initialState: CounterState = {
  product: [],
  users: [],
  list: [],
};

export const counterSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    saveUsers: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
    saveProducts: (state, action: PayloadAction<any>) => {
      state.product = action.payload;
    },
    addToList: (state, action: PayloadAction<any>) => {
      state.list.push({ id: action.payload.id, value: action.payload.value });
    },
    removeFromList: (state: any, action: PayloadAction<any>) => {
      state.list = state.list.filter(
        (element: any) => element.id != action.payload
      );
    },
    resetList: (state: any) => {
      state.list = [];
    },
  },
});

export const { saveProducts, saveUsers, addToList, removeFromList, resetList } =
  counterSlice.actions;

export default counterSlice.reducer;
