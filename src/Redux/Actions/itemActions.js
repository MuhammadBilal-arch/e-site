import { GET_ITEMS, FILTER_ITEMS, CART_ITEMS } from "./actionType";

export const getItems = (payload) => ({
  type: GET_ITEMS,
  payload,
});

export const filterItems = (payload) => ({
  type: FILTER_ITEMS,
  payload,
});

export const getcartItems = (payload) => ({
  type: CART_ITEMS,
  payload,
});
