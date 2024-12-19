import { iProduct } from "@/app/admin/dashboard/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: iProduct = {
  _id: "",
  imgSrc: "",
  fileKey: "",
  name: "",
  price: "",
  category: "",
};
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<iProduct>) => {
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
