import { types } from "./types";

const initialState = {
  data: [],
  userData: {},
  history: [],
  productRedeemed: {},
  userPoints: 0,
  pointsPlus: 0,
  message: "",
  selectedProduct: {},
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        isLoading: false,
        message: "",
      };
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
    case types.PRODUCT_POINTS:
      return {
        ...state,
        //points: action.payload,
        userPoints: state.userPoints + action.payload,
        isLoading: false,
      };
    case types.PRODUCT_POINTS_PLUS:
      return {
        ...state,
        //points: action.payload,
        pointsPlus: state.pointsPlus + action.payload,
        isLoading: false,
      };
    case types.RESET_STATE:
      return {
        ...state,
        userPoints: initialState.userPoints,
        pointsPlus: initialState.pointsPlus,
        history: initialState.history,
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
