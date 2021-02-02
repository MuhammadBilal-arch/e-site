import { GET_ITEMS, FILTER_ITEMS, CART_ITEMS } from "../Actions/actionType";
const initialState = {
  Cartitems: "",
  CART_ITEMS: [],
};

export const ItemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        Cartitems: payload,
      };
    case FILTER_ITEMS:
      return {
        Cartitems: state.Cartitems.filter((item) =>
          item.itemName.toLowerCase().includes(payload.toLowerCase())
        ),
      };
    case CART_ITEMS:
      return {
        ...state,
        CART_ITEMS: payload,
      };
    default:
      return state;
  }
};
