import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: false,
  },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    deleteData(state, action) {
       state.data= state.data.filter((item) =>{return item.id !== action.payload});
    },
  },
});

export const { setProduct, setStatus,deleteData } = productSlice.actions;
export default productSlice.reducer;

export function fetchProduct() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(false));
    try {
      axios.get("https://dummyjson.com/products").then((res) => {
        dispatch(setProduct(res.data.products));
        dispatch(setStatus(true));
      });
    } catch (err) {
      dispatch(setStatus(false));
    }
  };
}
