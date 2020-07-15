import { types } from "./types";
import { ProductService } from "../services/services";

export const setLoading = (isLoading) => {
  return {
    type: types.SET_LOADING,
    payload: isLoading,
  };
};

export const getUserDataAction = () => async (dispatch) => {
  dispatch(setLoading(true));
  const res = await ProductService.getUserData();
  dispatch({ type: types.GET_USER_DATA, payload: res.data });
};

export const getProductsAction = () => async (dispatch) => {
  dispatch(setLoading(true));
  const res = await ProductService.getAllProducts();
  dispatch({ type: types.GET_ALL_PRODUCTS, payload: res.data });
};

export const getProductsHistoryAction = () => async (dispatch) => {
  dispatch(setLoading(true));
  //const res = await ProductService.getProductHistory();
  dispatch({ type: types.GET_PRODUCTS_HISTORY, payload: history });
};

export const productRedeemAction = (product) => async (dispatch) => {
  dispatch(setLoading(true));
  //const res = await ProductService.productRedeem(productId);
  dispatch({ type: types.PRODUCT_REDEEM, payload: product });
};

export const productPointsAction = (amount) => async (dispatch) => {
  dispatch(setLoading(true));
  //const res = await ProductService.productPoints(amount);
  //dispatch({ type: types.PRODUCT_POINTS, payload: res.data });
  dispatch({ type: types.PRODUCT_POINTS, payload: amount });
};

export const productPointsPlusAction = (amount) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch({ type: types.PRODUCT_POINTS_PLUS, payload: amount });
};

export const resetStateAction = () => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch({ type: types.RESET_STATE });
};
