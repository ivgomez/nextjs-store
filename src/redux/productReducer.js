import { types } from "./types";

const initialState = {
  data: [],
  history: [],
  productRedeemed: {},
  message: "",
  selectedProduct: {},
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_PRODUCTS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        message: "",
      };
    case types.GET_PRODUCTS_HISTORY:
      return {
        ...state,
        ...history, //: action.payload,
        isLoading: false,
        message: "",
      };
    case types.PRODUCT_REDEEM:
      return {
        ...state,
        history: [...state.history, action.payload],
        isLoading: false,
      };
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
