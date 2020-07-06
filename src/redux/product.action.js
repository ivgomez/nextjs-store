import { types } from "./types";
import { ProductService } from "../services/services";

export const setLoading = (isLoading) => {
  return {
    type: types.SET_LOADING,
    payload: isLoading,
  };
};

export const getProductsAction = () => async (dispatch) => {
  dispatch(setLoading(true));
  const res = await ProductService.getAllProducts();
  dispatch({ type: types.GET_ALL_PRODUCTS, payload: res.data });
};
