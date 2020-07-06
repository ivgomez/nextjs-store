import { types } from "./types";

const initialState = {
  data: [],
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
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
