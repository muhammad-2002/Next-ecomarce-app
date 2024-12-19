import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iProduct {
  id: string;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

const initialState: Array<iProduct> = [];

export const cartSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<iProduct>) => {
      if (
        state.findIndex((product) => product.id === action.payload.id) === -1
      ) {
        state.push(action.payload);
      } else {
        return state.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
    },
    removeToCard: (state, action: PayloadAction<iProduct>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeToCard } = cartSlice.actions;
export default cartSlice.reducer;
